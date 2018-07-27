export type CycleDivision = {time: number, fraction: number};
export type Cycle = [CycleDivision];

export abstract class DivisorInput {
    abstract getSpanDivisorCount(span: number);
    
    generateSpanDivisors(startTime, duration, timeDeformer) : Cycle {
        let ret : Cycle;

        var count = this.getSpanDivisorCount(duration);
        for (var i = 0; i < count; i++) {
            var fraction = i / count; 
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
        var beatsPerMs = this.bpm / 60000;
        var beats = beatsPerMs * spanMs;
        var divisorCount = Math.floor(beats * this.beatDivisor);
        return divisorCount;
    }
}

export class DivisorInputFixed extends DivisorInput {
    count: number;

    getSpanDivisorCount(span: number) {
        return this.count;
    }
}

export enum DivisorInputType {
    Fixed,
    BPM
}