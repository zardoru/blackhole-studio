
export enum SampleSet {
    Auto,
    Normal,
    Soft,
    Drum
}

export interface OsuTimingPointDifference {
    time?: number;
    value?: number;
    kiai?: boolean;
    volume?: number;
    sampleSet?: SampleSet;
    sampleIndex?: number;
    measureLength?: number;
    inherited?: boolean;
}

export class OsuTimingPoint {
    /* in MS */
    time = 0;

    /*
        if uninherited, it's beatspace
        if inherited, it's -100 / SV
    */
    value: number = 60000 / 120;

    kiai = false;

    volume = 15;


    sampleSet: SampleSet = SampleSet.Auto;
    sampleIndex = 0;
    measureLength = 4;

    inherited = false;

    constructor() {
        this.time = 0;
        this.value = 60000 / 120;
        this.kiai = false;
        this.volume = 15;
        this.sampleSet = SampleSet.Auto;
        this.sampleIndex = 0;
        this.measureLength = 4;
        this.inherited = false;
    }

    get inheritedInt() {
        return this.inherited ? 1 : 0;
    }

    get kiaiInt() {
        return this.kiai ? 1 : 0;
    }

    toString() {
        return `${this.time},${this.value},${this.measureLength},` +
               `${this.sampleSet},${this.sampleIndex},${this.volume},` +
               `${this.inheritedInt},${this.kiaiInt}`;
    }

    applyDifference(changes: OsuTimingPointDifference) {
        const ret = new OsuTimingPoint();
        ret.time = changes && changes.time || this.time;
        ret.value = changes && changes.value || this.value;
        ret.kiai = changes && changes.kiai || this.kiai;
        ret.volume = changes && changes.volume || this.volume;
        ret.sampleSet = changes && changes.sampleSet || this.sampleSet;
        ret.sampleIndex = changes && changes.sampleIndex || this.sampleIndex;
        ret.measureLength = changes && changes.measureLength || this.measureLength;

        return ret;
    }
}
