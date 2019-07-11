import {OsuTimingPoint, OsuTimingPointDifference} from './osu-timing-point';
import {DivisorEmitter, DivisorEmitterBeatFraction, CycleDivision} from './divisor-emitter';
import {CycleTimeEmitter, CycleTimeBeats, CycleOutput} from './cycle-time-emitter';
import {SvFunction, SvFunctionType} from './sv-functions';

type TimingList = IterableIterator<OsuTimingPoint>;

export class OsuTimingPointEmitter {
  static* emitFixedBpm(cycle: CycleOutput,
                       defaultTimingPoint: OsuTimingPoint,
                       bpm: number): TimingList {

    defaultTimingPoint.inherited = false;

    const cl = cycle.cycle;
    let it: IteratorResult<CycleDivision>;
    while ((it = cl.next())) {
      if (it.done) {
        break;
      }

      const divisor = it.value;

      const point = defaultTimingPoint.applyDifference(
        {
          time: divisor.time,
          value: 60000 / bpm,
          inherited: false
        });

      yield point;
    }
  }

  static* emitBpmFunction(vars: any,
                          cycle: CycleOutput,
                          defaultTimingPoint: OsuTimingPoint,
                          bpmFunction: (number, any) => number,
                          skipRepeated: boolean): TimingList {

    let i = 0;
    let lastBpm = NaN;

    vars.builtin.divisorCount = cycle.count;

    const cl = cycle.cycle;
    let it: IteratorResult<CycleDivision>;
    while ((it = cl.next())) {
      if (it.done) {
        break;
      }

      const divisor = it.value;
      vars.builtin.currentDivisor = i;
      i++;

      const bpm = bpmFunction(divisor.fraction, vars);
      if (isNaN(bpm)) {
        continue;
      }

      const point = defaultTimingPoint.applyDifference({
        time: divisor.time,
        value: 60000 / bpm,
        inherited: false
      });

      // yield if not skip
      const skip = (bpm === lastBpm && skipRepeated);
      if (!skip) {
        lastBpm = bpm;
        yield point;
      }

    }
  }

  static* emitSv(vars: any,
                 cycle: CycleOutput,
                 defaultTimingPoint: OsuTimingPoint,
                 svFunction: (number, any) => number,
                 skipRepeated: boolean): TimingList {

    let i = 0;
    let lastSv = NaN;

    // set useful builtin stuff
    vars.builtin.divisorCount = cycle.count;

    const cl = cycle.cycle;
    let it: IteratorResult<CycleDivision>;
    while ((it = cl.next())) {
      if (it.done) {
        break;
      }

      const divisor = it.value;
      vars.builtin.currentDivisor = i;
      i++;

      // apply sv function
      let multiplier = 1;
      if (svFunction != null) {
        multiplier = svFunction(divisor.fraction, vars);
      }

      // skip intentional NaNs
      if (isNaN(multiplier) || multiplier == null) {
        continue;
      }

      // create a timing point
      const point = defaultTimingPoint.applyDifference({
        time: divisor.time,
        value: -100 / multiplier,
        inherited: true
      });

      // yield if it's valid
      const skip = (multiplier === lastSv && skipRepeated);
      if (!skip) {
        lastSv = multiplier;
        yield point;
      }

      // else console.log("skipping value = " + lastSv, " fraction " + divisor.fraction);
    }
  }
}


export function emitTargets(
  timeInput: CycleTimeEmitter,
  divisors: DivisorEmitter,
  svFunction: SvFunction,
  timeFunction: SvFunction,
  defaultTimingPoint: OsuTimingPoint,
  fixedBpm: number,
  includeDivisorAtEnd: boolean): OsuTimingPoint[] {
  const output: OsuTimingPoint[] = [];
  const cycleCount = timeInput.cycleCount;

  function generateStaticBuiltinVariables(currentCycle: number) {
    const builtin: any = {};

    builtin.divisorBpm = null;
    if (divisors instanceof DivisorEmitterBeatFraction) {
      builtin.divisorBpm = (divisors as DivisorEmitterBeatFraction).bpm;
    }

    builtin.cycleBpm = null;
    if (timeInput instanceof CycleTimeBeats) {
      builtin.cycleBpm = (timeInput as CycleTimeBeats).bpm;
    }

    builtin.currentCycle = currentCycle;
    builtin.cycleCount = cycleCount;

    builtin.cycleSpan = timeInput.cycleDuration;
    builtin.divisionSpan = timeInput.cycleDuration / divisors.getSpanDivisorCount(timeInput.cycleDuration);

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

    const cycleData = timeInput.createCycle(
      i,
      divisors,
      userFunctionTime,
      varsTime,
      includeDivisorAtEnd && (i === (cycleCount - 1))
    );

    let cycleResult: TimingList;

    if (svFunction) {
      if (svFunction.type === SvFunctionType.BPM) {
        cycleResult = OsuTimingPointEmitter.emitBpmFunction(
          varsSv,
          cycleData,
          defaultTimingPoint,
          userFunctionSV,
          !svFunction.doNotSkipRepeatedValues);
      } else {
        cycleResult = OsuTimingPointEmitter.emitSv(
          varsSv,
          cycleData,
          defaultTimingPoint,
          userFunctionSV,
          !svFunction.doNotSkipRepeatedValues);
      }
    } else {
      cycleResult = OsuTimingPointEmitter.emitFixedBpm(
        cycleData,
        defaultTimingPoint,
        fixedBpm);
    }

    let res = cycleResult.next();
    while (!res.done) {
      output.push(res.value);
      res = cycleResult.next();
    }
  }

  return output;
}

export function applyManipulation(func: SvFunction, timingPoints: OsuTimingPointDifference[]) {
  const f = eval(func.body);
  const vars = SvFunction.getCurrentParameters(func) || {};
  return f(timingPoints, vars);
}
