import { Component, OnInit, Input } from '@angular/core';
import { CycleTimeDeltatime } from '../../../blackhole-classes/cycle-time-emitter';
import { validateTimestamp } from '../../../blackhole-classes/osu-timestamp';

@Component({
  selector: 'app-timeinput-startend',
  templateUrl: './timeinput-startend.component.html',
  styleUrls: ['./timeinput-startend.component.css']
})
export class TimeinputStartendComponent implements OnInit {

  @Input() currentTimeInput: CycleTimeDeltatime;


  validateTimestamp(event) {
    const value = event.target.value;
    const validatedValue = validateTimestamp(value);
    if (!isNaN(validatedValue))
      this.currentTimeInput.endTime = validatedValue;
  }

  constructor() { }

  ngOnInit() {
  }

}
