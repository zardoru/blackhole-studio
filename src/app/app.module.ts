import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimeinputComponent } from './timeinput/timeinput.component';

import { FormsModule } from "@angular/forms";
import { MatInputModule, MatSelectModule, MatCardModule } from "@angular/material";
import { TimeinputDurationComponent } from './timeinput-duration/timeinput-duration.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TimeinputBeatsComponent } from './timeinput-beats/timeinput-beats.component';
import { TimeinputNotetimesComponent } from './timeinput-notetimes/timeinput-notetimes.component';
import { TimeinputStartendComponent } from './timeinput-startend/timeinput-startend.component';
import { DivisorinputComponent } from './divisorinput/divisorinput.component';
import { EmissionControlComponent } from './emission-control/emission-control.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeinputComponent,
    TimeinputDurationComponent,
    TimeinputBeatsComponent,
    TimeinputNotetimesComponent,
    TimeinputStartendComponent,
    DivisorinputComponent,
    EmissionControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
