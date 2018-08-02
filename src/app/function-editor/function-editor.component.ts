import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SvFunction, SvFunctionCollection, SvFunctionType, SvParameter} from '../sv-functions';
import {MatDialog} from '@angular/material';
import {SelectFunctionDialogComponent} from '../select-function-dialog/select-function-dialog.component';
import {DeleteFunctionDialogComponent} from '../delete-function-dialog/delete-function-dialog.component';
import { saveAs } from 'file-saver/FileSaver.js';

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
    'paramName',
    'description',
    'defaultValue',
    'actions'
  ];


  editorOptions = {
    enableLiveAutocompletion: true
  };

  constructor(public dialog: MatDialog) {
    this.currentFunction = new SvFunction(SvFunctionType.SV);
  }

  ngOnInit() {
  }

  onNew() {
    this.currentFunction = new SvFunction(SvFunctionType.SV);
  }

  onLoad() {
    const opendialog = this.dialog.open(SelectFunctionDialogComponent);

    opendialog.afterClosed().subscribe((value) => {
      if (value) {
        this.currentFunction = value;
      }
    });
  }

  onSave() {
    if (this.currentFunction.name === '' ||
        this.currentFunction.name === SvFunction.defaultName) {
      const ret = prompt('The function is unnamed. What will you name it?');
      if (ret != null) {
        this.currentFunction.name = ret;
      }
    }

    const msg = `The function named "${this.currentFunction.name}" already exists. Overwrite?`;
    const funcobj = SvFunctionCollection.getCollection();
    if (!funcobj[this.currentFunction.name] ||
      (funcobj[this.currentFunction.name] && confirm(msg))) {

      funcobj[this.currentFunction.name] = this.currentFunction;

      SvFunctionCollection.setCollection(funcobj);

      alert(`Function ${this.currentFunction.name} saved correctly.`);
    }
  }

  onDelete() {
    const deletedialog = this.dialog.open(DeleteFunctionDialogComponent);
  }

  addParam() {
    const newParam = new SvParameter();
    newParam.name = 'untitled_' + (this.currentFunction.parameters.length + 1);
    this.currentFunction.parameters.push(newParam);
    this.paramTable.renderRows();
  }

  deleteParam(toRemove) {
    for (let i = 0; i < this.currentFunction.parameters.length; i++) {
      const param = this.currentFunction.parameters[i];
      if (param === toRemove) {
        this.currentFunction.parameters.splice(i, 1);
      }
    }

    this.paramTable.renderRows();
  }

  onExport() {
    const collStr = JSON.stringify(SvFunctionCollection.getCollection());
    const collBlob = new Blob([collStr]);
    saveAs(collBlob, 'export.json');
  }


  ngAfterViewInit() {

  }
}
