import { Component, OnInit, Input } from '@angular/core';
import {
  TimeInput,
  TimeInputBeats,
  TimeInputDuration,
  TimeInputStartEnd,
  TimeInputNotetimeFixedDuration,
  TimeInputNotetimeVariedDuration,
  TimeInputType
} from '../time-input';
import { validateTimestamp } from '../osu-timestamp';



@Component({
  selector: 'app-timeinput',
  templateUrl: './timeinput.component.html',
  styleUrls: ['./timeinput.component.css']
})
export class TimeinputComponent implements OnInit {

  @Input() timeType: TimeInputType;

  currentTimeInput: TimeInput;
  TimeInputType = TimeInputType;

  timeInputs: any;

  validateTimestamp(event) {
    let value = event.target.value;
    let validatedValue = validateTimestamp(value);
    if (!isNaN(validatedValue)) {
      this.currentTimeInput.startTime = validatedValue;
    }
  }

  set newType(type: TimeInputType) {
    this.timeType = type;
    this.currentTimeInput = this.timeInputs[this.timeType];
  }

  get newType() {
    return this.timeType;
  }

  constructor() {
    this.timeInputs = { // should match TimeInputType!!
      0: new TimeInputDuration(),
      1: new TimeInputStartEnd(),
      2: new TimeInputBeats(),
      3: new TimeInputNotetimeFixedDuration(),
      4: new TimeInputNotetimeVariedDuration()
    };

    this.timeType = TimeInputType.Duration;
    this.currentTimeInput = this.timeInputs[this.timeType];
  }



  ngOnInit() {
    this.currentTimeInput = this.timeInputs[this.timeType];
  }

}
