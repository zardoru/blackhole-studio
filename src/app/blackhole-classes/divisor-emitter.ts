export interface CycleDivision {time: number; fraction: number;}
export type Cycle = IterableIterator<CycleDivision>;

export enum EndPointMode {
  NoEndPoint,
  LastCycle,
  EveryCycle
}

export abstract class DivisorEmitter {
    abstract getSpanDivisorCount(span: number);

    *generateSpanDivisors(
        startTime: number,
        duration: number,
        timeWarpFunction,
        vars: any,
        includeEndPoint: boolean): Cycle {
        const count = this.getSpanDivisorCount(duration);

        function generateSpanDivisorsInner(i: number) {
            let fraction = i / count;
            fraction = timeWarpFunction && timeWarpFunction(fraction, vars) || fraction;

            return {
                time: (startTime + duration * fraction),
                fraction: fraction
            };
        }

        for (let i = 0; i < count; i++) {
            yield generateSpanDivisorsInner(i);
        }

        if (includeEndPoint) {
            yield generateSpanDivisorsInner(count);
        }
    }
}

export class DivisorEmitterBeatFraction extends DivisorEmitter {
    bpm: number;
    beatDivisor: number; // whole number 1, 2, 4, etc...

    get divisorSpan() {
        return 60000 / this.bpm / this.beatDivisor;
    }

    getSpanDivisorCount(spanMs: number) {
        return spanMs / this.divisorSpan;
    }

    constructor() {
        super();
        this.bpm = 120;
        this.beatDivisor = 1;
    }
}

export class DivisorEmitterByCount extends DivisorEmitter {
    count: number;

    getSpanDivisorCount(span: number) {
        return this.count;
    }

    constructor() {
        super();
        this.count = 2;
    }
}

export class DivisorEmitterTimeSpan extends DivisorEmitter {
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
