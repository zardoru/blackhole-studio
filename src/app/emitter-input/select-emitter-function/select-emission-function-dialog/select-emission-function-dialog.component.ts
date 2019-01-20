import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SvFunction, SvFunctionCollection, SvFunctionType} from '../../../blackhole-classes/sv-functions';


/*
Refresher: this is the dropdown that is in select-emitter-function.
Should be used only internally, in select-emitter-function.
*/
@Component({
  selector: 'app-select-emission-function-dialog',
  templateUrl: './select-emission-function-dialog.component.html',
  styleUrls: ['./select-emission-function-dialog.component.css']
})
export class SelectEmissionFunctionDialogComponent implements OnInit {

  collection: SvFunction[];

  SvFunctionType = SvFunctionType;

  selectedFunction: SvFunction;

  constructor(
    public dialogRef: MatDialogRef<SelectEmissionFunctionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.collection = [];

    // console.log(this.SvFunctionType);

    const typeSet = new Set(data.allowedFunctionTypes);
    // console.log(typeSet);

    const funcCollection = SvFunctionCollection.getCollection();
    // console.log(funcCollection);
    for (const key in funcCollection) {
      const func = funcCollection[key];
      const isSvFunction = func.type === undefined || func.type === SvFunctionType.SV;

      // console.log(func);
      // console.log(isSvFunction);

      // only allowed functions are displayed in this dialog
      if ((isSvFunction && typeSet.has(SvFunctionType.SV) ||
          typeSet.has(func.type))) {
            this.collection.push(func);
      }
    }

  }

  ngOnInit() {
  }

}
