import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { 
  SvParameter, 
  SvFunction, 
  SvFunctionCollection 
} from '../sv-functions';

@Component({
  selector: 'app-function-editor',
  templateUrl: './function-editor.component.html',
  styleUrls: ['./function-editor.component.css']
})
export class FunctionEditorComponent implements OnInit {

  @ViewChild('editor') editor;

  @ViewChild('paramTable') paramTable;

  @Input() collection: SvFunctionCollection;

  currentFunction : SvFunction;

  displayedColumns = ["paramName", "description", "defaultValue"];

  constructor() { 
    this.currentFunction = new SvFunction();
  }

  ngOnInit() {
  }

  addParam() {
    var newParam = new SvParameter();
    newParam.name = "untitled_" + (this.currentFunction.parameters.length + 1);
    this.currentFunction.parameters.push(newParam);
    this.paramTable.renderRows();
  }

  ngAfterViewInit() {
    //this.editor.setTheme("eclipse");
    
    //this.editor.getEditor().setOptions({
    //  enableBasicAutocompletion: true
    //});
  }
}
