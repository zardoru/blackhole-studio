import { DivisorInput } from "./divisor-input";
import { ArgumentOutOfRangeError } from "rxjs";

export abstract class TimeInput {
    startTime: number; 
    cycleCount: number;
    abstract getDuration(cycleIndex: number) : number;

    abstract get autocycle(); // whether this time input mode calculates cycles automatically
    abstract get isConstantCycleTime();

    get cycleDuration() {
        return this.getDuration(0);
    }

    createCycle(index : number, divisor : DivisorInput, timeDeformFunction) {
        var effectiveStartTime = index * this.getDuration(index) + this.startTime;
        
        return divisor.generateSpanDivisors(
            effectiveStartTime, 
            this.getDuration(index), 
            timeDeformFunction
        );
    }
}

export class TimeInputDuration extends TimeInput
{
    duration: number;

    get autocycle() { return false };
    get isConstantCycleTime() { return true };

    getDuration(cycleIndex: number): number {
        return this.duration;
    }
}

export class TimeInputStartEnd extends TimeInput
{
    endTime: number;

    get autocycle() { return false };
    get isConstantCycleTime() { return true };

    getDuration(cycleIndex: number): number {
        return this.endTime - this.startTime; 
    }
}

export class TimeInputBeats extends TimeInput
{
    beats: number;
    bpm: number;

    get autocycle() { return false };
    get isConstantCycleTime() { return true };

    getDuration(cycleIndex: number): number {
        return 1000 * 60 / this.bpm * this.beats;
    }
}

export abstract class TimeInputNotetime extends TimeInput
{
    get autocycle() { return true };

    noteTimes: number[];

    _notes: string;
    set notes(value: string) {
        this._notes = value;
    }

    get notes() : string {
        return this._notes;
    }

    constructor() {
        super();
        this.noteTimes = [];
    }
}

export class TimeInputNotetimeFixedDuration extends TimeInputNotetime
{
    duration: number;

    get isConstantCycleTime() { return true };

    getDuration(cycleIndex: number): number {
        if (this.noteTimes.length == 0) return this.duration;
        if (cycleIndex < 0) throw new ArgumentOutOfRangeError();
        if (cycleIndex >= this.noteTimes.length) throw new ArgumentOutOfRangeError();

        var spanToNext : number;
        if (cycleIndex == this.noteTimes.length - 1)
            spanToNext = Infinity;
        else 
            spanToNext = this.noteTimes[cycleIndex + 1] - this.noteTimes[cycleIndex];


        var mindur = Math.min(this.duration, spanToNext);

        return mindur;
    }
}

export class TimeInputNotetimeVariedDuration extends TimeInputNotetime
{
    get isConstantCycleTime() { return false };

    getDuration(cycleIndex: number): number {
        if (!this.noteTimes) return 0;
        if (this.noteTimes.length < 2) return 0;
        if (cycleIndex < 0) throw new ArgumentOutOfRangeError();
        if (cycleIndex >= this.noteTimes.length) throw new ArgumentOutOfRangeError();

        if (cycleIndex == this.noteTimes.length - 1)
            return 0;

        return this.noteTimes[cycleIndex + 1] - this.noteTimes[cycleIndex];
    }
}

export enum TimeInputType {
    Duration,
    StartEnd,
    Beats,
    NotetimeFixed,
    NotetimeVaried
};