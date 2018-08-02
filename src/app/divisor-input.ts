export interface CycleDivision {time: number, fraction: number}
export type Cycle = CycleDivision[];

export abstract class DivisorInput {
    abstract getSpanDivisorCount(span: number);

    generateSpanDivisors(startTime, duration, timeDeformer): Cycle {
        const ret: Cycle = [];

        const count = this.getSpanDivisorCount(duration);
        for (let i = 0; i < count; i++) {
            let fraction = i / count;
            fraction = timeDeformer && timeDeformer(fraction) || fraction;

            ret.push({
                time: startTime + duration * fraction,
                fraction: fraction
            });
        }

        return ret;
    }
}

export class DivisorInputBPM extends DivisorInput {
    bpm: number;
    beatDivisor: number; // whole number 1, 2, 4, etc...

    get divisorSpan() {
        return 60000 / this.bpm / this.beatDivisor;
    }

    getSpanDivisorCount(spanMs: number) {
        const beatsPerMs = this.bpm / 60000;
        const beats = beatsPerMs * spanMs;
        const divisorCount = Math.floor(beats * this.beatDivisor);
        return divisorCount;
    }

    constructor() {
        super();
        this.bpm = 120;
        this.beatDivisor = 1;
    }
}

export class DivisorInputFixed extends DivisorInput {
    count: number;

    getSpanDivisorCount(span: number) {
        return this.count;
    }

    constructor() {
        super();
        this.count = 2;
    }
}

export class DivisorInputSpan extends DivisorInput {
    span: number;

    getSpanDivisorCount(span: number) {
        return span / this.span;
    }

    constructor() {
        super();
        this.span = 100;
    }
}

export enum DivisorInputType {
    Fixed,
    BPM,
    Span
}
