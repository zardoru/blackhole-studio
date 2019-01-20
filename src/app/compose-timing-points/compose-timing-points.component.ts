import { Component, OnInit } from '@angular/core';
import {composeTimingPoints, OsuTimingPoint} from '../blackhole-classes/osu-timing-point';

@Component({
  selector: 'app-compose-timing-points',
  templateUrl: './compose-timing-points.component.html',
  styleUrls: ['./compose-timing-points.component.css']
})
export class ComposeTimingPointsComponent implements OnInit {
  set1lines: string;
  set2lines: string;
  output: string;

  constructor() {
    this.set1lines = '';
    this.set2lines = '';
    this.output = '';
  }

  ngOnInit() {
  }

  compose() {
    const set1 = this.set1lines.split('\n').map(x => OsuTimingPoint.fromString(x));
    const set2 = this.set2lines.split('\n').map(x => OsuTimingPoint.fromString(x));
    const composedOutput = composeTimingPoints(set1, set2, set1[0]);

    this.output = composedOutput.map(x => x.toString()).join('\n');
  }
}
