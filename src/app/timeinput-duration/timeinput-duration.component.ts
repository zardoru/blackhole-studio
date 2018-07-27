import { Component, OnInit, Input } from '@angular/core';
import { TimeInputDuration } from '../time-input';

@Component({
  selector: 'app-timeinput-duration',
  templateUrl: './timeinput-duration.component.html',
  styleUrls: ['./timeinput-duration.component.css']
})
export class TimeinputDurationComponent implements OnInit {

  @Input() currentTimeInput: TimeInputDuration;

  constructor() { }

  ngOnInit() {
  }

}
