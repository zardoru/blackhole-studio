import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SvFunction, SvFunctionCollection, SvFunctionType} from '../sv-functions';

@Component({
  selector: 'app-select-emission-function',
  templateUrl: './select-emission-function.component.html',
  styleUrls: ['./select-emission-function.component.css']
})
export class SelectEmissionFunctionComponent implements OnInit {

  collection: SvFunction[];

  SvFunctionType = SvFunctionType;

  selectedFunction: SvFunction;

  constructor(
    public dialogRef: MatDialogRef<SelectEmissionFunctionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.collection = [];

    const typeSet = new Set(data.allowedFunctionTypes);

    const funcCollection = SvFunctionCollection.getCollection();
    for (const func of funcCollection) {
      const isSvFunction = func.type === undefined || func.type === SvFunctionType.SV;
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
