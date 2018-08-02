import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {
  SvParameter,
  SvFunction,
  SvFunctionCollection
} from '../sv-functions';
import { MatDialog } from '@angular/material';
import { SelectFunctionDialogComponent } from '../select-function-dialog/select-function-dialog.component';
import { DeleteFunctionDialogComponent } from '../delete-function-dialog/delete-function-dialog.component';


@Component({
  selector: 'app-function-editor',
  templateUrl: './function-editor.component.html',
  styleUrls: ['./function-editor.component.css']
})

export class FunctionEditorComponent implements OnInit {

  @ViewChild('editor') editor;

  @ViewChild('paramTable') paramTable;

  @Input() collection: SvFunctionCollection;

  currentFunction: SvFunction;

  displayedColumns = [
    "paramName", 
    "description", 
    "defaultValue",
    "actions"
  ];

  constructor(public dialog: MatDialog) {
    this.currentFunction = new SvFunction();
  }

  ngOnInit() {
  }

  onNew() {
    this.currentFunction = new SvFunction();
  }

  onLoad() {
    let opendialog = this.dialog.open(SelectFunctionDialogComponent);

    opendialog.afterClosed().subscribe((value) => {
      if (value)
        this.currentFunction = value;
    });
  }

  onSave() {
    if (this.currentFunction.name === "" || 
        this.currentFunction.name == SvFunction.defaultName) {
      var ret = prompt("The function is unnamed. What will you name it?");
      if (ret != null) {
        this.currentFunction.name = ret;
      }
    }

    let msg = `The function named "${this.currentFunction.name}" already exists. Overwrite?`;
    var funcobj = SvFunctionCollection.getCollection();
    if (!funcobj[this.currentFunction.name] ||
      (funcobj[this.currentFunction.name] && confirm(msg))) {

      funcobj[this.currentFunction.name] = this.currentFunction;

      SvFunctionCollection.setCollection(funcobj);

      alert(`Function ${this.currentFunction.name} saved correctly.`);
    }
  }

  onDelete() {
    let deletedialog = this.dialog.open(DeleteFunctionDialogComponent);
  }

  addParam() {
    var newParam = new SvParameter();
    newParam.name = "untitled_" + (this.currentFunction.parameters.length + 1);
    this.currentFunction.parameters.push(newParam);
    this.paramTable.renderRows();
  }

  deleteParam(toRemove) {
    for (var i = 0; i < this.currentFunction.parameters.length; i++)
    {
      var param = this.currentFunction.parameters[i];
      if (param === toRemove)
        this.currentFunction.parameters.splice(i, 1);
    }

    this.paramTable.renderRows();
  }

  editorOptions = {
    enableLiveAutocompletion: true
  };

  ngAfterViewInit() {
    
  }
}
