import { Component, OnInit, Input } from '@angular/core';
import {
  TimeInput,
  TimeInputNotetime,
  TimeInputNotetimeFixedDuration,
  TimeInputType,
  TimeInputDuration,
  TimeInputBeats
} from '../time-input';

@Component({
  selector: 'app-timeinput-notetimes',
  templateUrl: './timeinput-notetimes.component.html',
  styleUrls: ['./timeinput-notetimes.component.css']
})
export class TimeinputNotetimesComponent implements OnInit {

  @Input() currentTimeInput: TimeInputNotetime;

  @Input() innerTimeInput: TimeInput;

  _innerTimeType: TimeInputType;

  get innerTimeType() {
    return this._innerTimeType;
  }

  set innerTimeType(type: TimeInputType) {
    if (!this.currentTimeInput) return;

    this._innerTimeType = type;

    if (type == TimeInputType.Duration) {
      let timeInput = new TimeInputDuration();
      this.innerTimeInput = new Proxy(timeInput, {
        set: (obj, prop, value) => {
          obj[prop] = value;

          if (prop == "duration") {
            if (this.isFixedDuration) {
              var tiObj = this.currentTimeInput as TimeInputNotetimeFixedDuration;
              tiObj.duration = obj.getDuration(0);
            }
          }

          return true;
        }
      });
    }


    if (type == TimeInputType.Beats) {
      let timeInput = new TimeInputBeats();
      this.innerTimeInput = new Proxy(timeInput, {
        set: (obj, prop, value) => {
          obj[prop] = value;

          if (prop == "bpm" || prop == "beats") {
            if (this.isFixedDuration)
              (this.currentTimeInput as TimeInputNotetimeFixedDuration)
                .duration = obj.getDuration(0);
          }

          return true;
        }
      });
    } 
  }

  TimeInputType = TimeInputType;
  TimeInputNotetimeFixedDuration = TimeInputNotetimeFixedDuration;

  get isFixedDuration() {
    return this.currentTimeInput instanceof TimeInputNotetimeFixedDuration;
  }

  constructor() { 
    
  }

  ngOnInit() {
    this.innerTimeType = TimeInputType.Duration;
  }

}
