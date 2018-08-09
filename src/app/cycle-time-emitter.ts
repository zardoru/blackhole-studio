import {DivisorEmitter, CycleDivision} from './divisor-emitter';
import {ArgumentOutOfRangeError} from 'rxjs';

export abstract class CycleTimeEmitter {
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

    cycleStartTime(index: number): number {
        return index * this.cycleDuration + this.startTime;
    }

    createCycle(
        index: number,
        divisor: DivisorEmitter,
        timeDeformFunction,
        funcVars: any,
        generateLastPoint: boolean): CycleDivision[] {
        const effectiveStartTime = this.cycleStartTime(index);

        return divisor.generateSpanDivisors(
            effectiveStartTime,
            this.getDuration(index),
            timeDeformFunction,
            funcVars,
            generateLastPoint
        );
    }
}

export class CycleTimeMsDuration extends CycleTimeEmitter {
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

export class CycleTimeDeltatime extends CycleTimeEmitter {
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

export class CycleTimeBeats extends CycleTimeEmitter {
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

export class CycleTimeBeatFraction extends CycleTimeEmitter {
  totalBeats = 1;
  beatDivisor = 2;
  bpm = 120;

  set cycleCount(_: number) { /* do not allow */ }


  get cycleCount() {
    return this.totalBeats * this.beatDivisor;
  }

  get autocycle() { return true; }
  get isConstantCycleTime() { return true; }

  getDuration(cycleIndex: number): number {
    const mspb = 60000 / this.bpm;
    return mspb / this.beatDivisor;
  }

  constructor() {
    super();
  }
}

export abstract class CycleTimeNotetime extends CycleTimeEmitter {
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

        this.noteTimes = Array.from(valset).sort((a, b) => {
          return a - b;
        });

        this.cycleCount = this.noteTimes.length - 1;
    }

    get notes(): string {
        return this._notes;
    }

    cycleStartTime(cycle: number): number {
        return this.noteTimes[cycle] - this.noteTimes[0] + this.startTime;
    }

    protected constructor() {
        super();
        this.noteTimes = [];
    }
}

export class CycleTimeNotetimeFixedDuration extends CycleTimeNotetime {
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

export class CycleTimeNoteToNote extends CycleTimeNotetime {
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

export enum CycleEmissionType {
    Span,
    Delta,
    Beats,
    BeatDivision,
    NotetimeSpan,
    NoteToNote
}
