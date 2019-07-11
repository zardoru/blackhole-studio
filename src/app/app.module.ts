import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimeinputComponent } from './emitter-input/timeinput/timeinput.component';

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
  MatToolbarModule,
  MatExpansionModule, MatRadioModule, MatTooltipModule, MatButtonToggleModule
} from '@angular/material';
import { TimeinputDurationComponent } from './emitter-input/timeinput/timeinput-duration/timeinput-duration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimeinputBeatsComponent } from './emitter-input/timeinput/timeinput-beats/timeinput-beats.component';
import { TimeinputNotetimesComponent } from './emitter-input/timeinput/timeinput-notetimes/timeinput-notetimes.component';
import { TimeinputStartendComponent } from './emitter-input/timeinput/timeinput-startend/timeinput-startend.component';
import { DivisorinputComponent } from './emitter-input/divisorinput/divisorinput.component';
import { EmissionControlComponent } from './emission-control/emission-control.component';
import { FunctionEditorComponent } from './function-editor/function-editor.component';

import { AceEditorModule } from 'ng2-ace-editor';
import { SelectFunctionDialogComponent } from './function-editor/select-function-dialog/select-function-dialog.component';
import { DeleteFunctionDialogComponent } from './function-editor/delete-function-dialog/delete-function-dialog.component';
import { TimingPointTemplateComponent } from './emitter-input/timeinput/timing-point-template/timing-point-template.component';
import { SelectEmissionFunctionDialogComponent } from './emitter-input/select-emitter-function/select-emission-function-dialog/select-emission-function-dialog.component';
import {
  EmissionFunctionParametersAssignmentComponent
} from './emitter-input/select-emitter-function/emission-function-parameters-assignment/emission-function-parameters-assignment.component';
import { TimeinputBeatfractionComponent } from './emitter-input/timeinput/timeinput-beatfraction/timeinput-beatfraction.component';
import { ComposeEmittersComponent } from './compose-emitters/compose-emitters.component';
import { ComposeTimingPointsComponent } from './compose-timing-points/compose-timing-points.component';
import { SelectEmitterFunctionComponent } from './emitter-input/select-emitter-function/select-emitter-function.component';
import { EmitterParameterTrioComponent } from './compose-emitters/emitter-parameter-trio/emitter-parameter-trio.component';
import { TimingPointsManipulationComponent } from './timing-points-manipulation/timing-points-manipulation.component';

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
    SelectEmissionFunctionDialogComponent,
    EmissionFunctionParametersAssignmentComponent,
    TimeinputBeatfractionComponent,
    ComposeEmittersComponent,
    ComposeTimingPointsComponent,
    SelectEmitterFunctionComponent,
    EmitterParameterTrioComponent,
    TimingPointsManipulationComponent
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
    MatExpansionModule,
    MatTooltipModule,
    AceEditorModule,
    MatRadioModule,
    MatButtonToggleModule
  ],
  providers: [],
  entryComponents: [
    SelectFunctionDialogComponent,
    DeleteFunctionDialogComponent,
    SelectEmissionFunctionDialogComponent,
    EmissionFunctionParametersAssignmentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
