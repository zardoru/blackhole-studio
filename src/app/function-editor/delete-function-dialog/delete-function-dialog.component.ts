import { Component, OnInit } from '@angular/core';
import { SvFunctionCollection } from '../../blackhole-classes/sv-functions';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-function-dialog',
  templateUrl: './delete-function-dialog.component.html',
  styleUrls: ['./delete-function-dialog.component.css']
})
export class DeleteFunctionDialogComponent implements OnInit {
  
  collection: any[];

  constructor(public dialogRef: MatDialogRef<DeleteFunctionDialogComponent>) { 
    this.collection = [];
    var funcCollection = SvFunctionCollection.getCollection();
    for (var func in funcCollection) {
      this.collection.push(funcCollection[func]);
    }
  }

  removeFunc(func)
  {
    for (var i = 0; i < this.collection.length; i++) {
      if (this.collection[i] === func)
        this.collection.splice(i, 1);
    }
  }

  commitAndClose() {
    var newCollection = {};
    for (var i = 0; i < this.collection.length; i++) {
      newCollection[this.collection[i].name] = this.collection[i];
    }

    SvFunctionCollection.setCollection(newCollection);

    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
