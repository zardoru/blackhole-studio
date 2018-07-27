import { Component } from '@angular/core';
import { TimeInputType } from "./time-input";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blackhole';
  timeInputType = TimeInputType
}
