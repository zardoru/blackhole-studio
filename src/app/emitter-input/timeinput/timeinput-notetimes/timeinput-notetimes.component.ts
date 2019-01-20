import { Component, OnInit, Input } from '@angular/core';
import {
  CycleTimeEmitter,
  CycleTimeNotetime,
  CycleTimeNotetimeFixedDuration,
  CycleEmissionType,
  CycleTimeMsDuration,
  CycleTimeBeats
} from '../../../blackhole-classes/cycle-time-emitter';

@Component({
  selector: 'app-timeinput-notetimes',
  templateUrl: './timeinput-notetimes.component.html',
  styleUrls: ['./timeinput-notetimes.component.css']
})
export class TimeinputNotetimesComponent implements OnInit {

  @Input() currentTimeInput: CycleTimeNotetime;

  @Input() innerTimeInput: CycleTimeEmitter;

  _innerTimeType: CycleEmissionType;

  get innerTimeType() {
    return this._innerTimeType;
  }

  set innerTimeType(type: CycleEmissionType) {
    if (!this.currentTimeInput) return;

    this._innerTimeType = type;

    if (type == CycleEmissionType.Span) {
      let timeInput = new CycleTimeMsDuration();
      this.innerTimeInput = new Proxy(timeInput, {
        set: (obj, prop, value) => {
          obj[prop] = value;

          if (prop == "duration") {
            if (this.isFixedDuration) {
              var tiObj = this.currentTimeInput as CycleTimeNotetimeFixedDuration;
              tiObj.duration = obj.getDuration(0);
            }
          }

          return true;
        }
      });
    }


    if (type == CycleEmissionType.Beats) {
      let timeInput = new CycleTimeBeats();
      this.innerTimeInput = new Proxy(timeInput, {
        set: (obj, prop, value) => {
          obj[prop] = value;

          if (prop == "bpm" || prop == "beats") {
            if (this.isFixedDuration)
              (this.currentTimeInput as CycleTimeNotetimeFixedDuration)
                .duration = obj.getDuration(0);
          }

          return true;
        }
      });
    } 
  }

  TimeInputType = CycleEmissionType;
  TimeInputNotetimeFixedDuration = CycleTimeNotetimeFixedDuration;

  get isFixedDuration() {
    return this.currentTimeInput instanceof CycleTimeNotetimeFixedDuration;
  }

  constructor() { 
    
  }

  ngOnInit() {
    this.innerTimeType = CycleEmissionType.Span;
  }

}
