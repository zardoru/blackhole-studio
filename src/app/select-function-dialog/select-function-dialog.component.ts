import { Component, OnInit } from '@angular/core';
import { SvFunctionCollection } from '../sv-functions';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-select-function-dialog',
  templateUrl: './select-function-dialog.component.html',
  styleUrls: ['./select-function-dialog.component.css']
})
export class SelectFunctionDialogComponent implements OnInit {

  collection: any[];
  selection: any;

  constructor(public dialogRef: MatDialogRef<SelectFunctionDialogComponent>) { 
    this.collection = [];
    var funcCollection = SvFunctionCollection.getCollection();
    for (var func in funcCollection) {
      this.collection.push(funcCollection[func]);
    }
  }

  ngOnInit() {
  }

}
