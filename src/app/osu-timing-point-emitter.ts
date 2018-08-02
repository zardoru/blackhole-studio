import { OsuTimingPoint } from './osu-timing-point';
import {Cycle, DivisorInput, DivisorInputBPM} from './divisor-input';
import {TimeInput, TimeInputBeats} from './time-input';
import {SvFunction} from './sv-functions';

type TimingList = OsuTimingPoint[];

export class OsuTimingPointEmitter {
    static emitFixedBpm(builtin: any,
                        cycle: Cycle,
                        defaultTimingPoint: OsuTimingPoint,
                        bpm: number): TimingList {
      return [];
    }
    static emitBpmFunction(builtin: any,
                           cycle: Cycle,
                           defaultTimingPoint: OsuTimingPoint,
                           bpmFunction: (number, any) => number): TimingList {
      const ret: TimingList = [];

      defaultTimingPoint.inherited = false;

      let i = 0;

      builtin.divisorCount = cycle.length;

      for (const divisor of cycle) {
        builtin.currentDivisor = i;
        i++;

        const bpm = bpmFunction(divisor.fraction, builtin);
        if (isNaN(bpm)) { continue; }

        const point = defaultTimingPoint.applyDifference({
          time: divisor.time,
          value: 60000 / bpm
        });

        ret.push(point);

      }

      return ret;
    }

    static emitSv(builtin: any,
           cycle: Cycle,
           defaultTimingPoint: OsuTimingPoint,
           svFunction: (number, any) => number): TimingList {
        const ret: TimingList = [];

        // make sure it's inherited
        defaultTimingPoint.inherited = true;
        let i = 0;
        let lastSv = NaN;

        // set useful builtin stuff
        builtin.divisorCount = cycle.length;

        for (const divisor of cycle) {
            // set builtin stuff that depends on the divisor index
            builtin.currentDivisor = i;
            i++;

            // call the sv function
            const multiplier = svFunction && svFunction(divisor.fraction, builtin) || divisor.fraction;

            // skip over NaNs (see reference)
            if (isNaN(multiplier)) { continue; }

            // apply the differences to the timing point
            const point = defaultTimingPoint.applyDifference({
                    time: divisor.time,
                    value: -100 / multiplier
                });

            // don't repeat SV values! if it doesn't repeat, push it.
            if (multiplier !== lastSv) {
                lastSv = multiplier;
                ret.push(point);
            }
        }

        return ret;
    }
}


export function emitTargets(
  timeInput: TimeInput,
  divisors: DivisorInput,
  svFunction: SvFunction,
  timeFunction: SvFunction,
  defaultTimingPoint: OsuTimingPoint,
  fixedBpm: number): string[] {
  let output: string[] = [];
  const cycleCount = timeInput.cycleCount;

  function generateStaticBuiltinVariables(currentCycle: number) {
    const builtin: any = {};

    builtin.divisorBpm = null;
    if (divisors instanceof DivisorInputBPM) {
      builtin.divisorBpm = (divisors as DivisorInputBPM).bpm;
    }

    builtin.cycleBpm = null;
    if (timeInput instanceof TimeInputBeats) {
      builtin.cycleBpm = (timeInput as TimeInputBeats).bpm;
    }

    builtin.currentCycle = currentCycle;
    builtin.cycleCount = cycleCount;

    return builtin;
  }

  const userFunctionSV = svFunction ? eval(svFunction.body) : null;
  const userFunctionTime = svFunction ? eval(timeFunction.body) : null;

  for (let i = 0; i < cycleCount; i++) {
    const cycleData = timeInput.createCycle(i, divisors, userFunctionTime);
    const builtin = generateStaticBuiltinVariables(i);
    let cycleResult: TimingList;
    if (svFunction) {
      if (svFunction.isBpm) {
        cycleResult = OsuTimingPointEmitter.emitBpmFunction(
                            builtin,
                            cycleData,
                            defaultTimingPoint,
                            userFunctionSV);
      } else {
        cycleResult = OsuTimingPointEmitter.emitSv(
                            builtin,
                            cycleData,
                            defaultTimingPoint,
                            userFunctionSV);
      }
    } else {
      cycleResult = OsuTimingPointEmitter.emitFixedBpm(
                            builtin,
                            cycleData,
                            defaultTimingPoint,
                            fixedBpm);
    }

    output = output.concat(cycleResult.map(x => x.toString()));
  }

  return output;
}
