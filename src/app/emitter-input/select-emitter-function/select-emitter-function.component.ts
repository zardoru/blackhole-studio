import { Component, OnInit } from '@angular/core';
import {SvFunction, SvFunctionType} from '../../blackhole-classes/sv-functions';
import {SelectEmissionFunctionDialogComponent} from './select-emission-function-dialog/select-emission-function-dialog.component';
import {MatDialog} from '@angular/material';
import {EmissionFunctionParametersAssignmentComponent} from './emission-function-parameters-assignment/emission-function-parameters-assignment.component';

/* This is the actual function, time function and parameter setting component that's reusable. */
@Component({
  selector: 'app-select-emitter-function',
  templateUrl: './select-emitter-function.component.html',
  styleUrls: ['./select-emitter-function.component.css']
})
export class SelectEmitterFunctionComponent implements OnInit {

  useFixedBpm: boolean;
  bpm: number;
  currentFunction: SvFunction;
  currentTimeFunction: SvFunction;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    this.bpm = 120;
  }

  selectFunction(isForTimeDeformation: boolean) {
    if (isForTimeDeformation) {
      const funcDialog = this.dialog.open(SelectEmissionFunctionDialogComponent, {
        data: {
          allowedFunctionTypes: [SvFunctionType.SV]
        }
      });

      funcDialog.afterClosed().subscribe((x) => {
        this.currentTimeFunction = x;
      });

    } else {
      const funcDialog = this.dialog.open(SelectEmissionFunctionDialogComponent, {
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
        height: '400px',
        width: '800px',
        data: {
          target: this.currentTimeFunction
        }
      });

    } else {

      this.dialog.open(EmissionFunctionParametersAssignmentComponent, {
        height: '400px',
        width: '800px',
        data: {
          target: this.currentFunction
        }
      });

    }
  }
}
