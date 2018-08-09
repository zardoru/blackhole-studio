import {Component, Input, OnInit} from '@angular/core';
import {CycleTimeBeatFraction} from '../../cycle-time-emitter';

@Component({
  selector: 'app-timeinput-beatfraction',
  templateUrl: './timeinput-beatfraction.component.html',
  styleUrls: ['./timeinput-beatfraction.component.css']
})
export class TimeinputBeatfractionComponent implements OnInit {

  @Input() currentTimeInput: CycleTimeBeatFraction;

  constructor() { }

  ngOnInit() {
  }

}
