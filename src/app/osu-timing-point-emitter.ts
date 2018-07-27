import { OsuTimingPoint } from "./osu-timing-point";
import { Cycle } from "./divisor-input";

type TimingList = [OsuTimingPoint];

export class OsuTimingPointEmitter {
    // emitBpmFixed(cycle : Cycle, defaultTimingPoint: OsuTimingPoint, bpm: number)  : TimingList;
    // emitBpmFunction() : TimingList;

    emitSv(cycle : Cycle, defaultTimingPoint: OsuTimingPoint, svFunction) : TimingList {
        var ret : TimingList;

        // make sure it's inherited
        defaultTimingPoint.inherited = true;
        
        for(var divisor of cycle) {
            var multiplier = svFunction && svFunction(divisor.fraction) || divisor.fraction;
            var point = defaultTimingPoint.applyDifference({
                    time: divisor.time,
                    value: -100 / multiplier
                });
            
            ret.push(point);
        }

        return ret;
    }
}
