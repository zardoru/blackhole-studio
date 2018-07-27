import { Component, OnInit, Input } from '@angular/core';
import { TimeInputBeats } from '../time-input';

@Component({
  selector: 'app-timeinput-beats',
  templateUrl: './timeinput-beats.component.html',
  styleUrls: ['./timeinput-beats.component.css']
})
export class TimeinputBeatsComponent implements OnInit {

  @Input() currentTimeInput: TimeInputBeats;

  constructor() { }

  ngOnInit() {
  }

}
