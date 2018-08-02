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

    // console.log(this.SvFunctionType);

    const typeSet = new Set(data.allowedFunctionTypes);
    // console.log(typeSet);

    const funcCollection = SvFunctionCollection.getCollection();
    // console.log(funcCollection);
    for (var key in funcCollection) {
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
