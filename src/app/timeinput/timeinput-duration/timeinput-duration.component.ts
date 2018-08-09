import { Component, OnInit, Input } from '@angular/core';
import { CycleTimeMsDuration } from '../../cycle-time-emitter';

@Component({
  selector: 'app-timeinput-duration',
  templateUrl: './timeinput-duration.component.html',
  styleUrls: ['./timeinput-duration.component.css']
})
export class TimeinputDurationComponent implements OnInit {

  @Input() currentTimeInput: CycleTimeMsDuration;

  constructor() { }

  ngOnInit() {
  }

}
