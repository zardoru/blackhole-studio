
export enum SampleSet {
    Auto,
    Normal,
    Soft,
    Drum
};

export type OsuTimingPointDifference = {
    time?: number;
    value?: number;
    kiai?: boolean;
    volume?: number;
    sampleSet?: SampleSet;
    sampleIndex?: number;
    measureLength?: number;
    inherited?: boolean;
};

export class OsuTimingPoint {
    /* in MS */
    time: number;

    /* 
        if uninherited, it's beatspace
        if inherited, it's -100 / SV
    */
    value: number;

    kiai: boolean;
    
    volume: number;
    
    
    sampleSet: SampleSet;
    sampleIndex: number;
    measureLength: number;

    inherited: boolean;

    constructor() {

    }

    applyDifference(changes: OsuTimingPointDifference) {
        var ret = new OsuTimingPoint();
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
