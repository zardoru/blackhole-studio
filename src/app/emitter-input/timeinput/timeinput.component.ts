import { Component, OnInit, Input } from '@angular/core';
import {
  CycleTimeEmitter,
  CycleTimeBeats,
  CycleTimeMsDuration,
  CycleTimeDeltatime,
  CycleTimeNotetimeFixedDuration,
  CycleTimeNoteToNote,
  CycleEmissionType, CycleTimeBeatFraction
} from '../../blackhole-classes/cycle-time-emitter';
import { validateTimestamp } from '../../blackhole-classes/osu-timestamp';



@Component({
  selector: 'app-timeinput',
  templateUrl: './timeinput.component.html',
  styleUrls: ['./timeinput.component.css']
})
export class TimeinputComponent implements OnInit {

  @Input() timeType: CycleEmissionType;

  currentTimeInput: CycleTimeEmitter;
  TimeInputType = CycleEmissionType;

  timeInputs: any;

  validateTimestamp(event) {
    const value = event.target.value;
    const validatedValue = validateTimestamp(value);
    if (!isNaN(validatedValue)) {
      this.currentTimeInput.startTime = validatedValue;
    }
  }

  set newType(type: CycleEmissionType) {
    this.timeType = type;
    this.currentTimeInput = this.timeInputs[this.timeType];
  }

  get newType() {
    return this.timeType;
  }

  constructor() {
    this.timeInputs = { // should match CycleEmissionType!!
      0: new CycleTimeMsDuration(),
      1: new CycleTimeDeltatime(),
      2: new CycleTimeBeats(),
      3: new CycleTimeBeatFraction(),
      4: new CycleTimeNotetimeFixedDuration(),
      5: new CycleTimeNoteToNote()
    };

    this.timeType = CycleEmissionType.Span;
    this.currentTimeInput = this.timeInputs[this.timeType];
  }



  ngOnInit() {
    this.currentTimeInput = this.timeInputs[this.timeType];
  }

}
