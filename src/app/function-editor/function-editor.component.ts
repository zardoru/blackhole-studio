import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {SvFunction, SvFunctionCollection, SvFunctionType, SvParameter} from '../blackhole-classes/sv-functions';
import {MatDialog} from '@angular/material';
import {SelectFunctionDialogComponent} from './select-function-dialog/select-function-dialog.component';
import {DeleteFunctionDialogComponent} from './delete-function-dialog/delete-function-dialog.component';
import {saveAs} from 'file-saver/dist/FileSaver.js';

@Component({
  selector: 'app-function-editor',
  templateUrl: './function-editor.component.html',
  styleUrls: ['./function-editor.component.css']
})

export class FunctionEditorComponent implements OnInit, AfterViewInit {

  @ViewChild('paramTable', {static: false}) paramTable;

  @Input() collection: SvFunctionCollection;

  currentFunction: SvFunction;

  SvFunctionType = SvFunctionType;

  displayedColumns = [
    'paramName',
    'description',
    'defaultValue',
    'actions'
  ];


  /*editorOptions = {
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true
  };*/

  constructor(public dialog: MatDialog) {
    this.currentFunction = new SvFunction(SvFunctionType.SV);
    this.SvFunctionType = SvFunctionType;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.editor.getEditor().setOptions(this.editorOptions);
  }

  onNew(type: SvFunctionType) {
    this.currentFunction = new SvFunction(type);
  }

  onLoad() {
    const openDialog = this.dialog.open(SelectFunctionDialogComponent);

    openDialog.afterClosed().subscribe((value) => {
      if (value) {
        this.currentFunction = value;

        // sanity check
        if (this.currentFunction.type === null ||
          typeof(this.currentFunction.type) === 'undefined') {
          this.currentFunction.type = SvFunctionType.SV;
        }

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
    const functionList = SvFunctionCollection.getCollection();
    if (!functionList[this.currentFunction.name] ||
      (functionList[this.currentFunction.name] && confirm(msg))) {

      functionList[this.currentFunction.name] = this.currentFunction;

      SvFunctionCollection.setCollection(functionList);

      alert(`Function ${this.currentFunction.name} saved correctly.`);
    }
  }

  onDelete() {
    const deleteDialog = this.dialog.open(DeleteFunctionDialogComponent);
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
}
