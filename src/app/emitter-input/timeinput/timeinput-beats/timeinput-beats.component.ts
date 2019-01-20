import { Component, OnInit, Input } from '@angular/core';
import { CycleTimeBeats } from '../../../blackhole-classes/cycle-time-emitter';

@Component({
  selector: 'app-timeinput-beats',
  templateUrl: './timeinput-beats.component.html',
  styleUrls: ['./timeinput-beats.component.css']
})
export class TimeinputBeatsComponent implements OnInit {

  @Input() currentTimeInput: CycleTimeBeats;

  constructor() { }

  ngOnInit() {
  }

}
