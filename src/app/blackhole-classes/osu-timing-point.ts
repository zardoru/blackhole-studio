import {isNumber} from 'util';

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

  get svMultiplier() {
    return -100 / this.value;
  }

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
    return (this.inherited === true) ? 0 : 1;
  }

  get kiaiInt() {
    return this.kiai ? 1 : 0;
  }

  get roundedTime() {
    return Math.round(this.time);
  }
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

  static fromString(s: string): OsuTimingPoint {
    const arr = s.split(',');
    const tp = new OsuTimingPoint();
    tp.time = parseFloat(arr[0]);
    tp.value = parseFloat(arr[1]);
    tp.measureLength = parseInt(arr[2], 10);
    tp.sampleSet = parseInt(arr[3], 10);
    tp.sampleIndex = parseInt(arr[4], 10);
    tp.volume = parseInt(arr[5], 10);
    tp.inherited = (arr[6] !== '1');
    tp.kiai = (arr[7] === '1');

    return tp;
  }

  // returns true if it has all the properties and are the right type
  static isValidDifference(x: any): boolean {
    return x.time          != null && typeof x.time === 'number'
        && x.value         != null && typeof x.value === 'number'
        && x.kiai          != null && typeof x.kiai === 'boolean'
        && x.volume        != null && typeof x.volume === 'number'
        && x.sampleSet     != null && Number.isInteger(x.sampleSet)
        && x.sampleIndex   != null && Number.isInteger(x.sampleIndex)
        && x.measureLength != null && typeof x.measureLength === 'number'
        && x.inherited     != null && typeof x.inherited === 'boolean';

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
    if (changes && changes.inherited !== undefined) {
      ret.inherited = changes.inherited;
    } else {
      ret.inherited = this.inherited;
    }
    return ret;
  }

  toDifference(): OsuTimingPointDifference {
    return {
      time: this.time,
      value: this.value,
      kiai: this.kiai,
      volume: this.volume,
      sampleSet: this.sampleSet,
      sampleIndex: this.sampleIndex,
      measureLength: this.measureLength,
      inherited: this.inherited
    };
  }
}


// left-biased binary search for timing points
function osuTPBinSearch(tpl: OsuTimingPoint[], time: number): number {
  let left = 0;
  let right = tpl.length;
  let center: number;

  while (left < right) {
    center = Math.floor((left + right) / 2);
    const val = tpl[center].time;

    if (val < time) {
      left = center + 1;
    } else {
      right = center;
    }
  }

  // bias it
  while (left > 0 && (left >= tpl.length || tpl[left].time > time)) {
    left--;
  }

  return left;
}

// assumption: these timing points are sorted, they're also sv changes.
export function composeTimingPoints(set1: OsuTimingPoint[],
                                    set2: OsuTimingPoint[],
                                    template: OsuTimingPoint): OsuTimingPoint[] {
  let ret: OsuTimingPoint[] = [];


  const ui1 = set1.filter(x => !x.inherited);
  const ui2 = set2.filter(x => !x.inherited);

  set1 = set1.filter(x => x.inherited);
  set2 = set2.filter(x => x.inherited);


  // Apply all of set 2 to set 1
  for (const tp of set1) {
    const s2Cur = set2[osuTPBinSearch(set2, tp.time)];

    // affectd by s2 (tp comes after s2)
    if (s2Cur.time <= tp.time) {
      const ntp = template.applyDifference({
        time: tp.time,
        value: -100 / (s2Cur.svMultiplier * tp.svMultiplier),
        inherited: true
      });

      ret.push(ntp);
    }

    // not affected by s2 (tp comes before s2)
    if (s2Cur.time > tp.time) {
      const ntp = template.applyDifference({
        time: tp.time,
        value: -100 / (tp.svMultiplier),
        inherited: true
      });

      ret.push(ntp);
    }
  }

  // Add the timing points of set 2 not in t1, including those with equal times.
  for (const tp of set2) {
    const s1Cur = set1[osuTPBinSearch(set1, tp.time)];

    //  tp's time is not in set1
    if (s1Cur.time !== tp.time) {

      // not affected by s1 (closest s1 comes after tp)
      if (s1Cur.time > tp.time) {
        const ntp = template.applyDifference(({
          time: tp.time,
          value: -100 / (tp.svMultiplier),
          inherited: true
        }));

        ret.push(ntp);
      }

      // affected by s1 (closest s1 comes before tp)
      if (s1Cur.time < tp.time) {
        const ntp = template.applyDifference(({
          time: tp.time,
          value: -100 / (s1Cur.svMultiplier * tp.svMultiplier),
          inherited: true
        }));

        ret.push(ntp);
      }
    }
  }

  ret = ret.concat(ui1).concat(ui2);
  ret.sort((a, b) => a.time - b.time);
  return ret;
}
