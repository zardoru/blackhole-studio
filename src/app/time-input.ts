import {DivisorInput} from './divisor-input';
import {ArgumentOutOfRangeError} from 'rxjs';

export abstract class TimeInput {
    startTime: number;
    cycleCount: number;
    abstract getDuration(cycleIndex: number): number;

    abstract get autocycle(); // whether this time input mode calculates cycles automatically
    abstract get isConstantCycleTime();

    get cycleDuration() {
        return this.getDuration(0);
    }

    protected constructor() {
        this.startTime = 0;
        this.cycleCount = 1;
    }

    createCycle(index: number, divisor: DivisorInput, timeDeformFunction, funcVars: any) {
        const effectiveStartTime = index * this.getDuration(index) + this.startTime;

        return divisor.generateSpanDivisors(
            effectiveStartTime,
            this.getDuration(index),
            timeDeformFunction,
            funcVars
        );
    }
}

export class TimeInputDuration extends TimeInput {
    duration: number;

    get autocycle() { return false; }
    get isConstantCycleTime() { return true; }

    getDuration(cycleIndex: number): number {
        return this.duration;
    }

    constructor() {
        super();
        this.duration = 0;
    }
}

export class TimeInputStartEnd extends TimeInput {
    endTime: number;

    get autocycle() { return false; }
    get isConstantCycleTime() { return true; }

    getDuration(cycleIndex: number): number {
        return this.endTime - this.startTime;
    }

    constructor() {
        super();
        this.endTime = 0;
    }
}

export class TimeInputBeats extends TimeInput {
    beats: number;
    bpm: number;

    get autocycle() { return false; }
    get isConstantCycleTime() { return true; }

    getDuration(cycleIndex: number): number {
        return 1000 * 60 / this.bpm * this.beats;
    }

    constructor() {
        super();
        this.beats = 1;
        this.bpm = 120;
    }
}

export abstract class TimeInputNotetime extends TimeInput {
    get autocycle() { return true; }

    noteTimes: number[];

    _notes: string;
    set notes(value: string) {
        this._notes = value;

        const valset = new Set();

        // parse from this syntax
        // time - (time|discarded,...)

        const re = /(\d+)\|\d+/g;
        let match;
        while ( (match = re.exec(value)) != null ) {
            valset.add(parseInt(match[1], 10));
        }

        this.noteTimes = Array.from(valset);
    }

    get notes(): string {
        return this._notes;
    }

    protected constructor() {
        super();
        this.noteTimes = [];
    }
}

export class TimeInputNotetimeFixedDuration extends TimeInputNotetime {
    duration: number;

    get isConstantCycleTime() { return true; }

    constructor() {
      super();
    }

    getDuration(cycleIndex: number): number {
        if (this.noteTimes.length === 0) { return this.duration; }
        if (cycleIndex < 0) { throw new ArgumentOutOfRangeError(); }
        if (cycleIndex >= this.noteTimes.length) { throw new ArgumentOutOfRangeError(); }

        let spanToNext: number;
        if (cycleIndex === this.noteTimes.length - 1) {
            spanToNext = Infinity;
        } else {
            spanToNext = this.noteTimes[cycleIndex + 1] - this.noteTimes[cycleIndex];
        }


      return Math.min(this.duration, spanToNext);
    }
}

export class TimeInputNotetimeVariedDuration extends TimeInputNotetime {
    get isConstantCycleTime() { return false; }

    constructor() {
      super();
    }

    getDuration(cycleIndex: number): number {
        if (!this.noteTimes) { return 0; }
        if (this.noteTimes.length < 2) { return 0; }
        if (cycleIndex < 0) { throw new ArgumentOutOfRangeError(); }
        if (cycleIndex >= this.noteTimes.length) { throw new ArgumentOutOfRangeError(); }

        if (cycleIndex === this.noteTimes.length - 1) {
            return 0;
        }

        return this.noteTimes[cycleIndex + 1] - this.noteTimes[cycleIndex];
    }
}

export enum TimeInputType {
    Duration,
    StartEnd,
    Beats,
    NotetimeFixed,
    NotetimeVaried
}
