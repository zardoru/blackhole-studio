import { Component, OnInit, ViewChild } from '@angular/core';
import { TimeinputComponent } from '../timeinput/timeinput.component';
import { DivisorinputComponent } from '../divisorinput/divisorinput.component';
import { SvFunction } from '../sv-functions';
import { TimingPointTemplateComponent } from '../timing-point-template/timing-point-template.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-emission-control',
  templateUrl: './emission-control.component.html',
  styleUrls: ['./emission-control.component.css']
})
export class EmissionControlComponent implements OnInit {
  @ViewChild(TimeinputComponent)
  timeInput: TimeinputComponent;

  @ViewChild(DivisorinputComponent)
  divisorInput: DivisorinputComponent;

  @ViewChild(TimingPointTemplateComponent)
  timingPointTemplate: TimingPointTemplateComponent;

  useFixedBpm: boolean;
  bpm: number;
  currentFunction: SvFunction;
  currentTimeFunction: SvFunction;

  output: string;

  constructor(public dialog: MatDialog) {
    this.bpm = 120;
    // this.output = "hello world";
   }

   selectFunction(isForTimeDeformation: boolean) {


   }

   emit() {
     const timeInput = this.timeInput.currentTimeInput;
     const divInput = this.divisorInput.currentDivisorInput;
     const timingDefault = this.timingPointTemplate.currentTimingPoint;

     console.log(timeInput);
     console.log(divInput);
     console.log(timingDefault);
   }

  ngOnInit() {
  }

}
