import { Component, OnInit, Input } from '@angular/core';
import { TimeInputStartEnd } from '../time-input';
import { validateTimestamp } from '../osu-timestamp';

@Component({
  selector: 'app-timeinput-startend',
  templateUrl: './timeinput-startend.component.html',
  styleUrls: ['./timeinput-startend.component.css']
})
export class TimeinputStartendComponent implements OnInit {

  @Input() currentTimeInput: TimeInputStartEnd;


  validateTimestamp(event) {
    var value = event.target.value;
    var validatedValue = validateTimestamp(value);
    if (!isNaN(validatedValue))
      this.currentTimeInput.endTime = validatedValue;  
  }

  constructor() { }

  ngOnInit() {
  }

}
