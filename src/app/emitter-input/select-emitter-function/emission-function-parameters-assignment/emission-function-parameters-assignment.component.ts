import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {SvFunction} from '../../../blackhole-classes/sv-functions';

@Component({
  selector: 'app-emission-function-parameters-assignment',
  templateUrl: './emission-function-parameters-assignment.component.html',
  styleUrls: ['./emission-function-parameters-assignment.component.css']
})
export class EmissionFunctionParametersAssignmentComponent implements OnInit {

  target: SvFunction;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data.target);
    this.target = data.target;

    for (let i = 0; i < this.target.parameters.length; i++) {
      if (!this.target.parameters[i].currentValue) {
        const val: any = parseFloat(this.target.parameters[i].defaultValue) ||
                         this.target.parameters[i].defaultValue;

        this.target.parameters[i].currentValue = val;
      }
    }
  }

  ngOnInit() {
  }

}
