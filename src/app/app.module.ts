import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimeinputComponent } from './timeinput/timeinput.component';

import { FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatTabsModule,
  MatTableModule,
  MatDialogModule,
  MatCheckboxModule,
  MatToolbarModule
} from '@angular/material';
import { TimeinputDurationComponent } from './timeinput-duration/timeinput-duration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimeinputBeatsComponent } from './timeinput-beats/timeinput-beats.component';
import { TimeinputNotetimesComponent } from './timeinput-notetimes/timeinput-notetimes.component';
import { TimeinputStartendComponent } from './timeinput-startend/timeinput-startend.component';
import { DivisorinputComponent } from './divisorinput/divisorinput.component';
import { EmissionControlComponent } from './emission-control/emission-control.component';
import { FunctionEditorComponent } from './function-editor/function-editor.component';

import { AceEditorModule } from 'ng2-ace-editor';
import { SelectFunctionDialogComponent } from './select-function-dialog/select-function-dialog.component';
import { DeleteFunctionDialogComponent } from './delete-function-dialog/delete-function-dialog.component';
import { TimingPointTemplateComponent } from './timing-point-template/timing-point-template.component';
import { SelectEmissionFunctionComponent } from './select-emission-function/select-emission-function.component';
import {
  EmissionFunctionParametersAssignmentComponent
} from './emission-function-parameters-assignment/emission-function-parameters-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeinputComponent,
    TimeinputDurationComponent,
    TimeinputBeatsComponent,
    TimeinputNotetimesComponent,
    TimeinputStartendComponent,
    DivisorinputComponent,
    EmissionControlComponent,
    FunctionEditorComponent,
    SelectFunctionDialogComponent,
    DeleteFunctionDialogComponent,
    TimingPointTemplateComponent,
    SelectEmissionFunctionComponent,
    EmissionFunctionParametersAssignmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatCheckboxModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    AceEditorModule
  ],
  providers: [],
  entryComponents: [
    SelectFunctionDialogComponent,
    DeleteFunctionDialogComponent,
    SelectEmissionFunctionComponent,
    EmissionFunctionParametersAssignmentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
