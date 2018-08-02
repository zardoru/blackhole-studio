import {Component, OnInit, ViewChild} from '@angular/core';
import {TimeinputComponent} from '../timeinput/timeinput.component';
import {DivisorinputComponent} from '../divisorinput/divisorinput.component';
import {SvFunction, SvFunctionType} from '../sv-functions';
import {TimingPointTemplateComponent} from '../timing-point-template/timing-point-template.component';
import {MatDialog} from '@angular/material';
import {emitTargets} from '../osu-timing-point-emitter';
import {SelectEmissionFunctionComponent} from '../select-emission-function/select-emission-function.component';
import {EmissionFunctionParametersAssignmentComponent} from '../emission-function-parameters-assignment/emission-function-parameters-assignment.component';

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

  error: any;

  constructor(public dialog: MatDialog) {
    this.bpm = 120;
    this.error = null;
    this.output = '';
    // this.output = "hello world";
  }

  selectFunction(isForTimeDeformation: boolean) {
    if (isForTimeDeformation) {
      const funcDialog = this.dialog.open(SelectEmissionFunctionComponent, {
        data: {
          allowedFunctionTypes: [SvFunctionType.SV]
        }
      });

      funcDialog.afterClosed().subscribe((x) => {
        this.currentTimeFunction = x;
      });

    } else {
      const funcDialog = this.dialog.open(SelectEmissionFunctionComponent, {
        data: {
          allowedFunctionTypes: [SvFunctionType.SV, SvFunctionType.BPM]
        }
      });

      funcDialog.afterClosed().subscribe((x) => {
        this.currentFunction = x;
      });
    }
  }

  setParameters(isForTimeDeformation: boolean) {

    if (isForTimeDeformation) {

      this.dialog.open(EmissionFunctionParametersAssignmentComponent, {
        height: "400px",
        width: "800px",
        data: {
          target: this.currentTimeFunction
        }
      });

    } else {

      this.dialog.open(EmissionFunctionParametersAssignmentComponent, {
        height: "400px",
        width: "800px",
        data: {
          target: this.currentFunction
        }
      });

    }
  }

  emit() {
    const timeInput = this.timeInput.currentTimeInput;
    const divInput = this.divisorInput.currentDivisorInput;
    const timingDefault = this.timingPointTemplate.currentTimingPoint;

    //console.log(timeInput);
    //console.log(divInput);
    //console.log(timingDefault);

    try {
      const result = emitTargets(
        timeInput,
        divInput,
        this.currentFunction,
        this.currentTimeFunction,
        timingDefault,
        this.bpm
      );

      this.output = result.join('\n');
      this.error = null;
    } catch (err) {
      console.log(err);

      this.error = err;
    }
  }

  ngOnInit() {
  }

}
