///<reference path="../osu-timing-point.ts"/>
import { Component, OnInit } from '@angular/core';
import {OsuTimingPoint, SampleSet} from '../osu-timing-point';

@Component({
  selector: 'app-timing-point-template',
  templateUrl: './timing-point-template.component.html',
  styleUrls: ['./timing-point-template.component.css']
})
export class TimingPointTemplateComponent implements OnInit {

  currentTimingPoint: OsuTimingPoint;

  SampleSet = SampleSet;

  constructor() {
    this.currentTimingPoint = new OsuTimingPoint();
  }

  ngOnInit() {
  }

}
