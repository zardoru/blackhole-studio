import { OsuTimingPoint } from './osu-timing-point';
import {Cycle, DivisorInput, DivisorInputBPM} from './divisor-input';
import {TimeInput, TimeInputBeats} from './time-input';
import {SvFunction} from './sv-functions';

type TimingList = OsuTimingPoint[];

export class OsuTimingPointEmitter {
    static emitFixedBpm(cycle: Cycle,
                        defaultTimingPoint: OsuTimingPoint,
                        bpm: number): TimingList {
      const ret: TimingList = [];

      defaultTimingPoint.inherited = false;

      for (const divisor of cycle) {
        const point = defaultTimingPoint.applyDifference(
          {
            time: divisor.time,
            value: 60000 / bpm
          });

        ret.push(point);
      }

      return ret;
    }
    static emitBpmFunction(vars: any,
                           cycle: Cycle,
                           defaultTimingPoint: OsuTimingPoint,
                           bpmFunction: (number, any) => number): TimingList {
      const ret: TimingList = [];

      defaultTimingPoint.inherited = false;

      let i = 0;

      vars.builtin.divisorCount = cycle.length;

      for (const divisor of cycle) {
        vars.builtin.currentDivisor = i;
        i++;

        const bpm = bpmFunction(divisor.fraction, vars);
        if (isNaN(bpm)) { continue; }

        const point = defaultTimingPoint.applyDifference({
          time: divisor.time,
          value: 60000 / bpm
        });

        ret.push(point);

      }

      return ret;
    }

    static emitSv(vars: any,
           cycle: Cycle,
           defaultTimingPoint: OsuTimingPoint,
           svFunction: (number, any) => number): TimingList {
        const ret: TimingList = [];

        // make sure it's inherited
        defaultTimingPoint.inherited = true;
        let i = 0;
        let lastSv = NaN;

        // set useful builtin stuff
        vars.builtin.divisorCount = cycle.length;

        for (const divisor of cycle) {
            // set builtin stuff that depends on the divisor index
            vars.builtin.currentDivisor = i;
            i++;

            // call the sv function
            const multiplier = svFunction && svFunction(divisor.fraction, vars) || divisor.fraction;

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

    // builtin.spanPerCycle = timeInput.cycleDuration;
    // builtin.spanPerDivision = divisors.

    return builtin;
  }

  const userFunctionSV = svFunction ? eval(svFunction.body) : null;
  const userFunctionTime = timeFunction ? eval(timeFunction.body) : null;

  const varsSv: any = svFunction ? SvFunction.getCurrentParameters(svFunction) : {};
  const varsTime: any = timeFunction ? SvFunction.getCurrentParameters(timeFunction) : {};

  for (let i = 0; i < cycleCount; i++) {
    const builtin = generateStaticBuiltinVariables(i);
    varsSv.builtin = builtin;
    varsTime.builtin = builtin;

    const cycleData = timeInput.createCycle(i, divisors, userFunctionTime, varsTime);

    let cycleResult: TimingList;

    if (svFunction) {
      if (svFunction.isBpm) {
        cycleResult = OsuTimingPointEmitter.emitBpmFunction(
                            varsSv,
                            cycleData,
                            defaultTimingPoint,
                            userFunctionSV);
      } else {
        cycleResult = OsuTimingPointEmitter.emitSv(
                            varsSv,
                            cycleData,
                            defaultTimingPoint,
                            userFunctionSV);
      }
    } else {
      cycleResult = OsuTimingPointEmitter.emitFixedBpm(
                            cycleData,
                            defaultTimingPoint,
                            fixedBpm);
    }

    output = output.concat(cycleResult.map(x => x.toString()));
  }

  return output;
}
