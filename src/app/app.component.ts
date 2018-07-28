import { Component, OnInit } from '@angular/core';
import { TimeInputType } from "./time-input";
import { SvFunctionCollection } from './sv-functions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'blackhole';
  timeInputType = TimeInputType
  svFunctions: SvFunctionCollection;

  constructor() {
    this.svFunctions = new SvFunctionCollection();
  }

  ngOnInit() {
    
  }
}
