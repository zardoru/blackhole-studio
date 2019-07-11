import { Component, OnInit } from '@angular/core';
import {SvFunction, SvFunctionType} from '../blackhole-classes/sv-functions';
import {MatDialog} from '@angular/material';
import {EmissionFunctionParametersAssignmentComponent} from '../emitter-input/select-emitter-function/emission-function-parameters-assignment/emission-function-parameters-assignment.component';
import {SelectEmissionFunctionDialogComponent} from '../emitter-input/select-emitter-function/select-emission-function-dialog/select-emission-function-dialog.component';
import {OsuTimingPoint} from '../blackhole-classes/osu-timing-point';
import {applyManipulation} from '../blackhole-classes/osu-timing-point-emitter';

@Component({
  selector: 'app-timing-points-manipulation',
  templateUrl: './timing-points-manipulation.component.html',
  styleUrls: ['./timing-points-manipulation.component.css']
})
export class TimingPointsManipulationComponent implements OnInit {

  tpInput: string;
  tpOutput: string;

  error: any = null;

  currentFunction: SvFunction;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  selectFunction() {
    const funcDialog = this.dialog.open(SelectEmissionFunctionDialogComponent, {
        data: {
          allowedFunctionTypes: [SvFunctionType.TimingPoint]
        }
      });

    funcDialog.afterClosed().subscribe(val => {
      this.currentFunction = val;
    });
  }

  setParameters() {
      this.dialog.open(EmissionFunctionParametersAssignmentComponent, {
        height: '400px',
        width: '800px',
        data: {
          target: this.currentFunction
        }
      });
  }

  execute() {
    const set = this.tpInput
                    .split('\n')
                    .map(x => OsuTimingPoint.fromString(x))
                    .map(x => x.toDifference());
    try {
      this.error = null;

      let result = applyManipulation(this.currentFunction, set);
      if (Array.isArray(result)) {
        result = result.filter(x => OsuTimingPoint.isValidDifference(x));

        result = result
          .map(x => (new OsuTimingPoint()).applyDifference(x))
          .map(x => x.toString());

        this.tpOutput = result.join('\n');
      } else {
        this.tpOutput = result.toString();
      }
    } catch (e) {
      this.error = e;
    }
  }
}
