(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"fix-size\">\r\n  <div class=\"tb-title\">\r\n    <h2><strong>Blackhole SV Studio</strong> (by Agka)</h2>\r\n  </div>\r\n\r\n  <div class=\"tb-buttons\">\r\n    <mat-button-toggle-group #group=\"matButtonToggleGroup\" value=\"mode_emission\">\r\n      <mat-button-toggle value=\"mode_emission\">\r\n        Emit\r\n      </mat-button-toggle>\r\n      <mat-button-toggle value=\"mode_compose\">\r\n        Compose\r\n      </mat-button-toggle>\r\n      <mat-button-toggle value=\"mode_emit_compose\">\r\n        Emit And Compose\r\n      </mat-button-toggle>\r\n      <mat-button-toggle value=\"mode_manipulate\">\r\n        Manipulate\r\n      </mat-button-toggle>\r\n      <mat-button-toggle value=\"mode_editor\">\r\n        Editor\r\n      </mat-button-toggle>\r\n    </mat-button-toggle-group>\r\n  </div>\r\n</mat-toolbar>\r\n\r\n<div [hidden]=\"group.value != 'mode_emission'\">\r\n  <app-emission-control></app-emission-control>\r\n</div>\r\n\r\n<div [hidden]=\"group.value != 'mode_compose'\">\r\n  <app-compose-timing-points></app-compose-timing-points>\r\n</div>\r\n\r\n<div [hidden]=\"group.value != 'mode_emit_compose'\">\r\n  <app-compose-emitters></app-compose-emitters>\r\n</div>\r\n\r\n<div [hidden]=\"group.value != 'mode_manipulate'\">\r\n  <app-timing-points-manipulation></app-timing-points-manipulation>\r\n</div>\r\n\r\n<div [hidden]=\"group.value != 'mode_editor'\">\r\n  <app-function-editor></app-function-editor>\r\n</div>\r\n\r\n<!--\r\n<mat-tab-group [color]=\"'primary'\">\r\n  <mat-tab label=\"Single Emission\">\r\n    <app-emission-control></app-emission-control>\r\n  </mat-tab>\r\n  <mat-tab label=\"Compose Emitters\">\r\n    <app-compose-emitters></app-compose-emitters>\r\n  </mat-tab>\r\n  <mat-tab label=\"Compose Timing Points\">\r\n    <app-compose-timing-points></app-compose-timing-points>\r\n  </mat-tab>\r\n  <mat-tab label=\"Timing Point Manipulation\">\r\n    <app-timing-points-manipulation></app-timing-points-manipulation>\r\n  </mat-tab>\r\n  <mat-tab label=\"Custom Function Editor\">\r\n    <app-function-editor [collection]=\"svFunctions\"></app-function-editor>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n-->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/compose-emitters/compose-emitters.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/compose-emitters/compose-emitters.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n\r\n<div class=\"col\">\r\n\r\n  <div class=\"padder\">\r\n    <mat-card>\r\n      <mat-card-title>\r\n        Emitters\r\n      </mat-card-title>\r\n      <mat-card-actions>\r\n        <button mat-raised-button (click)=\"addEmitter()\">Add Emitter</button>\r\n      </mat-card-actions>\r\n      <mat-card-content>\r\n        <ng-template #container>\r\n        </ng-template>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <hr>\r\n\r\n  <div class=\"padder\">\r\n    <mat-card>\r\n      <mat-card-title>\r\n        Timing point parameters and combined output\r\n      </mat-card-title>\r\n\r\n      <mat-card-content>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <app-timing-point-template></app-timing-point-template>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <textarea matInput placeholder=\"output will be here\" [(ngModel)]=\"output\"></textarea>\r\n            </div>\r\n          </div>\r\n      </mat-card-content>\r\n\r\n      <mat-card-actions>\r\n        <button mat-raised-button (click)=\"emit()\">Emit</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/compose-emitters/emitter-parameter-trio/emitter-parameter-trio.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/compose-emitters/emitter-parameter-trio/emitter-parameter-trio.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel>\r\n  <mat-expansion-panel-header>\r\n    <mat-panel-title>{{functitle}} Emitter</mat-panel-title>\r\n  <mat-panel-description>\r\n    Time: {{timeInput.currentTimeInput.startTime}}\r\n    Effect: {{functitle}}\r\n  </mat-panel-description>\r\n  </mat-expansion-panel-header>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <app-timeinput></app-timeinput>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <app-divisorinput></app-divisorinput>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <app-select-emitter-function></app-select-emitter-function>\r\n    </div>\r\n  </div>\r\n\r\n  <mat-action-row>\r\n    <button mat-raised-button (click)=\"removeSelf()\">Remove</button>\r\n  </mat-action-row>\r\n</mat-expansion-panel>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/compose-timing-points/compose-timing-points.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/compose-timing-points/compose-timing-points.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col padder\">\r\n  <mat-card>\r\n    <mat-card-title>Compose timing points</mat-card-title>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <textarea matInput placeholder=\"first timing point set (.osu format)\" [(ngModel)]=\"set1lines\"></textarea>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <textarea matInput placeholder=\"second timing point set (.osu format)\" [(ngModel)]=\"set2lines\"></textarea>\r\n      </div>\r\n    </div>\r\n    <button mat-raised-button (click)=\"compose()\">Compose</button>\r\n  </mat-card>\r\n\r\n  <mat-card>\r\n    <mat-card-title>Tool Output</mat-card-title>\r\n    <mat-card-actions>\r\n      <button mat-raised-button (click)=\"outArea.select()\">Select all</button>\r\n      <button mat-raised-button (click)=\"output =''\">Clear</button>\r\n    </mat-card-actions>\r\n\r\n    <mat-card-content>\r\n      <textarea\r\n        matInput\r\n        readonly\r\n        placeholder=\"output will be here\"\r\n        [(ngModel)]=\"output\"\r\n        #outArea></textarea>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/emission-control/emission-control.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/emission-control/emission-control.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"col\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n      <mat-card>\r\n        <mat-card-title>Time control</mat-card-title>\r\n        <app-timeinput></app-timeinput>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <mat-card>\r\n        <mat-card-title>Divisor control</mat-card-title>\r\n        <app-divisorinput></app-divisorinput>\r\n        <!-- <div class=\"alert alert-secondary\">\r\n          <strong>Total divisors: </strong> <br>\r\n          {{ currentDivisors }}\r\n        </div> -->\r\n\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <mat-card>\r\n        <mat-card-title>\r\n          Timing point template\r\n        </mat-card-title>\r\n        <app-timing-point-template></app-timing-point-template>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <mat-card>\r\n        <mat-card-title>Emission control</mat-card-title>\r\n        <app-select-emitter-function></app-select-emitter-function>\r\n\r\n        <!-- Emit section -->\r\n        <button mat-raised-button [disabled]=\"!(funcParams.currentFunction || funcParams.useFixedBpm)\" (click)=\"emit()\">\r\n          Emit\r\n        </button>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n\r\n  <div class=\"row\" *ngIf=\"error\">\r\n    <div class=\"col-md-2\"></div>\r\n    <div class=\"alert alert-danger col-md-8\">\r\n      <strong>Error: </strong>\r\n      <br>\r\n      <b>line:</b> {{ error.lineNumber }} <br>\r\n      <b>message: </b> <br>\r\n      {{ error.message }}\r\n    </div>\r\n    <div class=\"col-md-2\"></div>\r\n  </div>\r\n\r\n  <br>\r\n  <div class=\"padder grow\">\r\n    <mat-card>\r\n      <mat-card-title>\r\n        Output area\r\n      </mat-card-title>\r\n      <mat-card-actions>\r\n        <button mat-raised-button (click)=\"output = ''\">Clear...</button>\r\n        <button mat-raised-button (click)=\"outputArea.select()\">Select all</button>\r\n      </mat-card-actions>\r\n      <mat-card-content>\r\n        <textarea matInput #outputArea readonly placeholder=\"output will be here\" [value]=\"output\"></textarea>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/emitter-input/divisorinput/divisor-input.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/emitter-input/divisorinput/divisor-input.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"fullwidth\">\r\n    <mat-select placeholder=\"Divisor Type\" [(ngModel)]=\"type\" (ngModelChange)=\"onTypeChange()\" class=\"fullwidth\">\r\n        <mat-option [value]=\"DivisorInputType.Fixed\">\r\n            Fixed\r\n        </mat-option>\r\n        <mat-option [value]=\"DivisorInputType.BPM\">\r\n            BPM\r\n        </mat-option>\r\n        <mat-option [value]=\"DivisorInputType.Span\">\r\n            Span\r\n        </mat-option>\r\n    </mat-select>\r\n</mat-form-field>\r\n\r\n<div *ngIf=\"type === DivisorInputType.Fixed\">\r\n    <mat-form-field class=\"fullwidth\">\r\n        <input matInput type=\"number\" placeholder=\"Count\" [(ngModel)]=\"currentDivisorInput.count\">\r\n    </mat-form-field>\r\n</div>\r\n\r\n<div *ngIf=\"type === DivisorInputType.BPM\">\r\n    <mat-form-field class=\"fullwidth\">\r\n        <input matInput type=\"number\" placeholder=\"BPM\" [(ngModel)]=\"currentDivisorInput.bpm\">\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field class=\"fullwidth\">\r\n        <input matInput type=\"number\" placeholder=\"Divisions per beat\" [(ngModel)]=\"currentDivisorInput.beatDivisor\">\r\n    </mat-form-field>\r\n    <br>\r\n    <div class=\"alert alert-secondary\">\r\n        <b>Division Span (MS):</b> {{ currentDivisorInput.divisorSpan }}\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"type === DivisorInputType.Span\">\r\n    <mat-form-field class=\"fullwidth\">\r\n        <input matInput type=\"number\" placeholder=\"Span (MS)\" [(ngModel)]=\"currentDivisorInput.span\">\r\n    </mat-form-field>\r\n</div>\r\n\r\n<label id=\"endpoint-mode\">Include cycle end point</label> <br>\r\n<mat-radio-group\r\n  aria-labelledby=\"endpoint-mode\"\r\n  [(ngModel)]=\"endDivisorMode\">\r\n  <mat-radio-button [value]=\"EndPointMode.NoEndPoint\">No</mat-radio-button> <br>\r\n  <mat-radio-button [value]=\"EndPointMode.LastCycle\">Only last cycle</mat-radio-button> <br>\r\n  <mat-radio-button [value]=\"EndPointMode.EveryCycle\">Every cycle</mat-radio-button>\r\n</mat-radio-group>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/emitter-input/select-emitter-function/emission-function-parameters-assignment/emission-function-parameters-assignment.component.html":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/emitter-input/select-emitter-function/emission-function-parameters-assignment/emission-function-parameters-assignment.component.html ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\r\n  <h2 mat-dialog-title>Function Parameters</h2>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <b>\r\n        Parameter Name\r\n      </b>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <b>\r\n        Description\r\n      </b>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <b>\r\n       Value\r\n      </b>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row\" *ngFor=\"let param of target.parameters\">\r\n    <div class=\"col-md-4\">\r\n      {{ param.name }}\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      {{ param.description }}\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder=\"Value\" [(ngModel)]=\"param.currentValue\">\r\n      </mat-form-field>\r\n    </div>\r\n    <hr>\r\n  </div>\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-button mat-dialog-close>Close</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/emitter-input/select-emitter-function/select-emission-function-dialog/select-emission-function-dialog.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/emitter-input/select-emitter-function/select-emission-function-dialog/select-emission-function-dialog.component.html ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\r\n  <h2 matDialogTitle>Select emission function...</h2>\r\n  <mat-select [(ngModel)]=\"selectedFunction\">\r\n    <mat-option *ngFor=\"let func of collection\" [value]=\"func\">\r\n      {{ SvFunctionType[func.type || 0] }} - {{ func.name }}\r\n    </mat-option>\r\n  </mat-select>\r\n\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"selectedFunction\">Select</button>\r\n  <button mat-button mat-dialog-close>Cancel</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/emitter-input/select-emitter-function/select-emitter-function.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/emitter-input/select-emitter-function/select-emitter-function.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-checkbox [(ngModel)]=\"useFixedBpm\">Use Fixed BPM</mat-checkbox>\r\n<hr>\r\n<!-- Function section -->\r\n<div *ngIf=\"!useFixedBpm\">\r\n  <div class=\"row\">\r\n    <h4>SV/BPM function</h4>\r\n    <div class=\"col-md-12 text-center\" [class.grey]=\"!currentFunction\">\r\n      {{ currentFunction && currentFunction.name || \"no function selected\" }}\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 text-center\">\r\n      <button mat-raised-button (click)=\"selectFunction(false)\">Select function</button>\r\n    </div>\r\n    <div class=\"col-md-4 text-center\">\r\n      <button mat-raised-button (click)=\"setParameters(false)\" [disabled]=\"!currentFunction\">\r\n        Set Parameters\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Fixed BPM section -->\r\n<div *ngIf=\"useFixedBpm\">\r\n  <input matInput type=\"number\" placeholder=\"BPM\" [(ngModel)]=\"bpm\">\r\n</div>\r\n\r\n<hr>\r\n\r\n<!-- Time deformation -->\r\n<div class=\"row\">\r\n  <h4>Time Deformation function</h4>\r\n  <div class=\"col-md-12 text-center\" [class.grey]=\"!currentTimeFunction\">\r\n    {{ currentTimeFunction && currentTimeFunction.name || \"no function selected\" }}\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6 text-center\">\r\n    <button mat-raised-button (click)=\"selectFunction(true)\">Select function</button>\r\n  </div>\r\n  <div class=\"col-md-4 text-center\">\r\n    <button mat-raised-button (click)=\"setParameters(true)\" [disabled]=\"!currentTimeFunction\">\r\n      Set Parameters\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<hr>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/emitter-input/timeinput/timeinput-beatfraction/timeinput-beatfraction.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/emitter-input/timeinput/timeinput-beatfraction/timeinput-beatfraction.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"fullwidth\">\r\n  <input matInput type=\"number\" placeholder=\"BPM\" [(ngModel)]=\"currentTimeInput.bpm\">\r\n</mat-form-field>\r\n\r\n<mat-form-field class=\"fullwidth\">\r\n  <input matInput type=\"number\" [(ngModel)]=\"currentTimeInput.beatDivisor\" placeholder=\"Beat parts per cycle\">\r\n</mat-form-field>\r\n\r\n<mat-form-field class=\"fullwidth\">\r\n  <input matInput type=\"number\" [(ngModel)]=\"currentTimeInput.totalBeats\" placeholder=\"Total duration (beats)\">\r\n</mat-form-field>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/emitter-input/timeinput/timeinput-beats/timeinput-beats.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/emitter-input/timeinput/timeinput-beats/timeinput-beats.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"fullwidth\">\r\n    <input matInput type=\"number\" [(ngModel)]=\"currentTimeInput.bpm\" placeholder=\"BPM\">\r\n</mat-form-field>\r\n\r\n<br/>\r\n\r\n<mat-form-field class=\"fullwidth\">\r\n    <input matInput type=\"number\" [(ngModel)]=\"currentTimeInput.beats\" placeholder=\"Beats\">\r\n</mat-form-field>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/emitter-input/timeinput/timeinput-duration/timeinput-duration.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/emitter-input/timeinput/timeinput-duration/timeinput-duration.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"fullwidth\">\r\n    <input matInput type=\"number\" [(ngModel)]=\"currentTimeInput.duration\" placeholder=\"Duration\">\r\n</mat-form-field>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/emitter-input/timeinput/timeinput-notetimes/timeinput-notetimes.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/emitter-input/timeinput/timeinput-notetimes/timeinput-notetimes.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isFixedDuration\">\r\n  <mat-form-field class=\"fullwidth\">\r\n    <mat-select [(ngModel)]=\"innerTimeType\" placeholder=\"Cycle Time Type\">\r\n      <mat-option [value]=\"TimeInputType.Span\">\r\n        Duration (MS)\r\n      </mat-option>\r\n      <mat-option [value]=\"TimeInputType.Beats\">\r\n        Beats\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <br>\r\n\r\n  <app-timeinput-duration [currentTimeInput]=\"innerTimeInput\" *ngIf=\"innerTimeType == TimeInputType.Span\"></app-timeinput-duration>\r\n  <app-timeinput-beats [currentTimeInput]=\"innerTimeInput\" *ngIf=\"innerTimeType == TimeInputType.Beats\"></app-timeinput-beats>\r\n</div>\r\n\r\n<br>\r\n\r\n<mat-form-field class=\"fullwidth\">\r\n  <textarea matInput [(ngModel)]=\"currentTimeInput.notes\" placeholder=\"Note data (paste from osu editor)\"></textarea>\r\n</mat-form-field>\r\n\r\n<!-- <div class=\"alert alert-secondary\">\r\n  {{ currentTimeInput.noteTimes.join(\", \") }}\r\n</div> -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/emitter-input/timeinput/timeinput-startend/timeinput-startend.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/emitter-input/timeinput/timeinput-startend/timeinput-startend.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"fullwidth\">\r\n  <input matInput \r\n         (change)=\"validateTimestamp($event)\" \r\n         type=\"text\" \r\n         [(ngModel)]=\"currentTimeInput.endTime\" \r\n         placeholder=\"End Time\">\r\n</mat-form-field>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/emitter-input/timeinput/timeinput.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/emitter-input/timeinput/timeinput.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"fullwidth\">\r\n  <mat-select [(ngModel)]=\"newType\" placeholder=\"Model type...\">\r\n    <mat-option [value]=\"TimeInputType.Span\">\r\n      Duration (MS)\r\n    </mat-option>\r\n    <mat-option [value]=\"TimeInputType.Delta\">\r\n      Start-End time pair\r\n    </mat-option>\r\n    <mat-option [value]=\"TimeInputType.Beats\">\r\n      Beats\r\n    </mat-option>\r\n    <mat-option [value]=\"TimeInputType.BeatDivision\">\r\n      Beat fractions\r\n    </mat-option>\r\n    <mat-option [value]=\"TimeInputType.NotetimeSpan\">\r\n      Based on notes (fixed duration)\r\n    </mat-option>\r\n    <mat-option [value]=\"TimeInputType.NoteToNote\">\r\n      Based on notes (note to note)\r\n    </mat-option>\r\n  </mat-select>\r\n\r\n</mat-form-field>\r\n<br/>\r\n\r\n<mat-form-field class=\"fullwidth\">\r\n  <input matInput type=\"text\" (change)=\"validateTimestamp($event)\" [(ngModel)]=\"currentTimeInput.startTime\" placeholder=\"Start time\">\r\n</mat-form-field>\r\n<br/>\r\n\r\n<mat-form-field *ngIf=\"!currentTimeInput.autocycle\" class=\"fullwidth\">\r\n  <input matInput type=\"number\" [(ngModel)]=\"currentTimeInput.cycleCount\" placeholder=\"Cycle count\">\r\n</mat-form-field>\r\n<br/>\r\n\r\n<app-timeinput-duration [currentTimeInput]=\"currentTimeInput\" *ngIf=\"timeType == TimeInputType.Span\">\r\n</app-timeinput-duration>\r\n\r\n<app-timeinput-startend [currentTimeInput]=\"currentTimeInput\" *ngIf=\"timeType == TimeInputType.Delta\">\r\n</app-timeinput-startend>\r\n\r\n<app-timeinput-beats [currentTimeInput]=\"currentTimeInput\" *ngIf=\"timeType == TimeInputType.Beats\">\r\n</app-timeinput-beats>\r\n\r\n<app-timeinput-notetimes [currentTimeInput]=\"currentTimeInput\" *ngIf=\"timeType == TimeInputType.NotetimeSpan || timeType == TimeInputType.NoteToNote\">\r\n</app-timeinput-notetimes>\r\n\r\n<app-timeinput-beatfraction [currentTimeInput]=\"currentTimeInput\" *ngIf=\"timeType == TimeInputType.BeatDivision\">\r\n</app-timeinput-beatfraction>\r\n\r\n<div *ngIf=\"currentTimeInput.isConstantCycleTime\" class=\"alert alert-secondary\">\r\n  <b>Used Cycle Time (MS):</b> {{ currentTimeInput.cycleDuration }}\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/emitter-input/timeinput/timing-point-template/timing-point-template.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/emitter-input/timeinput/timing-point-template/timing-point-template.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"fullwidth\">\r\n    <mat-select [(ngModel)]=\"currentTimingPoint.sampleSet\" placeholder=\"Sample Set\">\r\n        <mat-option [value]=\"SampleSet.Auto\">\r\n          Auto\r\n        </mat-option>\r\n        <mat-option [value]=\"SampleSet.Normal\">\r\n          Normal\r\n        </mat-option>\r\n        <mat-option [value]=\"SampleSet.Soft\">\r\n          Soft\r\n        </mat-option>\r\n        <mat-option [value]=\"SampleSet.Drum\">\r\n          Drum\r\n        </mat-option>\r\n    </mat-select>\r\n</mat-form-field>\r\n\r\n<mat-form-field class=\"fullwidth\">\r\n  <input matInput type=\"number\" placeholder=\"Volume\" [(ngModel)]=\"currentTimingPoint.volume\">\r\n</mat-form-field>\r\n\r\n<mat-form-field class=\"fullwidth\">\r\n  <input matInput type=\"number\" placeholder=\"Sampleset Index\" [(ngModel)]=\"currentTimingPoint.sampleIndex\">\r\n</mat-form-field>\r\n\r\n<mat-form-field class=\"fullwidth\">\r\n  <input matInput type=\"number\" placeholder=\"Measure Length\" [(ngModel)]=\"currentTimingPoint.measureLength\">\r\n</mat-form-field>\r\n\r\n<br>\r\n\r\n<mat-checkbox [(ngModel)]=\"currentTimingPoint.kiai\">\r\n  Kiai\r\n</mat-checkbox>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/function-editor/delete-function-dialog/delete-function-dialog.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/function-editor/delete-function-dialog/delete-function-dialog.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Delete function...</h2>\r\n<mat-dialog-content>\r\n  <div class=\"row\" *ngFor=\"let func of collection\">\r\n    <div class=\"col-md-8\">\r\n      {{ func.name }}\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <button mat-button (click)=\"removeFunc(func)\">Delete</button>\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n  Functions will not be removed unless you click <b>Apply!</b>\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-button (click)=\"commitAndClose()\">Apply</button>\r\n  <button mat-button mat-dialog-close>Cancel</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/function-editor/function-editor.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/function-editor/function-editor.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n  <div class=\"flex-3\">\r\n    <b style=\"padding: 2%\">Editor Menu</b>\r\n    <button mat-button [matMenuTriggerFor]=\"fileMenu\">Collection</button>\r\n  </div>\r\n\r\n  <div class=\"flex-9 center\">\r\n    <mat-button-toggle-group #tab=\"matButtonToggleGroup\" value=\"code\">\r\n      <mat-button-toggle value=\"code\">Code</mat-button-toggle>\r\n      <mat-button-toggle value=\"prop\">Properties</mat-button-toggle>\r\n      <mat-button-toggle value=\"ref\">Reference</mat-button-toggle>\r\n    </mat-button-toggle-group>\r\n  </div>\r\n  <div class=\"flex-3\">\r\n    <div class=\"text-center\">\r\n      <b>Working on:</b> {{ currentFunction.name }}\r\n    </div>\r\n  </div>\r\n\r\n  <mat-menu #fileMenu>\r\n    <button mat-menu-item (click)=\"onNew(SvFunctionType.SV)\">New SV function</button>\r\n    <button mat-menu-item (click)=\"onNew(SvFunctionType.BPM)\">New BPM function</button>\r\n    <button mat-menu-item (click)=\"onNew(SvFunctionType.TimingPoint)\">New Timing Point function</button>\r\n    <button mat-menu-item (click)=\"onLoad()\">Load...</button>\r\n    <button mat-menu-item (click)=\"onSave()\">Save to collection...</button>\r\n    <button mat-menu-item (click)=\"onDelete()\">Delete from collection...</button>\r\n    <button mat-menu-item>Import collection...</button>\r\n    <button mat-menu-item (click)=\"onExport()\">Export collection</button>\r\n  </mat-menu>\r\n\r\n</mat-toolbar>\r\n\r\n<!-- editor -->\r\n<div ace-editor\r\n     class=\"editor\"\r\n     [(text)]=\"currentFunction.body\"\r\n     [mode]=\"'javascript'\"\r\n     [theme]=\"'eclipse'\"\r\n     #editor\r\n     *ngIf=\"tab.value == 'code'\">\r\n</div>\r\n\r\n<!-- Parameters -->\r\n<div *ngIf=\"tab.value =='prop'\">\r\n  <div class=\"param-area\">\r\n    <mat-card>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Function Name\" [(ngModel)]=\"currentFunction.name\">\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n          <textarea matInput placeholder=\"Function description\" [(ngModel)]=\"currentFunction.tooltip\">\r\n        </textarea>\r\n      </mat-form-field>\r\n\r\n      <mat-checkbox\r\n        [(ngModel)]=\"currentFunction.doNotSkipRepeatedValues\"\r\n        matTooltip=\"If checked, repeated numerical values returned by your function won't be skipped. (Non-numerical values are still skipped!)\">\r\n        Don't skip repeated values\r\n      </mat-checkbox>\r\n      <br>\r\n\r\n      <label id=\"func-type-label\">Function Type</label> <br>\r\n      <mat-radio-group aria-labelledby=\"func-type-label\" [(ngModel)]=\"currentFunction.type\">\r\n        <mat-radio-button [value]=\"SvFunctionType.SV\">SV function</mat-radio-button>\r\n        <br>\r\n        <mat-radio-button [value]=\"SvFunctionType.BPM\">BPM function</mat-radio-button>\r\n        <br>\r\n        <mat-radio-button [value]=\"SvFunctionType.TimingPoint\">Timing Point function</mat-radio-button>\r\n      </mat-radio-group>\r\n    </mat-card>\r\n  </div>\r\n\r\n\r\n  <div class=\"param-area\">\r\n    <h2> Function Parameters </h2>\r\n    <br>\r\n    <button mat-raised-button (click)=\"addParam();\">Add...</button>\r\n    <br>\r\n\r\n    <table mat-table [dataSource]=\"currentFunction.parameters\" #paramTable>\r\n      <ng-container matColumnDef=\"paramName\">\r\n        <th mat-header-cell *matHeaderCellDef> Parameter Name</th>\r\n        <td mat-cell *matCellDef=\"let el\">\r\n          <mat-form-field class=\"tbIn\">\r\n            <input matInput class=\"tbIn\" [(ngModel)]=\"el.name\">\r\n          </mat-form-field>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"description\">\r\n        <th mat-header-cell *matHeaderCellDef> Description</th>\r\n        <td mat-cell *matCellDef=\"let el\">\r\n          <mat-form-field class=\"tbIn\">\r\n            <input matInput class=\"tbIn\" [(ngModel)]=\"el.description\">\r\n          </mat-form-field>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"defaultValue\">\r\n        <th mat-header-cell *matHeaderCellDef> Default Value</th>\r\n        <td mat-cell *matCellDef=\"let el\">\r\n          <mat-form-field class=\"tbIn\">\r\n            <input matInput class=\"tbIn\" [(ngModel)]=\"el.defaultValue\">\r\n          </mat-form-field>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"actions\">\r\n        <th mat-header-cell *matHeaderCellDef> Actions</th>\r\n        <td mat-cell *matCellDef=\"let el\">\r\n          <button mat-button (click)=\"deleteParam(el)\">\r\n            Remove\r\n          </button>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n\r\n    <p class=\"alert alert-primary\" *ngIf=\"currentFunction.parameters.length === 0\">\r\n      No parameters to display.\r\n    </p>\r\n\r\n    <br>\r\n  </div>\r\n</div>\r\n\r\n<!-- Reference -->\r\n<div *ngIf=\"tab.value == 'ref'\" class=\"padder\">\r\n  <h2>Reference</h2>\r\n  <ul>\r\n    <li>\r\n      Returning a\r\n      <code>NaN</code> value will skip over the current divisor.\r\n    </li>\r\n    <li>\r\n      The\r\n      <code>params.builtin</code> value contains some useful definitions, such as\r\n      <ul>\r\n        <li><code>currentDivisor</code></li>\r\n        <li><code>divisorCount</code></li>\r\n        <li><code>divisorBpm</code> (can be null)</li>\r\n        <li><code>cycleBpm</code> (can be null)</li>\r\n        <li><code>currentCycle</code></li>\r\n        <li><code>cycleCount</code></li>\r\n        <li><code>divisionSpan</code> in MS</li>\r\n        <li><code>cycleSpan</code> in MS</li>\r\n      </ul>\r\n      Overwriting them changes the value for repeated calls within the same cycle.\r\n    </li>\r\n    <li>\r\n      The SV function is called once every divisor of every cycle.\r\n    </li>\r\n    <li>\r\n      The properties of the objects in the array passed to timing point functions are:\r\n      <ul>\r\n        <li><code>time: number</code></li>\r\n        <li><code>value: number</code></li>\r\n        <li><code>kiai: boolean</code></li>\r\n        <li><code>volume: number</code></li>\r\n        <li><code>sampleSet: integer</code></li>\r\n        <li><code>sampleIndex: integer</code></li>\r\n        <li><code>measureLength: number</code></li>\r\n        <li><code>inherited: boolean</code></li>\r\n      </ul>\r\n      If an object in the returned array does not follow this interface in its entirety, the object will be ignored.\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/function-editor/select-function-dialog/select-function-dialog.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/function-editor/select-function-dialog/select-function-dialog.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Open...</h2>\r\n<mat-dialog-content>\r\n  <mat-form-field>\r\n    <mat-select [(ngModel)]=\"selection\">\r\n      <mat-option *ngFor=\"let f of collection\" [value]=\"f\">\r\n        {{ f.name }}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"selection\">Select</button>\r\n  <button mat-button mat-dialog-close>Cancel</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/timing-points-manipulation/timing-points-manipulation.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/timing-points-manipulation/timing-points-manipulation.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"padder\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-8\">\r\n      <mat-card>\r\n        <mat-card-title matTooltip=\"Put your .osu timing points here.\">Timing Point Input</mat-card-title>\r\n        <mat-card-content>\r\n          <textarea matInput placeholder=\".osu file timing points go here\" [(ngModel)]=\"tpInput\"></textarea>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <div class=\"row\">\r\n            <h4>Timing Point function</h4>\r\n            <div class=\"col-md-12 text-center\" [class.grey]=\"!currentFunction\">\r\n              {{ currentFunction && currentFunction.name || \"no function selected\" }}\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 text-center\">\r\n              <button mat-raised-button (click)=\"selectFunction()\">Select function</button>\r\n            </div>\r\n            <div class=\"col-md-4 text-center\">\r\n              <button mat-raised-button (click)=\"setParameters()\" [disabled]=\"!currentFunction\">\r\n                Set Parameters\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <button mat-raised-button (click)=\"execute()\" [disabled]=\"!currentFunction\">Run function</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"error\">\r\n      <div class=\"col-md-2\"></div>\r\n      <div class=\"alert alert-danger col-md-8\">\r\n        <strong>Error: </strong>\r\n        <br>\r\n        <b>line:</b> {{ error.lineNumber }} <br>\r\n        <b>message: </b> <br>\r\n        {{ error.message }}\r\n      </div>\r\n      <div class=\"col-md-2\"></div>\r\n    </div>\r\n\r\n    <mat-card style=\"flex: 1 1 auto;\">\r\n      <mat-card-title>Tool Output</mat-card-title>\r\n      <mat-card-actions>\r\n        <button mat-raised-button (click)=\"tpInput = tpOutput\">Feed current output into input</button>\r\n        <button mat-raised-button (click)=\"outArea.select()\">Select all</button>\r\n        <button mat-raised-button (click)=\"tpOutput = ''\">Clear</button>\r\n      </mat-card-actions>\r\n      <mat-card-content>\r\n        <textarea matInput\r\n                  readonly\r\n                  placeholder=\"output will be here\"\r\n                  [(ngModel)]=\"tpOutput\"\r\n                  #outArea></textarea>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tb-title {\r\n  -webkit-box-flex: 1;\r\n          flex-grow: 1;\r\n}\r\n\r\n.tb-buttons {\r\n  -webkit-box-flex: 2;\r\n          flex-grow: 2;\r\n}\r\n\r\n.title-pad {\r\n  padding: 1% 0%;\r\n}\r\n\r\n.fix-size {\r\n  height: 80px;\r\n  max-height: 80px;\r\n  min-height: 80px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBWTtVQUFaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFZO1VBQVosWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGItdGl0bGUge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLnRiLWJ1dHRvbnMge1xyXG4gIGZsZXgtZ3JvdzogMjtcclxufVxyXG5cclxuLnRpdGxlLXBhZCB7XHJcbiAgcGFkZGluZzogMSUgMCU7XHJcbn1cclxuXHJcbi5maXgtc2l6ZSB7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDgwcHg7XHJcbiAgbWluLWhlaWdodDogODBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blackhole-classes/cycle-time-emitter */ "./src/app/blackhole-classes/cycle-time-emitter.ts");
/* harmony import */ var _blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blackhole-classes/sv-functions */ "./src/app/blackhole-classes/sv-functions.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'blackhole';
        this.timeInputType = _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleEmissionType"];
        this.svFunctions = new _blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_3__["SvFunctionCollection"]();
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _emitter_input_timeinput_timeinput_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emitter-input/timeinput/timeinput.component */ "./src/app/emitter-input/timeinput/timeinput.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _emitter_input_timeinput_timeinput_duration_timeinput_duration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./emitter-input/timeinput/timeinput-duration/timeinput-duration.component */ "./src/app/emitter-input/timeinput/timeinput-duration/timeinput-duration.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _emitter_input_timeinput_timeinput_beats_timeinput_beats_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./emitter-input/timeinput/timeinput-beats/timeinput-beats.component */ "./src/app/emitter-input/timeinput/timeinput-beats/timeinput-beats.component.ts");
/* harmony import */ var _emitter_input_timeinput_timeinput_notetimes_timeinput_notetimes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./emitter-input/timeinput/timeinput-notetimes/timeinput-notetimes.component */ "./src/app/emitter-input/timeinput/timeinput-notetimes/timeinput-notetimes.component.ts");
/* harmony import */ var _emitter_input_timeinput_timeinput_startend_timeinput_startend_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./emitter-input/timeinput/timeinput-startend/timeinput-startend.component */ "./src/app/emitter-input/timeinput/timeinput-startend/timeinput-startend.component.ts");
/* harmony import */ var _emitter_input_divisorinput_divisor_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./emitter-input/divisorinput/divisor-input.component */ "./src/app/emitter-input/divisorinput/divisor-input.component.ts");
/* harmony import */ var _emission_control_emission_control_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./emission-control/emission-control.component */ "./src/app/emission-control/emission-control.component.ts");
/* harmony import */ var _function_editor_function_editor_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./function-editor/function-editor.component */ "./src/app/function-editor/function-editor.component.ts");
/* harmony import */ var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-ace-editor */ "./node_modules/ng2-ace-editor/index.js");
/* harmony import */ var _function_editor_select_function_dialog_select_function_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./function-editor/select-function-dialog/select-function-dialog.component */ "./src/app/function-editor/select-function-dialog/select-function-dialog.component.ts");
/* harmony import */ var _function_editor_delete_function_dialog_delete_function_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./function-editor/delete-function-dialog/delete-function-dialog.component */ "./src/app/function-editor/delete-function-dialog/delete-function-dialog.component.ts");
/* harmony import */ var _emitter_input_timeinput_timing_point_template_timing_point_template_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./emitter-input/timeinput/timing-point-template/timing-point-template.component */ "./src/app/emitter-input/timeinput/timing-point-template/timing-point-template.component.ts");
/* harmony import */ var _emitter_input_select_emitter_function_select_emission_function_dialog_select_emission_function_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./emitter-input/select-emitter-function/select-emission-function-dialog/select-emission-function-dialog.component */ "./src/app/emitter-input/select-emitter-function/select-emission-function-dialog/select-emission-function-dialog.component.ts");
/* harmony import */ var _emitter_input_select_emitter_function_emission_function_parameters_assignment_emission_function_parameters_assignment_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./emitter-input/select-emitter-function/emission-function-parameters-assignment/emission-function-parameters-assignment.component */ "./src/app/emitter-input/select-emitter-function/emission-function-parameters-assignment/emission-function-parameters-assignment.component.ts");
/* harmony import */ var _emitter_input_timeinput_timeinput_beatfraction_timeinput_beatfraction_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./emitter-input/timeinput/timeinput-beatfraction/timeinput-beatfraction.component */ "./src/app/emitter-input/timeinput/timeinput-beatfraction/timeinput-beatfraction.component.ts");
/* harmony import */ var _compose_emitters_compose_emitters_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./compose-emitters/compose-emitters.component */ "./src/app/compose-emitters/compose-emitters.component.ts");
/* harmony import */ var _compose_timing_points_compose_timing_points_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./compose-timing-points/compose-timing-points.component */ "./src/app/compose-timing-points/compose-timing-points.component.ts");
/* harmony import */ var _emitter_input_select_emitter_function_select_emitter_function_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./emitter-input/select-emitter-function/select-emitter-function.component */ "./src/app/emitter-input/select-emitter-function/select-emitter-function.component.ts");
/* harmony import */ var _compose_emitters_emitter_parameter_trio_emitter_parameter_trio_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./compose-emitters/emitter-parameter-trio/emitter-parameter-trio.component */ "./src/app/compose-emitters/emitter-parameter-trio/emitter-parameter-trio.component.ts");
/* harmony import */ var _timing_points_manipulation_timing_points_manipulation_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./timing-points-manipulation/timing-points-manipulation.component */ "./src/app/timing-points-manipulation/timing-points-manipulation.component.ts");



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _emitter_input_timeinput_timeinput_component__WEBPACK_IMPORTED_MODULE_4__["TimeinputComponent"],
                _emitter_input_timeinput_timeinput_duration_timeinput_duration_component__WEBPACK_IMPORTED_MODULE_7__["TimeinputDurationComponent"],
                _emitter_input_timeinput_timeinput_beats_timeinput_beats_component__WEBPACK_IMPORTED_MODULE_9__["TimeinputBeatsComponent"],
                _emitter_input_timeinput_timeinput_notetimes_timeinput_notetimes_component__WEBPACK_IMPORTED_MODULE_10__["TimeinputNotetimesComponent"],
                _emitter_input_timeinput_timeinput_startend_timeinput_startend_component__WEBPACK_IMPORTED_MODULE_11__["TimeinputStartendComponent"],
                _emitter_input_divisorinput_divisor_input_component__WEBPACK_IMPORTED_MODULE_12__["DivisorInputComponent"],
                _emission_control_emission_control_component__WEBPACK_IMPORTED_MODULE_13__["EmissionControlComponent"],
                _function_editor_function_editor_component__WEBPACK_IMPORTED_MODULE_14__["FunctionEditorComponent"],
                _function_editor_select_function_dialog_select_function_dialog_component__WEBPACK_IMPORTED_MODULE_16__["SelectFunctionDialogComponent"],
                _function_editor_delete_function_dialog_delete_function_dialog_component__WEBPACK_IMPORTED_MODULE_17__["DeleteFunctionDialogComponent"],
                _emitter_input_timeinput_timing_point_template_timing_point_template_component__WEBPACK_IMPORTED_MODULE_18__["TimingPointTemplateComponent"],
                _emitter_input_select_emitter_function_select_emission_function_dialog_select_emission_function_dialog_component__WEBPACK_IMPORTED_MODULE_19__["SelectEmissionFunctionDialogComponent"],
                _emitter_input_select_emitter_function_emission_function_parameters_assignment_emission_function_parameters_assignment_component__WEBPACK_IMPORTED_MODULE_20__["EmissionFunctionParametersAssignmentComponent"],
                _emitter_input_timeinput_timeinput_beatfraction_timeinput_beatfraction_component__WEBPACK_IMPORTED_MODULE_21__["TimeinputBeatfractionComponent"],
                _compose_emitters_compose_emitters_component__WEBPACK_IMPORTED_MODULE_22__["ComposeEmittersComponent"],
                _compose_timing_points_compose_timing_points_component__WEBPACK_IMPORTED_MODULE_23__["ComposeTimingPointsComponent"],
                _emitter_input_select_emitter_function_select_emitter_function_component__WEBPACK_IMPORTED_MODULE_24__["SelectEmitterFunctionComponent"],
                _compose_emitters_emitter_parameter_trio_emitter_parameter_trio_component__WEBPACK_IMPORTED_MODULE_25__["EmitterParameterTrioComponent"],
                _timing_points_manipulation_timing_points_manipulation_component__WEBPACK_IMPORTED_MODULE_26__["TimingPointsManipulationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                ng2_ace_editor__WEBPACK_IMPORTED_MODULE_15__["AceEditorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"]
            ],
            providers: [],
            entryComponents: [
                _function_editor_select_function_dialog_select_function_dialog_component__WEBPACK_IMPORTED_MODULE_16__["SelectFunctionDialogComponent"],
                _function_editor_delete_function_dialog_delete_function_dialog_component__WEBPACK_IMPORTED_MODULE_17__["DeleteFunctionDialogComponent"],
                _emitter_input_select_emitter_function_select_emission_function_dialog_select_emission_function_dialog_component__WEBPACK_IMPORTED_MODULE_19__["SelectEmissionFunctionDialogComponent"],
                _emitter_input_select_emitter_function_emission_function_parameters_assignment_emission_function_parameters_assignment_component__WEBPACK_IMPORTED_MODULE_20__["EmissionFunctionParametersAssignmentComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blackhole-classes/builtin-sv-functions.ts":
/*!***********************************************************!*\
  !*** ./src/app/blackhole-classes/builtin-sv-functions.ts ***!
  \***********************************************************/
/*! exports provided: builtinSv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "builtinSv", function() { return builtinSv; });
var builtinSv = {
    "Monotonic Scrolling": {
        "parameters": [
            {
                "name": "exponent",
                "description": "Exponent to use. 1 is linear easing.",
                "defaultValue": "2.718281828459045"
            },
            {
                "name": "startSv",
                "description": "SV to map the starting point to",
                "defaultValue": "1"
            },
            {
                "name": "endSv",
                "description": "SV to map the end point to",
                "defaultValue": "2"
            }
        ],
        "body": "(() => { \n    return (x, params) => { \n        x = Math.pow(x, params.exponent);\n        return (1 - x) * params.startSv + x * params.endSv; \n    }; \n})();",
        "name": "Monotonic Scrolling",
        "tooltip": "Increase or decrease SV steadily.",
        "description": "Function that helps the user scroll from A to B with exponential easing.",
        "type": 0
    },
    "Sine Scrolling": {
        "parameters": [
            {
                "name": "center",
                "description": "Center point. Wave will oscilate around here.",
                "defaultValue": "1"
            },
            {
                "name": "amplitude",
                "description": "Amplitude. How much to move away from the center.",
                "defaultValue": "0.2"
            }
        ],
        "body": "(() => {\n    return (x, params) => {\n        var angle = 2 * Math.PI * x;\n        var sineval = params.amplitude * Math.sin(angle) + params.center;\n        return sineval;\n    }; \n})()",
        "name": "Sine Scrolling",
        "tooltip": "",
        "description": "Smooth sine scrolling. Waves around center point."
    },
    "Teleporters": {
        "parameters": [
            {
                "name": "peak",
                "description": "Peak SV multiplier.",
                "defaultValue": "10"
            },
            {
                "name": "rate",
                "description": "SV Rate after the peak.",
                "defaultValue": "1"
            },
            {
                "name": "duration",
                "description": "Fraction of the section to last.",
                "defaultValue": "0.1"
            }
        ],
        "body": "(() => { \n    return (x, params) => {\n        if (x < params.duration) return params.peak;\n        else return params.rate;\n    }; \n})()",
        "name": "Teleporters",
        "tooltip": "",
        "description": "Jump that map around with this function. Hits peak for the duration, then a second rate afterwards. Make sure your divisors are at least 1/duration."
    },
    "Rate Jitter": {
        "parameters": [
            {
                "name": "duration",
                "description": "Fraction: How long the jitter lasts on this section",
                "defaultValue": "0.5"
            },
            {
                "name": "startSv",
                "description": "Initial SV value",
                "defaultValue": "1.5"
            },
            {
                "name": "dstRate",
                "description": "Rate the jitter should look like",
                "defaultValue": "1"
            }
        ],
        "body": "(() => {\n    return (x, params) => {\n        var div = 1 / (1 - params.duration);\n        var centerSv = (params.dstRate - params.startSv * params.duration) * div;\n        \n        if (x < params.duration) return params.startSv;\n        if (x >= params.duration && x < 1) return centerSv;\n        if (x == 1) return params.dstRate;\n        return 1;\n    }; \n})()",
        "name": "Rate Jitter",
        "tooltip": "",
        "description": "Jitter between two SV values that look like the target rate, given the first SV value."
    },
    "Bounce": {
        "parameters": [
            {
                "name": "amplitude",
                "description": "The bounce's peak from the center",
                "defaultValue": "0.2"
            },
            {
                "name": "center",
                "description": "The bounce's start point",
                "defaultValue": "1"
            }
        ],
        "body": "(() => { \n    return (x, params) => {\n        var angle = Math.PI * x;\n        var sineval = params.amplitude * Math.sin(angle) + params.center;\n        return sineval;\n    }; \n})()",
        "name": "Bounce",
        "tooltip": "",
        "description": "Bouncy function that goes up and down."
    },
    "Add time": {
        "parameters": [
            {
                "name": "Add value",
                "description": "Amount of time to add into timing points (in MS)",
                "defaultValue": "0"
            }
        ],
        "type": 2,
        "body": "(() => {\n    return (tp, params) => {\n      tp.forEach(el => el.time += params[\"Add value\"]);\n      return tp;\n    };\n})();",
        "name": "Add time",
        "tooltip": "Add time to timing points."
    },
    "Change Offset": {
        "parameters": [
            {
                "name": "New offset",
                "description": "Offset to change timing points to.",
                "defaultValue": "0"
            }
        ],
        "type": 2,
        "body": "(() => {\n    return (tp, params) => {\n      const new_offs = params[\"New offset\"];\n      const adj_value = Math.min.apply(Math, tp.map(x => x.time));\n      const add_val = new_offs - adj_value;\n      tp.forEach(x => x.time += add_val);\n      return tp;\n    };\n})();",
        "name": "Change Offset",
        "tooltip": "Change the offset of your timing point set relative to the earliest one."
    },
    "Multiply SV value": {
        "parameters": [
            {
                "name": "Multiply value",
                "description": "Value to multiply by.",
                "defaultValue": "1"
            }
        ],
        "type": 2,
        "body": "(() => {\n    return (tp, params) => {\n      tp.forEach(x => {\n        if (x.inherited) {\n            let mul = -100 / x.value * params[\"Multiply value\"];\n            x.value = -100 / mul;\n        }\n      });\n      return tp;\n    };\n})();",
        "name": "Multiply SV value",
        "tooltip": "Multiply your inherited timing points by some value."
    },
    "Repeat": {
        "parameters": [
            {
                "name": "Gap",
                "description": "Gap in MS between repetitions",
                "defaultValue": "100"
            },
            {
                "name": "Repetitions",
                "description": "Times to repeat these timing points",
                "defaultValue": "1"
            },
            {
                "name": "Start offset",
                "description": "Set the first repetition's time to this, and calculate those that come afterwards from here.",
                "defaultValue": "0"
            }
        ],
        "type": 2,
        "body": "(() => {\n    return (tp, params) => {\n      let gap = params[\"Gap\"];\n      let repetitions = Math.round(params[\"Repetitions\"]);\n      \n      let start_offset = params[\"Start offset\"];\n      let start_time = Math.min.apply(Math, tp.map(x => x.time));\n      let end_time  = Math.max.apply(Math, tp.map(x => x.time));\n      let adjustment = start_offset - start_time;\n      let duration = end_time - start_time;\n      \n      let ret = [];\n      for (let i = 0; i < repetitions; i++) {\n        let gap_amt = gap * i;\n        let dur_amt = duration * i;\n        \n        for (var point of tp) {\n            let t = point.time + adjustment + gap_amt + dur_amt;\n            ret.push({\n                time: t,\n                value: point.value,\n                kiai: point.kiai,\n                inherited: point.inherited,\n                volume: point.volume,\n                sampleSet: point.sampleSet,\n                sampleIndex: point.sampleIndex,\n                measureLength: point.measureLength\n            });\n        }\n      }\n      \n      return ret;\n    };\n})();",
        "name": "Repeat",
        "tooltip": "Repeat N times a set of timing points with a given gap, offsetting them to the given time."
    }
};


/***/ }),

/***/ "./src/app/blackhole-classes/cycle-time-emitter.ts":
/*!*********************************************************!*\
  !*** ./src/app/blackhole-classes/cycle-time-emitter.ts ***!
  \*********************************************************/
/*! exports provided: CycleTimeEmitter, CycleTimeMsDuration, CycleTimeDeltatime, CycleTimeBeats, CycleTimeBeatFraction, CycleTimeNotetime, CycleTimeNotetimeFixedDuration, CycleTimeNoteToNote, CycleEmissionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CycleTimeEmitter", function() { return CycleTimeEmitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CycleTimeMsDuration", function() { return CycleTimeMsDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CycleTimeDeltatime", function() { return CycleTimeDeltatime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CycleTimeBeats", function() { return CycleTimeBeats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CycleTimeBeatFraction", function() { return CycleTimeBeatFraction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CycleTimeNotetime", function() { return CycleTimeNotetime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CycleTimeNotetimeFixedDuration", function() { return CycleTimeNotetimeFixedDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CycleTimeNoteToNote", function() { return CycleTimeNoteToNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CycleEmissionType", function() { return CycleEmissionType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


var CycleTimeEmitter = /** @class */ (function () {
    function CycleTimeEmitter() {
        this.startTime = 0;
        this.cycleCount = 1;
    }
    Object.defineProperty(CycleTimeEmitter.prototype, "cycleDuration", {
        get: function () {
            return this.getDuration(0);
        },
        enumerable: true,
        configurable: true
    });
    CycleTimeEmitter.prototype.cycleStartTime = function (index) {
        return index * this.cycleDuration + this.startTime;
    };
    CycleTimeEmitter.prototype.createCycle = function (index, divisor, timeDeformFunction, funcVars, generateLastPoint) {
        var effectiveStartTime = this.cycleStartTime(index);
        var dur = this.getDuration(index);
        funcVars.spanPerCycle = dur;
        return {
            cycle: divisor.generateSpanDivisors(effectiveStartTime, dur, timeDeformFunction, funcVars, generateLastPoint),
            count: divisor.getSpanDivisorCount(dur)
        };
    };
    return CycleTimeEmitter;
}());

var CycleTimeMsDuration = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CycleTimeMsDuration, _super);
    function CycleTimeMsDuration() {
        var _this = _super.call(this) || this;
        _this.duration = 0;
        return _this;
    }
    Object.defineProperty(CycleTimeMsDuration.prototype, "autocycle", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CycleTimeMsDuration.prototype, "isConstantCycleTime", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    CycleTimeMsDuration.prototype.getDuration = function (cycleIndex) {
        return this.duration;
    };
    return CycleTimeMsDuration;
}(CycleTimeEmitter));

var CycleTimeDeltatime = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CycleTimeDeltatime, _super);
    function CycleTimeDeltatime() {
        var _this = _super.call(this) || this;
        _this.endTime = 0;
        return _this;
    }
    Object.defineProperty(CycleTimeDeltatime.prototype, "autocycle", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CycleTimeDeltatime.prototype, "isConstantCycleTime", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    CycleTimeDeltatime.prototype.getDuration = function (cycleIndex) {
        return this.endTime - this.startTime;
    };
    return CycleTimeDeltatime;
}(CycleTimeEmitter));

var CycleTimeBeats = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CycleTimeBeats, _super);
    function CycleTimeBeats() {
        var _this = _super.call(this) || this;
        _this.beats = 1;
        _this.bpm = 120;
        return _this;
    }
    Object.defineProperty(CycleTimeBeats.prototype, "autocycle", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CycleTimeBeats.prototype, "isConstantCycleTime", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    CycleTimeBeats.prototype.getDuration = function (cycleIndex) {
        return 1000 * 60 / this.bpm * this.beats;
    };
    return CycleTimeBeats;
}(CycleTimeEmitter));

var CycleTimeBeatFraction = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CycleTimeBeatFraction, _super);
    function CycleTimeBeatFraction() {
        var _this = _super.call(this) || this;
        _this.totalBeats = 1;
        _this.beatDivisor = 2;
        _this.bpm = 120;
        return _this;
    }
    Object.defineProperty(CycleTimeBeatFraction.prototype, "cycleCount", {
        get: function () {
            return this.totalBeats * this.beatDivisor;
        },
        set: function (_) {
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CycleTimeBeatFraction.prototype, "autocycle", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CycleTimeBeatFraction.prototype, "isConstantCycleTime", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    CycleTimeBeatFraction.prototype.getDuration = function (cycleIndex) {
        var mspb = 60000 / this.bpm;
        return mspb / this.beatDivisor;
    };
    return CycleTimeBeatFraction;
}(CycleTimeEmitter));

var CycleTimeNotetime = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CycleTimeNotetime, _super);
    function CycleTimeNotetime() {
        var _this = _super.call(this) || this;
        _this.noteTimes = [];
        return _this;
    }
    Object.defineProperty(CycleTimeNotetime.prototype, "autocycle", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CycleTimeNotetime.prototype, "notes", {
        get: function () {
            return this._notes;
        },
        set: function (value) {
            this._notes = value;
            var valset = new Set();
            // parse from this syntax
            // time - (time|discarded,...)
            var re = /(\d+)\|\d+/g;
            var match;
            while ((match = re.exec(value)) != null) {
                valset.add(parseInt(match[1], 10));
            }
            this.noteTimes = Array.from(valset).sort(function (a, b) {
                return a - b;
            });
            this.cycleCount = this.noteTimes.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    CycleTimeNotetime.prototype.cycleStartTime = function (cycle) {
        return this.noteTimes[cycle] - this.noteTimes[0] + this.startTime;
    };
    return CycleTimeNotetime;
}(CycleTimeEmitter));

var CycleTimeNotetimeFixedDuration = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CycleTimeNotetimeFixedDuration, _super);
    function CycleTimeNotetimeFixedDuration() {
        return _super.call(this) || this;
    }
    Object.defineProperty(CycleTimeNotetimeFixedDuration.prototype, "isConstantCycleTime", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    CycleTimeNotetimeFixedDuration.prototype.getDuration = function (cycleIndex) {
        if (this.noteTimes.length === 0) {
            return this.duration;
        }
        if (cycleIndex < 0) {
            throw new rxjs__WEBPACK_IMPORTED_MODULE_1__["ArgumentOutOfRangeError"]();
        }
        if (cycleIndex >= this.noteTimes.length) {
            throw new rxjs__WEBPACK_IMPORTED_MODULE_1__["ArgumentOutOfRangeError"]();
        }
        var spanToNext;
        if (cycleIndex === this.noteTimes.length - 1) {
            spanToNext = Infinity;
        }
        else {
            spanToNext = this.noteTimes[cycleIndex + 1] - this.noteTimes[cycleIndex];
        }
        return Math.min(this.duration, spanToNext);
    };
    return CycleTimeNotetimeFixedDuration;
}(CycleTimeNotetime));

var CycleTimeNoteToNote = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CycleTimeNoteToNote, _super);
    function CycleTimeNoteToNote() {
        return _super.call(this) || this;
    }
    Object.defineProperty(CycleTimeNoteToNote.prototype, "isConstantCycleTime", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    CycleTimeNoteToNote.prototype.getDuration = function (cycleIndex) {
        if (!this.noteTimes) {
            return 0;
        }
        if (this.noteTimes.length < 2) {
            return 0;
        }
        if (cycleIndex < 0) {
            throw new rxjs__WEBPACK_IMPORTED_MODULE_1__["ArgumentOutOfRangeError"]();
        }
        if (cycleIndex >= this.noteTimes.length) {
            throw new rxjs__WEBPACK_IMPORTED_MODULE_1__["ArgumentOutOfRangeError"]();
        }
        if (cycleIndex === this.noteTimes.length - 1) {
            return 0;
        }
        return this.noteTimes[cycleIndex + 1] - this.noteTimes[cycleIndex];
    };
    return CycleTimeNoteToNote;
}(CycleTimeNotetime));

var CycleEmissionType;
(function (CycleEmissionType) {
    CycleEmissionType[CycleEmissionType["Span"] = 0] = "Span";
    CycleEmissionType[CycleEmissionType["Delta"] = 1] = "Delta";
    CycleEmissionType[CycleEmissionType["Beats"] = 2] = "Beats";
    CycleEmissionType[CycleEmissionType["BeatDivision"] = 3] = "BeatDivision";
    CycleEmissionType[CycleEmissionType["NotetimeSpan"] = 4] = "NotetimeSpan";
    CycleEmissionType[CycleEmissionType["NoteToNote"] = 5] = "NoteToNote";
})(CycleEmissionType || (CycleEmissionType = {}));


/***/ }),

/***/ "./src/app/blackhole-classes/divisor-emitter.ts":
/*!******************************************************!*\
  !*** ./src/app/blackhole-classes/divisor-emitter.ts ***!
  \******************************************************/
/*! exports provided: EndPointMode, DivisorEmitter, DivisorEmitterBeatFraction, DivisorEmitterByCount, DivisorEmitterTimeSpan, DivisorInputType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndPointMode", function() { return EndPointMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisorEmitter", function() { return DivisorEmitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisorEmitterBeatFraction", function() { return DivisorEmitterBeatFraction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisorEmitterByCount", function() { return DivisorEmitterByCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisorEmitterTimeSpan", function() { return DivisorEmitterTimeSpan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisorInputType", function() { return DivisorInputType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var EndPointMode;
(function (EndPointMode) {
    EndPointMode[EndPointMode["NoEndPoint"] = 0] = "NoEndPoint";
    EndPointMode[EndPointMode["LastCycle"] = 1] = "LastCycle";
    EndPointMode[EndPointMode["EveryCycle"] = 2] = "EveryCycle";
})(EndPointMode || (EndPointMode = {}));
var DivisorEmitter = /** @class */ (function () {
    function DivisorEmitter() {
    }
    DivisorEmitter.prototype.generateSpanDivisors = function (startTime, duration, timeWarpFunction, vars, includeEndPoint) {
        function generateSpanDivisorsInner(i) {
            var fraction = i / count;
            fraction = timeWarpFunction && timeWarpFunction(fraction, vars) || fraction;
            return {
                time: (startTime + duration * fraction),
                fraction: fraction
            };
        }
        var count, i;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    count = this.getSpanDivisorCount(duration);
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < count)) return [3 /*break*/, 4];
                    return [4 /*yield*/, generateSpanDivisorsInner(i)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    if (!includeEndPoint) return [3 /*break*/, 6];
                    return [4 /*yield*/, generateSpanDivisorsInner(count)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    };
    return DivisorEmitter;
}());

var DivisorEmitterBeatFraction = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DivisorEmitterBeatFraction, _super);
    function DivisorEmitterBeatFraction() {
        var _this = _super.call(this) || this;
        _this.bpm = 120;
        _this.beatDivisor = 1;
        return _this;
    }
    Object.defineProperty(DivisorEmitterBeatFraction.prototype, "divisorSpan", {
        get: function () {
            return 60000 / this.bpm / this.beatDivisor;
        },
        enumerable: true,
        configurable: true
    });
    DivisorEmitterBeatFraction.prototype.getSpanDivisorCount = function (spanMs) {
        return spanMs / this.divisorSpan;
    };
    return DivisorEmitterBeatFraction;
}(DivisorEmitter));

var DivisorEmitterByCount = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DivisorEmitterByCount, _super);
    function DivisorEmitterByCount() {
        var _this = _super.call(this) || this;
        _this.count = 2;
        return _this;
    }
    DivisorEmitterByCount.prototype.getSpanDivisorCount = function (span) {
        return this.count;
    };
    return DivisorEmitterByCount;
}(DivisorEmitter));

var DivisorEmitterTimeSpan = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DivisorEmitterTimeSpan, _super);
    function DivisorEmitterTimeSpan() {
        var _this = _super.call(this) || this;
        _this.span = 100;
        return _this;
    }
    DivisorEmitterTimeSpan.prototype.getSpanDivisorCount = function (span) {
        return span / this.span;
    };
    return DivisorEmitterTimeSpan;
}(DivisorEmitter));

var DivisorInputType;
(function (DivisorInputType) {
    DivisorInputType[DivisorInputType["Fixed"] = 0] = "Fixed";
    DivisorInputType[DivisorInputType["BPM"] = 1] = "BPM";
    DivisorInputType[DivisorInputType["Span"] = 2] = "Span";
})(DivisorInputType || (DivisorInputType = {}));


/***/ }),

/***/ "./src/app/blackhole-classes/osu-timestamp.ts":
/*!****************************************************!*\
  !*** ./src/app/blackhole-classes/osu-timestamp.ts ***!
  \****************************************************/
/*! exports provided: OsuTimestamp, validateTimestamp, eventValidateTimestamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OsuTimestamp", function() { return OsuTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateTimestamp", function() { return validateTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventValidateTimestamp", function() { return eventValidateTimestamp; });
var OsuTimestamp = /** @class */ (function () {
    function OsuTimestamp(stampText) {
        var timestampRegex = /(\d{2,}):(\d\d):(\d\d\d)/;
        var result = timestampRegex.exec(stampText);
        if (result) {
            this._stampTime = OsuTimestamp.fromRegexResult(result);
            this.valid = true;
            return;
        }
        var timeResult = parseFloat(stampText);
        if (!isNaN(timeResult) && isFinite(timeResult)) {
            this._stampTime = timeResult;
            this.valid = true;
            return;
        }
        this.valid = false;
    }
    Object.defineProperty(OsuTimestamp.prototype, "time", {
        get: function () {
            return this._stampTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OsuTimestamp.prototype, "osuTimestamp", {
        get: function () {
            var minutes = Math.floor(this.time / 60000);
            var milliseconds = Math.floor(this.time % 1000);
            var seconds = Math.floor((this._stampTime - minutes * 60000 - milliseconds) / 1000);
            var strMinutes = minutes.toString();
            if (minutes < 10) {
                strMinutes = "0" + minutes;
            }
            var strSeconds = seconds.toString();
            if (seconds < 10) {
                strSeconds = "0" + seconds;
            }
            var strMilliseconds = milliseconds.toString();
            if (milliseconds < 10) {
                strMilliseconds = "0" + milliseconds;
            }
            if (milliseconds < 100) {
                strMilliseconds = "0" + strMilliseconds;
            }
            return strMinutes + ":" + strSeconds + ":" + strMilliseconds;
        },
        enumerable: true,
        configurable: true
    });
    OsuTimestamp.fromRegexResult = function (result) {
        var minutes = parseInt(result[1]);
        var seconds = parseInt(result[2]);
        var milliseconds = parseInt(result[3]);
        return minutes * 60 * 1000 +
            seconds * 1000 +
            milliseconds;
    };
    OsuTimestamp.ctorParameters = function () { return [
        null
    ]; };
    return OsuTimestamp;
}());

function validateTimestamp(text) {
    var ts = new OsuTimestamp(text);
    if (ts.valid) {
        return ts.time;
    }
    else {
        return NaN;
    }
}
function eventValidateTimestamp(event) {
    var stamp = validateTimestamp(event.target.value);
    if (!isNaN(stamp)) {
        event.target.value = stamp;
    }
}


/***/ }),

/***/ "./src/app/blackhole-classes/osu-timing-point-emitter.ts":
/*!***************************************************************!*\
  !*** ./src/app/blackhole-classes/osu-timing-point-emitter.ts ***!
  \***************************************************************/
/*! exports provided: OsuTimingPointEmitter, emitTargets, applyManipulation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OsuTimingPointEmitter", function() { return OsuTimingPointEmitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emitTargets", function() { return emitTargets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyManipulation", function() { return applyManipulation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _divisor_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./divisor-emitter */ "./src/app/blackhole-classes/divisor-emitter.ts");
/* harmony import */ var _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cycle-time-emitter */ "./src/app/blackhole-classes/cycle-time-emitter.ts");
/* harmony import */ var _sv_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sv-functions */ "./src/app/blackhole-classes/sv-functions.ts");




var OsuTimingPointEmitter = /** @class */ (function () {
    function OsuTimingPointEmitter() {
    }
    OsuTimingPointEmitter.emitFixedBpm = function (cycle, defaultTimingPoint, bpm) {
        var cl, it, divisor, point;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    defaultTimingPoint.inherited = false;
                    cl = cycle.cycle;
                    _a.label = 1;
                case 1:
                    if (!(it = cl.next())) return [3 /*break*/, 3];
                    if (it.done) {
                        return [3 /*break*/, 3];
                    }
                    divisor = it.value;
                    point = defaultTimingPoint.applyDifference({
                        time: divisor.time,
                        value: 60000 / bpm,
                        inherited: false
                    });
                    return [4 /*yield*/, point];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    };
    OsuTimingPointEmitter.emitBpmFunction = function (vars, cycle, defaultTimingPoint, bpmFunction, skipRepeated) {
        var i, lastBpm, cl, it, divisor, bpm, point, skip;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    lastBpm = NaN;
                    vars.builtin.divisorCount = cycle.count;
                    cl = cycle.cycle;
                    _a.label = 1;
                case 1:
                    if (!(it = cl.next())) return [3 /*break*/, 4];
                    if (it.done) {
                        return [3 /*break*/, 4];
                    }
                    divisor = it.value;
                    vars.builtin.currentDivisor = i;
                    i++;
                    bpm = bpmFunction(divisor.fraction, vars);
                    if (isNaN(bpm)) {
                        return [3 /*break*/, 1];
                    }
                    point = defaultTimingPoint.applyDifference({
                        time: divisor.time,
                        value: 60000 / bpm,
                        inherited: false
                    });
                    skip = (bpm === lastBpm && skipRepeated);
                    if (!!skip) return [3 /*break*/, 3];
                    lastBpm = bpm;
                    return [4 /*yield*/, point];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    };
    OsuTimingPointEmitter.emitSv = function (vars, cycle, defaultTimingPoint, svFunction, skipRepeated) {
        var i, lastSv, cl, it, divisor, multiplier, point, skip;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    lastSv = NaN;
                    // set useful builtin stuff
                    vars.builtin.divisorCount = cycle.count;
                    cl = cycle.cycle;
                    _a.label = 1;
                case 1:
                    if (!(it = cl.next())) return [3 /*break*/, 4];
                    if (it.done) {
                        return [3 /*break*/, 4];
                    }
                    divisor = it.value;
                    vars.builtin.currentDivisor = i;
                    i++;
                    multiplier = 1;
                    if (svFunction != null) {
                        multiplier = svFunction(divisor.fraction, vars);
                    }
                    // skip intentional NaNs
                    if (isNaN(multiplier) || multiplier == null) {
                        return [3 /*break*/, 1];
                    }
                    point = defaultTimingPoint.applyDifference({
                        time: divisor.time,
                        value: -100 / multiplier,
                        inherited: true
                    });
                    skip = (multiplier === lastSv && skipRepeated);
                    if (!!skip) return [3 /*break*/, 3];
                    lastSv = multiplier;
                    return [4 /*yield*/, point];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    };
    return OsuTimingPointEmitter;
}());

function emitTargets(timeInput, divisors, svFunction, timeFunction, defaultTimingPoint, fixedBpm, endDivisorMode) {
    var output = [];
    var cycleCount = timeInput.cycleCount;
    function generateStaticBuiltinVariables(currentCycle) {
        var builtin = {};
        builtin.divisorBpm = null;
        if (divisors instanceof _divisor_emitter__WEBPACK_IMPORTED_MODULE_1__["DivisorEmitterBeatFraction"]) {
            builtin.divisorBpm = divisors.bpm;
        }
        builtin.cycleBpm = null;
        if (timeInput instanceof _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeBeats"]) {
            builtin.cycleBpm = timeInput.bpm;
        }
        builtin.currentCycle = currentCycle;
        builtin.cycleCount = cycleCount;
        builtin.cycleSpan = timeInput.cycleDuration;
        builtin.divisionSpan = timeInput.cycleDuration / divisors.getSpanDivisorCount(timeInput.cycleDuration);
        return builtin;
    }
    var userFunctionSV = svFunction ? eval(svFunction.body) : null;
    var userFunctionTime = timeFunction ? eval(timeFunction.body) : null;
    var varsSv = svFunction ? _sv_functions__WEBPACK_IMPORTED_MODULE_3__["SvFunction"].getCurrentParameters(svFunction) : {};
    var varsTime = timeFunction ? _sv_functions__WEBPACK_IMPORTED_MODULE_3__["SvFunction"].getCurrentParameters(timeFunction) : {};
    for (var i = 0; i < cycleCount; i++) {
        var builtin = generateStaticBuiltinVariables(i);
        varsSv.builtin = builtin;
        varsTime.builtin = builtin;
        var includeCycleDivisorEnd = false;
        switch (endDivisorMode) {
            case _divisor_emitter__WEBPACK_IMPORTED_MODULE_1__["EndPointMode"].EveryCycle:
                includeCycleDivisorEnd = true;
                break;
            case _divisor_emitter__WEBPACK_IMPORTED_MODULE_1__["EndPointMode"].LastCycle:
                includeCycleDivisorEnd = i === cycleCount - 1;
                break;
            case _divisor_emitter__WEBPACK_IMPORTED_MODULE_1__["EndPointMode"].NoEndPoint:
                includeCycleDivisorEnd = false;
                break;
        }
        var cycleData = timeInput.createCycle(i, divisors, userFunctionTime, varsTime, includeCycleDivisorEnd);
        var cycleResult = void 0;
        if (svFunction) {
            if (svFunction.type === _sv_functions__WEBPACK_IMPORTED_MODULE_3__["SvFunctionType"].BPM) {
                cycleResult = OsuTimingPointEmitter.emitBpmFunction(varsSv, cycleData, defaultTimingPoint, userFunctionSV, !svFunction.doNotSkipRepeatedValues);
            }
            else {
                cycleResult = OsuTimingPointEmitter.emitSv(varsSv, cycleData, defaultTimingPoint, userFunctionSV, !svFunction.doNotSkipRepeatedValues);
            }
        }
        else {
            cycleResult = OsuTimingPointEmitter.emitFixedBpm(cycleData, defaultTimingPoint, fixedBpm);
        }
        var res = cycleResult.next();
        while (!res.done) {
            output.push(res.value);
            res = cycleResult.next();
        }
    }
    return output;
}
function applyManipulation(func, timingPoints) {
    var f = eval(func.body);
    var vars = _sv_functions__WEBPACK_IMPORTED_MODULE_3__["SvFunction"].getCurrentParameters(func) || {};
    return f(timingPoints, vars);
}


/***/ }),

/***/ "./src/app/blackhole-classes/osu-timing-point.ts":
/*!*******************************************************!*\
  !*** ./src/app/blackhole-classes/osu-timing-point.ts ***!
  \*******************************************************/
/*! exports provided: SampleSet, OsuTimingPoint, composeTimingPoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleSet", function() { return SampleSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OsuTimingPoint", function() { return OsuTimingPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composeTimingPoints", function() { return composeTimingPoints; });
var SampleSet;
(function (SampleSet) {
    SampleSet[SampleSet["Auto"] = 0] = "Auto";
    SampleSet[SampleSet["Normal"] = 1] = "Normal";
    SampleSet[SampleSet["Soft"] = 2] = "Soft";
    SampleSet[SampleSet["Drum"] = 3] = "Drum";
})(SampleSet || (SampleSet = {}));
var OsuTimingPoint = /** @class */ (function () {
    function OsuTimingPoint() {
        /* in MS */
        this.time = 0;
        /*
            if uninherited, it's beatspace
            if inherited, it's -100 / SV
        */
        this.value = 60000 / 120;
        this.kiai = false;
        this.volume = 15;
        this.sampleSet = SampleSet.Auto;
        this.sampleIndex = 0;
        this.measureLength = 4;
        this.inherited = false;
        this.time = 0;
        this.value = 60000 / 120;
        this.kiai = false;
        this.volume = 15;
        this.sampleSet = SampleSet.Auto;
        this.sampleIndex = 0;
        this.measureLength = 4;
        this.inherited = false;
    }
    Object.defineProperty(OsuTimingPoint.prototype, "svMultiplier", {
        get: function () {
            return -100 / this.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OsuTimingPoint.prototype, "inheritedInt", {
        get: function () {
            return (this.inherited === true) ? 0 : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OsuTimingPoint.prototype, "kiaiInt", {
        get: function () {
            return this.kiai ? 1 : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OsuTimingPoint.prototype, "roundedTime", {
        get: function () {
            return Math.round(this.time);
        },
        enumerable: true,
        configurable: true
    });
    OsuTimingPoint.fromString = function (s) {
        var arr = s.split(',');
        var tp = new OsuTimingPoint();
        tp.time = parseFloat(arr[0]);
        tp.value = parseFloat(arr[1]);
        tp.measureLength = parseInt(arr[2], 10);
        tp.sampleSet = parseInt(arr[3], 10);
        tp.sampleIndex = parseInt(arr[4], 10);
        tp.volume = parseInt(arr[5], 10);
        tp.inherited = (arr[6] !== '1');
        tp.kiai = (arr[7] === '1');
        return tp;
    };
    // returns true if it has all the properties and are the right type
    OsuTimingPoint.isValidDifference = function (x) {
        return x.time != null && typeof x.time === 'number'
            && x.value != null && typeof x.value === 'number'
            && x.kiai != null && typeof x.kiai === 'boolean'
            && x.volume != null && typeof x.volume === 'number'
            && x.sampleSet != null && Number.isInteger(x.sampleSet)
            && x.sampleIndex != null && Number.isInteger(x.sampleIndex)
            && x.measureLength != null && typeof x.measureLength === 'number'
            && x.inherited != null && typeof x.inherited === 'boolean';
    };
    OsuTimingPoint.prototype.toString = function () {
        return this.time + "," + this.value + "," + this.measureLength + "," +
            (this.sampleSet + "," + this.sampleIndex + "," + this.volume + ",") +
            (this.inheritedInt + "," + this.kiaiInt);
    };
    OsuTimingPoint.prototype.applyDifference = function (changes) {
        var ret = new OsuTimingPoint();
        ret.time = changes && changes.time || this.time;
        ret.value = changes && changes.value || this.value;
        ret.kiai = changes && changes.kiai || this.kiai;
        ret.volume = changes && changes.volume || this.volume;
        ret.sampleSet = changes && changes.sampleSet || this.sampleSet;
        ret.sampleIndex = changes && changes.sampleIndex || this.sampleIndex;
        ret.measureLength = changes && changes.measureLength || this.measureLength;
        if (changes && changes.inherited !== undefined) {
            ret.inherited = changes.inherited;
        }
        else {
            ret.inherited = this.inherited;
        }
        return ret;
    };
    OsuTimingPoint.prototype.toDifference = function () {
        return {
            time: this.time,
            value: this.value,
            kiai: this.kiai,
            volume: this.volume,
            sampleSet: this.sampleSet,
            sampleIndex: this.sampleIndex,
            measureLength: this.measureLength,
            inherited: this.inherited
        };
    };
    return OsuTimingPoint;
}());

// left-biased binary search for timing points
function osuTPBinSearch(tpl, time) {
    var left = 0;
    var right = tpl.length;
    var center;
    while (left < right) {
        center = Math.floor((left + right) / 2);
        var val = tpl[center].time;
        if (val < time) {
            left = center + 1;
        }
        else {
            right = center;
        }
    }
    // bias it
    while (left > 0 && (left >= tpl.length || tpl[left].time > time)) {
        left--;
    }
    return left;
}
// assumption: these timing points are sorted, they're also sv changes.
function composeTimingPoints(set1, set2, template) {
    var ret = [];
    var ui1 = set1.filter(function (x) { return !x.inherited; });
    var ui2 = set2.filter(function (x) { return !x.inherited; });
    set1 = set1.filter(function (x) { return x.inherited; });
    set2 = set2.filter(function (x) { return x.inherited; });
    // Apply all of set 2 to set 1
    for (var _i = 0, set1_1 = set1; _i < set1_1.length; _i++) {
        var tp = set1_1[_i];
        var s2Cur = set2[osuTPBinSearch(set2, tp.time)];
        // affectd by s2 (tp comes after s2)
        if (s2Cur.time <= tp.time) {
            var ntp = template.applyDifference({
                time: tp.time,
                value: -100 / (s2Cur.svMultiplier * tp.svMultiplier),
                inherited: true
            });
            ret.push(ntp);
        }
        // not affected by s2 (tp comes before s2)
        if (s2Cur.time > tp.time) {
            var ntp = template.applyDifference({
                time: tp.time,
                value: -100 / (tp.svMultiplier),
                inherited: true
            });
            ret.push(ntp);
        }
    }
    // Add the timing points of set 2 not in t1, including those with equal times.
    for (var _a = 0, set2_1 = set2; _a < set2_1.length; _a++) {
        var tp = set2_1[_a];
        var s1Cur = set1[osuTPBinSearch(set1, tp.time)];
        //  tp's time is not in set1
        if (s1Cur.time !== tp.time) {
            // not affected by s1 (closest s1 comes after tp)
            if (s1Cur.time > tp.time) {
                var ntp = template.applyDifference(({
                    time: tp.time,
                    value: -100 / (tp.svMultiplier),
                    inherited: true
                }));
                ret.push(ntp);
            }
            // affected by s1 (closest s1 comes before tp)
            if (s1Cur.time < tp.time) {
                var ntp = template.applyDifference(({
                    time: tp.time,
                    value: -100 / (s1Cur.svMultiplier * tp.svMultiplier),
                    inherited: true
                }));
                ret.push(ntp);
            }
        }
    }
    ret = ret.concat(ui1).concat(ui2);
    ret.sort(function (a, b) { return a.time - b.time; });
    return ret;
}


/***/ }),

/***/ "./src/app/blackhole-classes/sv-functions.ts":
/*!***************************************************!*\
  !*** ./src/app/blackhole-classes/sv-functions.ts ***!
  \***************************************************/
/*! exports provided: SvFunctionType, SvParameter, SvFunction, SvFunctionCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvFunctionType", function() { return SvFunctionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvParameter", function() { return SvParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvFunction", function() { return SvFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvFunctionCollection", function() { return SvFunctionCollection; });
/* harmony import */ var _builtin_sv_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builtin-sv-functions */ "./src/app/blackhole-classes/builtin-sv-functions.ts");

var SvFunctionType;
(function (SvFunctionType) {
    SvFunctionType[SvFunctionType["SV"] = 0] = "SV";
    SvFunctionType[SvFunctionType["BPM"] = 1] = "BPM";
    SvFunctionType[SvFunctionType["TimingPoint"] = 2] = "TimingPoint";
})(SvFunctionType || (SvFunctionType = {}));
var SvParameter = /** @class */ (function () {
    function SvParameter() {
        this.name = 'unnamed';
        this.description = '';
        this.defaultValue = '0';
    }
    return SvParameter;
}());

var SvFunction = /** @class */ (function () {
    function SvFunction(type) {
        this.parameters = [];
        this.type = type;
        if (type === SvFunctionType.SV) {
            this.body =
                "(() => {\n    // Put your inner state here\n    // State does not reset after each cycle.\n    // var persistent = 10;\n\n    // Return SV value given fraction 'x'\n    // User parameters are put into the params object and are converted to doubles when possible\n    // i.e. params[\"myParamName\"]\n    // See reference for more details about built-in parameters.\n    return (x, params) => {\n        return 1;\n    }\n})();";
        }
        else if (type === SvFunctionType.BPM) {
            this.body =
                "(() => {\n    // Put your inner state here\n    // State does not reset after each cycle.\n    // var persistent = 10;\n\n    // Return BPM value given fraction 'x'\n    // User parameters are put into the params object and are converted to doubles when possible\n    // i.e. params[\"myParamName\"]\n    // See reference for more details about built-in parameters.\n    return (x, params) => {\n        return 120;\n    }\n})();";
        }
        else if (type === SvFunctionType.TimingPoint) {
            this.body =
                "(() => {\n    // Put your inner state here\n    // var persistent = 10\n\n    // Return an array of timing points given an array of timing points 'tp'.\n    // User parameters are put into the params object and are converted to doubles when possible\n    // i.e. params[\"myParamName\"]\n    // See reference for more details about built-in parameters,\n    // as well as documentation of the properties of the objects contained in each index of 'tp'.\n    return (tp, params) => {\n      return tp;\n    };\n})();";
        }
        else {
            this.body = ''; // todo xoxo
        }
        this.name = SvFunction.defaultName;
        this.tooltip = '';
    }
    Object.defineProperty(SvFunction.prototype, "isExplicitEmission", {
        get: function () {
            // returns false if undefined, wink.
            return this.doNotSkipRepeatedValues || false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SvFunction.prototype, "isBpm", {
        get: function () {
            return this.type === SvFunctionType.BPM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SvFunction.prototype, "isSv", {
        get: function () {
            return this.type === SvFunctionType.SV;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SvFunction.prototype, "isTimingPointFunction", {
        get: function () {
            return this.type === SvFunctionType.TimingPoint;
        },
        enumerable: true,
        configurable: true
    });
    SvFunction.getCurrentParameters = function (it) {
        var ret = {};
        for (var _i = 0, _a = it.parameters; _i < _a.length; _i++) {
            var param = _a[_i];
            var preferred = param.currentValue || param.defaultValue;
            var val = parseFloat(preferred);
            ret[param.name] = isNaN(val) ? preferred : val;
        }
        return ret;
    };
    SvFunction.defaultName = 'unnamed';
    SvFunction.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return SvFunction;
}());

var SvFunctionCollection = /** @class */ (function () {
    function SvFunctionCollection() {
    }
    SvFunctionCollection.getCollection = function () {
        return JSON.parse(localStorage.getItem('svCollection')) || _builtin_sv_functions__WEBPACK_IMPORTED_MODULE_0__["builtinSv"] || {};
    };
    SvFunctionCollection.setCollection = function (obj) {
        return localStorage.setItem('svCollection', JSON.stringify(obj));
    };
    SvFunctionCollection.restoreBuiltins = function () {
        var col = this.getCollection();
        for (var key in _builtin_sv_functions__WEBPACK_IMPORTED_MODULE_0__["builtinSv"]) {
            if (!col[key]) {
                col[key] = _builtin_sv_functions__WEBPACK_IMPORTED_MODULE_0__["builtinSv"][key];
            }
        }
        this.setCollection(col);
    };
    return SvFunctionCollection;
}());



/***/ }),

/***/ "./src/app/compose-emitters/compose-emitters.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/compose-emitters/compose-emitters.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea {\r\n  min-height: 300px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9zZS1lbWl0dGVycy9jb21wb3NlLWVtaXR0ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb3NlLWVtaXR0ZXJzL2NvbXBvc2UtZW1pdHRlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRleHRhcmVhIHtcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/compose-emitters/compose-emitters.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/compose-emitters/compose-emitters.component.ts ***!
  \****************************************************************/
/*! exports provided: ComposeEmittersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComposeEmittersComponent", function() { return ComposeEmittersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _emitter_input_timeinput_timing_point_template_timing_point_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emitter-input/timeinput/timing-point-template/timing-point-template.component */ "./src/app/emitter-input/timeinput/timing-point-template/timing-point-template.component.ts");
/* harmony import */ var _emitter_parameter_trio_emitter_parameter_trio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emitter-parameter-trio/emitter-parameter-trio.component */ "./src/app/compose-emitters/emitter-parameter-trio/emitter-parameter-trio.component.ts");
/* harmony import */ var _blackhole_classes_osu_timing_point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blackhole-classes/osu-timing-point */ "./src/app/blackhole-classes/osu-timing-point.ts");





var ComposeEmittersComponent = /** @class */ (function () {
    function ComposeEmittersComponent(cfr) {
        this.cfr = cfr;
        this.factory = cfr.resolveComponentFactory(_emitter_parameter_trio_emitter_parameter_trio_component__WEBPACK_IMPORTED_MODULE_3__["EmitterParameterTrioComponent"]);
        this.emitters = [];
    }
    ComposeEmittersComponent.prototype.ngOnInit = function () {
    };
    ComposeEmittersComponent.prototype.addEmitter = function () {
        var el = this.container.createComponent(this.factory);
        this.emitters.push(el);
        el.instance.onRemove.subscribe(this.removeEmitter.bind(this));
    };
    ComposeEmittersComponent.prototype.removeEmitter = function (emitter) {
        // get componentref for emitter
        var ref = this.emitters.find(function (x) { return x.instance === emitter; });
        // remove from viewref
        var index = this.container.indexOf(ref.hostView);
        if (index !== -1) {
            this.container.remove(index);
        }
        // remove from internal tracking
        var emIndex = this.emitters.indexOf(ref);
        if (emIndex !== -1) {
            this.emitters.splice(emIndex, 1);
        }
    };
    ComposeEmittersComponent.prototype.emit = function () {
        var tp = this.tpTemplate.currentTimingPoint;
        var combined = this.emitters[0].instance.emit(tp);
        for (var i = 1; i < this.emitters.length; i++) {
            var group = this.emitters[i].instance.emit(tp);
            combined = Object(_blackhole_classes_osu_timing_point__WEBPACK_IMPORTED_MODULE_4__["composeTimingPoints"])(combined, group, tp);
        }
        this.output = combined.map(function (x) { return x.toString(); }).join('\n');
    };
    ComposeEmittersComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_emitter_input_timeinput_timing_point_template_timing_point_template_component__WEBPACK_IMPORTED_MODULE_2__["TimingPointTemplateComponent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _emitter_input_timeinput_timing_point_template_timing_point_template_component__WEBPACK_IMPORTED_MODULE_2__["TimingPointTemplateComponent"])
    ], ComposeEmittersComponent.prototype, "tpTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], ComposeEmittersComponent.prototype, "container", void 0);
    ComposeEmittersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-compose-emitters',
            template: __webpack_require__(/*! raw-loader!./compose-emitters.component.html */ "./node_modules/raw-loader/index.js!./src/app/compose-emitters/compose-emitters.component.html"),
            entryComponents: [_emitter_parameter_trio_emitter_parameter_trio_component__WEBPACK_IMPORTED_MODULE_3__["EmitterParameterTrioComponent"]],
            styles: [__webpack_require__(/*! ./compose-emitters.component.css */ "./src/app/compose-emitters/compose-emitters.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
    ], ComposeEmittersComponent);
    return ComposeEmittersComponent;
}());



/***/ }),

/***/ "./src/app/compose-emitters/emitter-parameter-trio/emitter-parameter-trio.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/compose-emitters/emitter-parameter-trio/emitter-parameter-trio.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvc2UtZW1pdHRlcnMvZW1pdHRlci1wYXJhbWV0ZXItdHJpby9lbWl0dGVyLXBhcmFtZXRlci10cmlvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/compose-emitters/emitter-parameter-trio/emitter-parameter-trio.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/compose-emitters/emitter-parameter-trio/emitter-parameter-trio.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EmitterParameterTrioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmitterParameterTrioComponent", function() { return EmitterParameterTrioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _emitter_input_timeinput_timeinput_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../emitter-input/timeinput/timeinput.component */ "./src/app/emitter-input/timeinput/timeinput.component.ts");
/* harmony import */ var _emitter_input_divisorinput_divisor_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../emitter-input/divisorinput/divisor-input.component */ "./src/app/emitter-input/divisorinput/divisor-input.component.ts");
/* harmony import */ var _emitter_input_select_emitter_function_select_emitter_function_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../emitter-input/select-emitter-function/select-emitter-function.component */ "./src/app/emitter-input/select-emitter-function/select-emitter-function.component.ts");
/* harmony import */ var _blackhole_classes_osu_timing_point_emitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blackhole-classes/osu-timing-point-emitter */ "./src/app/blackhole-classes/osu-timing-point-emitter.ts");






var EmitterParameterTrioComponent = /** @class */ (function () {
    function EmitterParameterTrioComponent() {
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(EmitterParameterTrioComponent.prototype, "functitle", {
        get: function () {
            if (this.funcInput.currentFunction) {
                return this.funcInput.currentFunction.name;
            }
            else {
                if (this.funcInput.useFixedBpm) {
                    return 'bpm: ' + this.funcInput.bpm;
                }
            }
            return 'unknown';
        },
        enumerable: true,
        configurable: true
    });
    EmitterParameterTrioComponent.prototype.removeSelf = function () {
        this.onRemove.emit(this);
    };
    EmitterParameterTrioComponent.prototype.emit = function (template) {
        var ti = this.timeInput.currentTimeInput;
        var di = this.divisorInput.currentDivisorInput;
        var fp = this.funcInput;
        var func = fp.useFixedBpm ? null : fp.currentFunction;
        return Object(_blackhole_classes_osu_timing_point_emitter__WEBPACK_IMPORTED_MODULE_5__["emitTargets"])(ti, di, func, fp.currentTimeFunction, template, fp.bpm, this.divisorInput.endDivisorMode);
    };
    EmitterParameterTrioComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_emitter_input_timeinput_timeinput_component__WEBPACK_IMPORTED_MODULE_2__["TimeinputComponent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _emitter_input_timeinput_timeinput_component__WEBPACK_IMPORTED_MODULE_2__["TimeinputComponent"])
    ], EmitterParameterTrioComponent.prototype, "timeInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_emitter_input_divisorinput_divisor_input_component__WEBPACK_IMPORTED_MODULE_3__["DivisorInputComponent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _emitter_input_divisorinput_divisor_input_component__WEBPACK_IMPORTED_MODULE_3__["DivisorInputComponent"])
    ], EmitterParameterTrioComponent.prototype, "divisorInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_emitter_input_select_emitter_function_select_emitter_function_component__WEBPACK_IMPORTED_MODULE_4__["SelectEmitterFunctionComponent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _emitter_input_select_emitter_function_select_emitter_function_component__WEBPACK_IMPORTED_MODULE_4__["SelectEmitterFunctionComponent"])
    ], EmitterParameterTrioComponent.prototype, "funcInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmitterParameterTrioComponent.prototype, "onRemove", void 0);
    EmitterParameterTrioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-emitter-parameter-trio',
            template: __webpack_require__(/*! raw-loader!./emitter-parameter-trio.component.html */ "./node_modules/raw-loader/index.js!./src/app/compose-emitters/emitter-parameter-trio/emitter-parameter-trio.component.html"),
            styles: [__webpack_require__(/*! ./emitter-parameter-trio.component.css */ "./src/app/compose-emitters/emitter-parameter-trio/emitter-parameter-trio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmitterParameterTrioComponent);
    return EmitterParameterTrioComponent;
}());



/***/ }),

/***/ "./src/app/compose-timing-points/compose-timing-points.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/compose-timing-points/compose-timing-points.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvc2UtdGltaW5nLXBvaW50cy9jb21wb3NlLXRpbWluZy1wb2ludHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/compose-timing-points/compose-timing-points.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/compose-timing-points/compose-timing-points.component.ts ***!
  \**************************************************************************/
/*! exports provided: ComposeTimingPointsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComposeTimingPointsComponent", function() { return ComposeTimingPointsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blackhole_classes_osu_timing_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blackhole-classes/osu-timing-point */ "./src/app/blackhole-classes/osu-timing-point.ts");



var ComposeTimingPointsComponent = /** @class */ (function () {
    function ComposeTimingPointsComponent() {
        this.set1lines = '';
        this.set2lines = '';
        this.output = '';
    }
    ComposeTimingPointsComponent.prototype.ngOnInit = function () {
    };
    ComposeTimingPointsComponent.prototype.compose = function () {
        var set1 = this.set1lines.split('\n').map(function (x) { return _blackhole_classes_osu_timing_point__WEBPACK_IMPORTED_MODULE_2__["OsuTimingPoint"].fromString(x); });
        var set2 = this.set2lines.split('\n').map(function (x) { return _blackhole_classes_osu_timing_point__WEBPACK_IMPORTED_MODULE_2__["OsuTimingPoint"].fromString(x); });
        var composedOutput = Object(_blackhole_classes_osu_timing_point__WEBPACK_IMPORTED_MODULE_2__["composeTimingPoints"])(set1, set2, set1[0]);
        this.output = composedOutput.map(function (x) { return x.toString(); }).join('\n');
    };
    ComposeTimingPointsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-compose-timing-points',
            template: __webpack_require__(/*! raw-loader!./compose-timing-points.component.html */ "./node_modules/raw-loader/index.js!./src/app/compose-timing-points/compose-timing-points.component.html"),
            styles: [__webpack_require__(/*! ./compose-timing-points.component.css */ "./src/app/compose-timing-points/compose-timing-points.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ComposeTimingPointsComponent);
    return ComposeTimingPointsComponent;
}());



/***/ }),

/***/ "./src/app/emission-control/emission-control.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/emission-control/emission-control.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea {\r\n    min-height: 300px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1pc3Npb24tY29udHJvbC9lbWlzc2lvbi1jb250cm9sLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9lbWlzc2lvbi1jb250cm9sL2VtaXNzaW9uLWNvbnRyb2wuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRleHRhcmVhIHtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/emission-control/emission-control.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/emission-control/emission-control.component.ts ***!
  \****************************************************************/
/*! exports provided: EmissionControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmissionControlComponent", function() { return EmissionControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _emitter_input_timeinput_timeinput_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emitter-input/timeinput/timeinput.component */ "./src/app/emitter-input/timeinput/timeinput.component.ts");
/* harmony import */ var _emitter_input_divisorinput_divisor_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../emitter-input/divisorinput/divisor-input.component */ "./src/app/emitter-input/divisorinput/divisor-input.component.ts");
/* harmony import */ var _emitter_input_timeinput_timing_point_template_timing_point_template_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../emitter-input/timeinput/timing-point-template/timing-point-template.component */ "./src/app/emitter-input/timeinput/timing-point-template/timing-point-template.component.ts");
/* harmony import */ var _blackhole_classes_osu_timing_point_emitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blackhole-classes/osu-timing-point-emitter */ "./src/app/blackhole-classes/osu-timing-point-emitter.ts");
/* harmony import */ var _emitter_input_select_emitter_function_select_emitter_function_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../emitter-input/select-emitter-function/select-emitter-function.component */ "./src/app/emitter-input/select-emitter-function/select-emitter-function.component.ts");







var EmissionControlComponent = /** @class */ (function () {
    function EmissionControlComponent() {
        this.error = null;
        this.output = '';
        // this.output = "hello world";
    }
    EmissionControlComponent.prototype.emit = function () {
        var timeInput = this.timeInput.currentTimeInput;
        var divInput = this.divisorInput.currentDivisorInput;
        var timingDefault = this.timingPointTemplate.currentTimingPoint;
        // console.log(timeInput);
        // console.log(divInput);
        // console.log(timingDefault);
        try {
            var result = Object(_blackhole_classes_osu_timing_point_emitter__WEBPACK_IMPORTED_MODULE_5__["emitTargets"])(timeInput, divInput, 
            /*
            todo: wrap this extra funcParams data into
            its own type that doesn't depend on the component
            */
            this.funcParams.useFixedBpm ? null : this.funcParams.currentFunction, this.funcParams.currentTimeFunction, timingDefault, this.funcParams.bpm, this.divisorInput.endDivisorMode).map(function (x) { return x.toString(); });
            this.output = result.join('\n');
            this.error = null;
        }
        catch (err) {
            console.log(err);
            this.error = err;
        }
    };
    /*get currentDivisors() {
      const di = this.divisorInput.currentDivisorInput;
      const ti = this.timeInput.currentTimeInput;
      const arr = new Set();
      for (let i = 0; i < ti.cycleCount; i++) {
        arr.add(Math.floor(di.getSpanDivisorCount(ti.getDuration(i))));
      }
  
      return Array.from(arr).join(', ');
    }
  */
    EmissionControlComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_emitter_input_timeinput_timeinput_component__WEBPACK_IMPORTED_MODULE_2__["TimeinputComponent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _emitter_input_timeinput_timeinput_component__WEBPACK_IMPORTED_MODULE_2__["TimeinputComponent"])
    ], EmissionControlComponent.prototype, "timeInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_emitter_input_divisorinput_divisor_input_component__WEBPACK_IMPORTED_MODULE_3__["DivisorInputComponent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _emitter_input_divisorinput_divisor_input_component__WEBPACK_IMPORTED_MODULE_3__["DivisorInputComponent"])
    ], EmissionControlComponent.prototype, "divisorInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_emitter_input_timeinput_timing_point_template_timing_point_template_component__WEBPACK_IMPORTED_MODULE_4__["TimingPointTemplateComponent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _emitter_input_timeinput_timing_point_template_timing_point_template_component__WEBPACK_IMPORTED_MODULE_4__["TimingPointTemplateComponent"])
    ], EmissionControlComponent.prototype, "timingPointTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_emitter_input_select_emitter_function_select_emitter_function_component__WEBPACK_IMPORTED_MODULE_6__["SelectEmitterFunctionComponent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _emitter_input_select_emitter_function_select_emitter_function_component__WEBPACK_IMPORTED_MODULE_6__["SelectEmitterFunctionComponent"])
    ], EmissionControlComponent.prototype, "funcParams", void 0);
    EmissionControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-emission-control',
            template: __webpack_require__(/*! raw-loader!./emission-control.component.html */ "./node_modules/raw-loader/index.js!./src/app/emission-control/emission-control.component.html"),
            styles: [__webpack_require__(/*! ./emission-control.component.css */ "./src/app/emission-control/emission-control.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmissionControlComponent);
    return EmissionControlComponent;
}());



/***/ }),

/***/ "./src/app/emitter-input/divisorinput/divisor-input.component.css":
/*!************************************************************************!*\
  !*** ./src/app/emitter-input/divisorinput/divisor-input.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtaXR0ZXItaW5wdXQvZGl2aXNvcmlucHV0L2Rpdmlzb3ItaW5wdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/emitter-input/divisorinput/divisor-input.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/emitter-input/divisorinput/divisor-input.component.ts ***!
  \***********************************************************************/
/*! exports provided: DivisorInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisorInputComponent", function() { return DivisorInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blackhole_classes_divisor_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blackhole-classes/divisor-emitter */ "./src/app/blackhole-classes/divisor-emitter.ts");



var DivisorInputComponent = /** @class */ (function () {
    function DivisorInputComponent() {
        this.DivisorInputType = _blackhole_classes_divisor_emitter__WEBPACK_IMPORTED_MODULE_2__["DivisorInputType"];
        this.EndPointMode = _blackhole_classes_divisor_emitter__WEBPACK_IMPORTED_MODULE_2__["EndPointMode"];
        this.type = _blackhole_classes_divisor_emitter__WEBPACK_IMPORTED_MODULE_2__["DivisorInputType"].Fixed;
        this.endDivisorMode = _blackhole_classes_divisor_emitter__WEBPACK_IMPORTED_MODULE_2__["EndPointMode"].NoEndPoint;
        this.onTypeChange();
    }
    DivisorInputComponent.prototype.onTypeChange = function () {
        if (this.type === _blackhole_classes_divisor_emitter__WEBPACK_IMPORTED_MODULE_2__["DivisorInputType"].Fixed) {
            this.currentDivisorInput = new _blackhole_classes_divisor_emitter__WEBPACK_IMPORTED_MODULE_2__["DivisorEmitterByCount"]();
        }
        if (this.type === _blackhole_classes_divisor_emitter__WEBPACK_IMPORTED_MODULE_2__["DivisorInputType"].BPM) {
            this.currentDivisorInput = new _blackhole_classes_divisor_emitter__WEBPACK_IMPORTED_MODULE_2__["DivisorEmitterBeatFraction"]();
        }
        if (this.type === _blackhole_classes_divisor_emitter__WEBPACK_IMPORTED_MODULE_2__["DivisorInputType"].Span) {
            this.currentDivisorInput = new _blackhole_classes_divisor_emitter__WEBPACK_IMPORTED_MODULE_2__["DivisorEmitterTimeSpan"]();
        }
    };
    DivisorInputComponent.prototype.ngOnInit = function () {
    };
    DivisorInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-divisorinput',
            template: __webpack_require__(/*! raw-loader!./divisor-input.component.html */ "./node_modules/raw-loader/index.js!./src/app/emitter-input/divisorinput/divisor-input.component.html"),
            styles: [__webpack_require__(/*! ./divisor-input.component.css */ "./src/app/emitter-input/divisorinput/divisor-input.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DivisorInputComponent);
    return DivisorInputComponent;
}());



/***/ }),

/***/ "./src/app/emitter-input/select-emitter-function/emission-function-parameters-assignment/emission-function-parameters-assignment.component.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/emitter-input/select-emitter-function/emission-function-parameters-assignment/emission-function-parameters-assignment.component.css ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtaXR0ZXItaW5wdXQvc2VsZWN0LWVtaXR0ZXItZnVuY3Rpb24vZW1pc3Npb24tZnVuY3Rpb24tcGFyYW1ldGVycy1hc3NpZ25tZW50L2VtaXNzaW9uLWZ1bmN0aW9uLXBhcmFtZXRlcnMtYXNzaWdubWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/emitter-input/select-emitter-function/emission-function-parameters-assignment/emission-function-parameters-assignment.component.ts":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/emitter-input/select-emitter-function/emission-function-parameters-assignment/emission-function-parameters-assignment.component.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: EmissionFunctionParametersAssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmissionFunctionParametersAssignmentComponent", function() { return EmissionFunctionParametersAssignmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var EmissionFunctionParametersAssignmentComponent = /** @class */ (function () {
    function EmissionFunctionParametersAssignmentComponent(data) {
        this.data = data;
        // console.log(data.target);
        this.target = data.target;
        for (var i = 0; i < this.target.parameters.length; i++) {
            if (!this.target.parameters[i].currentValue) {
                var val = parseFloat(this.target.parameters[i].defaultValue) ||
                    this.target.parameters[i].defaultValue;
                this.target.parameters[i].currentValue = val;
            }
        }
    }
    EmissionFunctionParametersAssignmentComponent.prototype.ngOnInit = function () {
    };
    EmissionFunctionParametersAssignmentComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    EmissionFunctionParametersAssignmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-emission-function-parameters-assignment',
            template: __webpack_require__(/*! raw-loader!./emission-function-parameters-assignment.component.html */ "./node_modules/raw-loader/index.js!./src/app/emitter-input/select-emitter-function/emission-function-parameters-assignment/emission-function-parameters-assignment.component.html"),
            styles: [__webpack_require__(/*! ./emission-function-parameters-assignment.component.css */ "./src/app/emitter-input/select-emitter-function/emission-function-parameters-assignment/emission-function-parameters-assignment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], EmissionFunctionParametersAssignmentComponent);
    return EmissionFunctionParametersAssignmentComponent;
}());



/***/ }),

/***/ "./src/app/emitter-input/select-emitter-function/select-emission-function-dialog/select-emission-function-dialog.component.css":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/emitter-input/select-emitter-function/select-emission-function-dialog/select-emission-function-dialog.component.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtaXR0ZXItaW5wdXQvc2VsZWN0LWVtaXR0ZXItZnVuY3Rpb24vc2VsZWN0LWVtaXNzaW9uLWZ1bmN0aW9uLWRpYWxvZy9zZWxlY3QtZW1pc3Npb24tZnVuY3Rpb24tZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/emitter-input/select-emitter-function/select-emission-function-dialog/select-emission-function-dialog.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/emitter-input/select-emitter-function/select-emission-function-dialog/select-emission-function-dialog.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: SelectEmissionFunctionDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectEmissionFunctionDialogComponent", function() { return SelectEmissionFunctionDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blackhole-classes/sv-functions */ "./src/app/blackhole-classes/sv-functions.ts");




/*
Refresher: this is the dropdown that is in select-emitter-function.
Should be used only internally, in select-emitter-function.
*/
var SelectEmissionFunctionDialogComponent = /** @class */ (function () {
    function SelectEmissionFunctionDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.SvFunctionType = _blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_3__["SvFunctionType"];
        this.collection = [];
        // console.log(this.SvFunctionType);
        var typeSet = new Set(data.allowedFunctionTypes);
        // console.log(typeSet);
        var funcCollection = _blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_3__["SvFunctionCollection"].getCollection();
        // console.log(funcCollection);
        for (var key in funcCollection) {
            var func = funcCollection[key];
            var isSvFunction = func.type === undefined || func.type === _blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_3__["SvFunctionType"].SV;
            // console.log(func);
            // console.log(isSvFunction);
            // only allowed functions are displayed in this dialog
            if ((isSvFunction && typeSet.has(_blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_3__["SvFunctionType"].SV) ||
                typeSet.has(func.type))) {
                this.collection.push(func);
            }
        }
    }
    SelectEmissionFunctionDialogComponent.prototype.ngOnInit = function () {
    };
    SelectEmissionFunctionDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    SelectEmissionFunctionDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-emission-function-dialog',
            template: __webpack_require__(/*! raw-loader!./select-emission-function-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/emitter-input/select-emitter-function/select-emission-function-dialog/select-emission-function-dialog.component.html"),
            styles: [__webpack_require__(/*! ./select-emission-function-dialog.component.css */ "./src/app/emitter-input/select-emitter-function/select-emission-function-dialog/select-emission-function-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], SelectEmissionFunctionDialogComponent);
    return SelectEmissionFunctionDialogComponent;
}());



/***/ }),

/***/ "./src/app/emitter-input/select-emitter-function/select-emitter-function.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/emitter-input/select-emitter-function/select-emitter-function.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtaXR0ZXItaW5wdXQvc2VsZWN0LWVtaXR0ZXItZnVuY3Rpb24vc2VsZWN0LWVtaXR0ZXItZnVuY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/emitter-input/select-emitter-function/select-emitter-function.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/emitter-input/select-emitter-function/select-emitter-function.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SelectEmitterFunctionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectEmitterFunctionComponent", function() { return SelectEmitterFunctionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blackhole-classes/sv-functions */ "./src/app/blackhole-classes/sv-functions.ts");
/* harmony import */ var _select_emission_function_dialog_select_emission_function_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-emission-function-dialog/select-emission-function-dialog.component */ "./src/app/emitter-input/select-emitter-function/select-emission-function-dialog/select-emission-function-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _emission_function_parameters_assignment_emission_function_parameters_assignment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emission-function-parameters-assignment/emission-function-parameters-assignment.component */ "./src/app/emitter-input/select-emitter-function/emission-function-parameters-assignment/emission-function-parameters-assignment.component.ts");






/* This is the actual function, time function and parameter setting component that's reusable. */
var SelectEmitterFunctionComponent = /** @class */ (function () {
    function SelectEmitterFunctionComponent(dialog) {
        this.dialog = dialog;
    }
    SelectEmitterFunctionComponent.prototype.ngOnInit = function () {
        this.bpm = 120;
    };
    SelectEmitterFunctionComponent.prototype.selectFunction = function (isForTimeDeformation) {
        var _this = this;
        if (isForTimeDeformation) {
            var funcDialog = this.dialog.open(_select_emission_function_dialog_select_emission_function_dialog_component__WEBPACK_IMPORTED_MODULE_3__["SelectEmissionFunctionDialogComponent"], {
                data: {
                    allowedFunctionTypes: [_blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunctionType"].SV]
                }
            });
            funcDialog.afterClosed().subscribe(function (x) {
                _this.currentTimeFunction = x;
            });
        }
        else {
            var funcDialog = this.dialog.open(_select_emission_function_dialog_select_emission_function_dialog_component__WEBPACK_IMPORTED_MODULE_3__["SelectEmissionFunctionDialogComponent"], {
                data: {
                    allowedFunctionTypes: [_blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunctionType"].SV, _blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunctionType"].BPM]
                }
            });
            funcDialog.afterClosed().subscribe(function (x) {
                _this.currentFunction = x;
            });
        }
    };
    SelectEmitterFunctionComponent.prototype.setParameters = function (isForTimeDeformation) {
        if (isForTimeDeformation) {
            this.dialog.open(_emission_function_parameters_assignment_emission_function_parameters_assignment_component__WEBPACK_IMPORTED_MODULE_5__["EmissionFunctionParametersAssignmentComponent"], {
                height: '400px',
                width: '800px',
                data: {
                    target: this.currentTimeFunction
                }
            });
        }
        else {
            this.dialog.open(_emission_function_parameters_assignment_emission_function_parameters_assignment_component__WEBPACK_IMPORTED_MODULE_5__["EmissionFunctionParametersAssignmentComponent"], {
                height: '400px',
                width: '800px',
                data: {
                    target: this.currentFunction
                }
            });
        }
    };
    SelectEmitterFunctionComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    SelectEmitterFunctionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-emitter-function',
            template: __webpack_require__(/*! raw-loader!./select-emitter-function.component.html */ "./node_modules/raw-loader/index.js!./src/app/emitter-input/select-emitter-function/select-emitter-function.component.html"),
            styles: [__webpack_require__(/*! ./select-emitter-function.component.css */ "./src/app/emitter-input/select-emitter-function/select-emitter-function.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], SelectEmitterFunctionComponent);
    return SelectEmitterFunctionComponent;
}());



/***/ }),

/***/ "./src/app/emitter-input/timeinput/timeinput-beatfraction/timeinput-beatfraction.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/emitter-input/timeinput/timeinput-beatfraction/timeinput-beatfraction.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtaXR0ZXItaW5wdXQvdGltZWlucHV0L3RpbWVpbnB1dC1iZWF0ZnJhY3Rpb24vdGltZWlucHV0LWJlYXRmcmFjdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/emitter-input/timeinput/timeinput-beatfraction/timeinput-beatfraction.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/emitter-input/timeinput/timeinput-beatfraction/timeinput-beatfraction.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: TimeinputBeatfractionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeinputBeatfractionComponent", function() { return TimeinputBeatfractionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blackhole-classes/cycle-time-emitter */ "./src/app/blackhole-classes/cycle-time-emitter.ts");



var TimeinputBeatfractionComponent = /** @class */ (function () {
    function TimeinputBeatfractionComponent() {
    }
    TimeinputBeatfractionComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeBeatFraction"])
    ], TimeinputBeatfractionComponent.prototype, "currentTimeInput", void 0);
    TimeinputBeatfractionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeinput-beatfraction',
            template: __webpack_require__(/*! raw-loader!./timeinput-beatfraction.component.html */ "./node_modules/raw-loader/index.js!./src/app/emitter-input/timeinput/timeinput-beatfraction/timeinput-beatfraction.component.html"),
            styles: [__webpack_require__(/*! ./timeinput-beatfraction.component.css */ "./src/app/emitter-input/timeinput/timeinput-beatfraction/timeinput-beatfraction.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimeinputBeatfractionComponent);
    return TimeinputBeatfractionComponent;
}());



/***/ }),

/***/ "./src/app/emitter-input/timeinput/timeinput-beats/timeinput-beats.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/emitter-input/timeinput/timeinput-beats/timeinput-beats.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtaXR0ZXItaW5wdXQvdGltZWlucHV0L3RpbWVpbnB1dC1iZWF0cy90aW1laW5wdXQtYmVhdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/emitter-input/timeinput/timeinput-beats/timeinput-beats.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/emitter-input/timeinput/timeinput-beats/timeinput-beats.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TimeinputBeatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeinputBeatsComponent", function() { return TimeinputBeatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blackhole-classes/cycle-time-emitter */ "./src/app/blackhole-classes/cycle-time-emitter.ts");



var TimeinputBeatsComponent = /** @class */ (function () {
    function TimeinputBeatsComponent() {
    }
    TimeinputBeatsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeBeats"])
    ], TimeinputBeatsComponent.prototype, "currentTimeInput", void 0);
    TimeinputBeatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeinput-beats',
            template: __webpack_require__(/*! raw-loader!./timeinput-beats.component.html */ "./node_modules/raw-loader/index.js!./src/app/emitter-input/timeinput/timeinput-beats/timeinput-beats.component.html"),
            styles: [__webpack_require__(/*! ./timeinput-beats.component.css */ "./src/app/emitter-input/timeinput/timeinput-beats/timeinput-beats.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimeinputBeatsComponent);
    return TimeinputBeatsComponent;
}());



/***/ }),

/***/ "./src/app/emitter-input/timeinput/timeinput-duration/timeinput-duration.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/emitter-input/timeinput/timeinput-duration/timeinput-duration.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtaXR0ZXItaW5wdXQvdGltZWlucHV0L3RpbWVpbnB1dC1kdXJhdGlvbi90aW1laW5wdXQtZHVyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/emitter-input/timeinput/timeinput-duration/timeinput-duration.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/emitter-input/timeinput/timeinput-duration/timeinput-duration.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TimeinputDurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeinputDurationComponent", function() { return TimeinputDurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blackhole-classes/cycle-time-emitter */ "./src/app/blackhole-classes/cycle-time-emitter.ts");



var TimeinputDurationComponent = /** @class */ (function () {
    function TimeinputDurationComponent() {
    }
    TimeinputDurationComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeMsDuration"])
    ], TimeinputDurationComponent.prototype, "currentTimeInput", void 0);
    TimeinputDurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeinput-duration',
            template: __webpack_require__(/*! raw-loader!./timeinput-duration.component.html */ "./node_modules/raw-loader/index.js!./src/app/emitter-input/timeinput/timeinput-duration/timeinput-duration.component.html"),
            styles: [__webpack_require__(/*! ./timeinput-duration.component.css */ "./src/app/emitter-input/timeinput/timeinput-duration/timeinput-duration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimeinputDurationComponent);
    return TimeinputDurationComponent;
}());



/***/ }),

/***/ "./src/app/emitter-input/timeinput/timeinput-notetimes/timeinput-notetimes.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/emitter-input/timeinput/timeinput-notetimes/timeinput-notetimes.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtaXR0ZXItaW5wdXQvdGltZWlucHV0L3RpbWVpbnB1dC1ub3RldGltZXMvdGltZWlucHV0LW5vdGV0aW1lcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/emitter-input/timeinput/timeinput-notetimes/timeinput-notetimes.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/emitter-input/timeinput/timeinput-notetimes/timeinput-notetimes.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: TimeinputNotetimesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeinputNotetimesComponent", function() { return TimeinputNotetimesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blackhole-classes/cycle-time-emitter */ "./src/app/blackhole-classes/cycle-time-emitter.ts");



var TimeinputNotetimesComponent = /** @class */ (function () {
    function TimeinputNotetimesComponent() {
        this.TimeInputType = _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleEmissionType"];
        this.TimeInputNotetimeFixedDuration = _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeNotetimeFixedDuration"];
    }
    Object.defineProperty(TimeinputNotetimesComponent.prototype, "innerTimeType", {
        get: function () {
            return this._innerTimeType;
        },
        set: function (type) {
            var _this = this;
            if (!this.currentTimeInput)
                return;
            this._innerTimeType = type;
            if (type == _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleEmissionType"].Span) {
                var timeInput = new _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeMsDuration"]();
                this.innerTimeInput = new Proxy(timeInput, {
                    set: function (obj, prop, value) {
                        obj[prop] = value;
                        if (prop == "duration") {
                            if (_this.isFixedDuration) {
                                var tiObj = _this.currentTimeInput;
                                tiObj.duration = obj.getDuration(0);
                            }
                        }
                        return true;
                    }
                });
            }
            if (type == _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleEmissionType"].Beats) {
                var timeInput = new _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeBeats"]();
                this.innerTimeInput = new Proxy(timeInput, {
                    set: function (obj, prop, value) {
                        obj[prop] = value;
                        if (prop == "bpm" || prop == "beats") {
                            if (_this.isFixedDuration)
                                _this.currentTimeInput
                                    .duration = obj.getDuration(0);
                        }
                        return true;
                    }
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeinputNotetimesComponent.prototype, "isFixedDuration", {
        get: function () {
            return this.currentTimeInput instanceof _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeNotetimeFixedDuration"];
        },
        enumerable: true,
        configurable: true
    });
    TimeinputNotetimesComponent.prototype.ngOnInit = function () {
        this.innerTimeType = _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleEmissionType"].Span;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeNotetime"])
    ], TimeinputNotetimesComponent.prototype, "currentTimeInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeEmitter"])
    ], TimeinputNotetimesComponent.prototype, "innerTimeInput", void 0);
    TimeinputNotetimesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeinput-notetimes',
            template: __webpack_require__(/*! raw-loader!./timeinput-notetimes.component.html */ "./node_modules/raw-loader/index.js!./src/app/emitter-input/timeinput/timeinput-notetimes/timeinput-notetimes.component.html"),
            styles: [__webpack_require__(/*! ./timeinput-notetimes.component.css */ "./src/app/emitter-input/timeinput/timeinput-notetimes/timeinput-notetimes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimeinputNotetimesComponent);
    return TimeinputNotetimesComponent;
}());



/***/ }),

/***/ "./src/app/emitter-input/timeinput/timeinput-startend/timeinput-startend.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/emitter-input/timeinput/timeinput-startend/timeinput-startend.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtaXR0ZXItaW5wdXQvdGltZWlucHV0L3RpbWVpbnB1dC1zdGFydGVuZC90aW1laW5wdXQtc3RhcnRlbmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/emitter-input/timeinput/timeinput-startend/timeinput-startend.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/emitter-input/timeinput/timeinput-startend/timeinput-startend.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TimeinputStartendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeinputStartendComponent", function() { return TimeinputStartendComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blackhole-classes/cycle-time-emitter */ "./src/app/blackhole-classes/cycle-time-emitter.ts");
/* harmony import */ var _blackhole_classes_osu_timestamp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blackhole-classes/osu-timestamp */ "./src/app/blackhole-classes/osu-timestamp.ts");




var TimeinputStartendComponent = /** @class */ (function () {
    function TimeinputStartendComponent() {
    }
    TimeinputStartendComponent.prototype.validateTimestamp = function (event) {
        var value = event.target.value;
        var validatedValue = Object(_blackhole_classes_osu_timestamp__WEBPACK_IMPORTED_MODULE_3__["validateTimestamp"])(value);
        if (!isNaN(validatedValue))
            this.currentTimeInput.endTime = validatedValue;
    };
    TimeinputStartendComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeDeltatime"])
    ], TimeinputStartendComponent.prototype, "currentTimeInput", void 0);
    TimeinputStartendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeinput-startend',
            template: __webpack_require__(/*! raw-loader!./timeinput-startend.component.html */ "./node_modules/raw-loader/index.js!./src/app/emitter-input/timeinput/timeinput-startend/timeinput-startend.component.html"),
            styles: [__webpack_require__(/*! ./timeinput-startend.component.css */ "./src/app/emitter-input/timeinput/timeinput-startend/timeinput-startend.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimeinputStartendComponent);
    return TimeinputStartendComponent;
}());



/***/ }),

/***/ "./src/app/emitter-input/timeinput/timeinput.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/emitter-input/timeinput/timeinput.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtaXR0ZXItaW5wdXQvdGltZWlucHV0L3RpbWVpbnB1dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/emitter-input/timeinput/timeinput.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/emitter-input/timeinput/timeinput.component.ts ***!
  \****************************************************************/
/*! exports provided: TimeinputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeinputComponent", function() { return TimeinputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blackhole-classes/cycle-time-emitter */ "./src/app/blackhole-classes/cycle-time-emitter.ts");
/* harmony import */ var _blackhole_classes_osu_timestamp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blackhole-classes/osu-timestamp */ "./src/app/blackhole-classes/osu-timestamp.ts");




var TimeinputComponent = /** @class */ (function () {
    function TimeinputComponent() {
        this.TimeInputType = _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleEmissionType"];
        this.timeInputs = {
            0: new _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeMsDuration"](),
            1: new _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeDeltatime"](),
            2: new _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeBeats"](),
            3: new _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeBeatFraction"](),
            4: new _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeNotetimeFixedDuration"](),
            5: new _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeNoteToNote"]()
        };
        this.timeType = _blackhole_classes_cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleEmissionType"].Span;
        this.currentTimeInput = this.timeInputs[this.timeType];
    }
    TimeinputComponent.prototype.validateTimestamp = function (event) {
        var value = event.target.value;
        var validatedValue = Object(_blackhole_classes_osu_timestamp__WEBPACK_IMPORTED_MODULE_3__["validateTimestamp"])(value);
        if (!isNaN(validatedValue)) {
            this.currentTimeInput.startTime = validatedValue;
        }
    };
    Object.defineProperty(TimeinputComponent.prototype, "newType", {
        get: function () {
            return this.timeType;
        },
        set: function (type) {
            this.timeType = type;
            this.currentTimeInput = this.timeInputs[this.timeType];
        },
        enumerable: true,
        configurable: true
    });
    TimeinputComponent.prototype.ngOnInit = function () {
        this.currentTimeInput = this.timeInputs[this.timeType];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TimeinputComponent.prototype, "timeType", void 0);
    TimeinputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeinput',
            template: __webpack_require__(/*! raw-loader!./timeinput.component.html */ "./node_modules/raw-loader/index.js!./src/app/emitter-input/timeinput/timeinput.component.html"),
            styles: [__webpack_require__(/*! ./timeinput.component.css */ "./src/app/emitter-input/timeinput/timeinput.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimeinputComponent);
    return TimeinputComponent;
}());



/***/ }),

/***/ "./src/app/emitter-input/timeinput/timing-point-template/timing-point-template.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/emitter-input/timeinput/timing-point-template/timing-point-template.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtaXR0ZXItaW5wdXQvdGltZWlucHV0L3RpbWluZy1wb2ludC10ZW1wbGF0ZS90aW1pbmctcG9pbnQtdGVtcGxhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/emitter-input/timeinput/timing-point-template/timing-point-template.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/emitter-input/timeinput/timing-point-template/timing-point-template.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: TimingPointTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimingPointTemplateComponent", function() { return TimingPointTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blackhole_classes_osu_timing_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blackhole-classes/osu-timing-point */ "./src/app/blackhole-classes/osu-timing-point.ts");

///<reference path="../../../blackhole-classes/osu-timing-point.ts"/>


var TimingPointTemplateComponent = /** @class */ (function () {
    function TimingPointTemplateComponent() {
        this.SampleSet = _blackhole_classes_osu_timing_point__WEBPACK_IMPORTED_MODULE_2__["SampleSet"];
        this.currentTimingPoint = new _blackhole_classes_osu_timing_point__WEBPACK_IMPORTED_MODULE_2__["OsuTimingPoint"]();
    }
    TimingPointTemplateComponent.prototype.ngOnInit = function () {
    };
    TimingPointTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timing-point-template',
            template: __webpack_require__(/*! raw-loader!./timing-point-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/emitter-input/timeinput/timing-point-template/timing-point-template.component.html"),
            styles: [__webpack_require__(/*! ./timing-point-template.component.css */ "./src/app/emitter-input/timeinput/timing-point-template/timing-point-template.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimingPointTemplateComponent);
    return TimingPointTemplateComponent;
}());



/***/ }),

/***/ "./src/app/function-editor/delete-function-dialog/delete-function-dialog.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/function-editor/delete-function-dialog/delete-function-dialog.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1bmN0aW9uLWVkaXRvci9kZWxldGUtZnVuY3Rpb24tZGlhbG9nL2RlbGV0ZS1mdW5jdGlvbi1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/function-editor/delete-function-dialog/delete-function-dialog.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/function-editor/delete-function-dialog/delete-function-dialog.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DeleteFunctionDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFunctionDialogComponent", function() { return DeleteFunctionDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blackhole-classes/sv-functions */ "./src/app/blackhole-classes/sv-functions.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var DeleteFunctionDialogComponent = /** @class */ (function () {
    function DeleteFunctionDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.collection = [];
        var funcCollection = _blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunctionCollection"].getCollection();
        for (var func in funcCollection) {
            this.collection.push(funcCollection[func]);
        }
    }
    DeleteFunctionDialogComponent.prototype.removeFunc = function (func) {
        for (var i = 0; i < this.collection.length; i++) {
            if (this.collection[i] === func)
                this.collection.splice(i, 1);
        }
    };
    DeleteFunctionDialogComponent.prototype.commitAndClose = function () {
        var newCollection = {};
        for (var i = 0; i < this.collection.length; i++) {
            newCollection[this.collection[i].name] = this.collection[i];
        }
        _blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunctionCollection"].setCollection(newCollection);
        this.dialogRef.close();
    };
    DeleteFunctionDialogComponent.prototype.ngOnInit = function () {
    };
    DeleteFunctionDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
    ]; };
    DeleteFunctionDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-function-dialog',
            template: __webpack_require__(/*! raw-loader!./delete-function-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/function-editor/delete-function-dialog/delete-function-dialog.component.html"),
            styles: [__webpack_require__(/*! ./delete-function-dialog.component.css */ "./src/app/function-editor/delete-function-dialog/delete-function-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], DeleteFunctionDialogComponent);
    return DeleteFunctionDialogComponent;
}());



/***/ }),

/***/ "./src/app/function-editor/function-editor.component.css":
/*!***************************************************************!*\
  !*** ./src/app/function-editor/function-editor.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\r\n    display: inline;\r\n}\r\n\r\n.param-area {\r\n    width: 90%;\r\n    margin-left: 5%;\r\n    margin-right: 5%;\r\n}\r\n\r\ntable {\r\n    width: 80%;\r\n}\r\n\r\ntd.mat-cell {\r\n    padding: 5px;\r\n}\r\n\r\n.mat-form-field-wrapper {\r\n    width: 90%;\r\n}\r\n\r\n.editor {\r\n  -webkit-box-flex: 1;\r\n          flex: 1 1 auto;\r\n  min-height: 500px;\r\n  max-width: 100%;\r\n}\r\n\r\n.flex-9 {\r\n  -webkit-box-flex: 9;\r\n          flex: 9 1 auto;\r\n}\r\n\r\n.flex-3 {\r\n  -webkit-box-flex: 3;\r\n          flex: 3 1 auto;\r\n}\r\n\r\n.flex-1 {\r\n  -webkit-box-flex: 1;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.center {\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVuY3Rpb24tZWRpdG9yL2Z1bmN0aW9uLWVkaXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtFQUNFLG1CQUFjO1VBQWQsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQWM7VUFBZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQWM7VUFBZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQWM7VUFBZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZnVuY3Rpb24tZWRpdG9yL2Z1bmN0aW9uLWVkaXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLnBhcmFtLWFyZWEge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbnRkLm1hdC1jZWxsIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLmVkaXRvciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZmxleC05IHtcclxuICBmbGV4OiA5IDEgYXV0bztcclxufVxyXG5cclxuLmZsZXgtMyB7XHJcbiAgZmxleDogMyAxIGF1dG87XHJcbn1cclxuXHJcbi5mbGV4LTEge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/function-editor/function-editor.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/function-editor/function-editor.component.ts ***!
  \**************************************************************/
/*! exports provided: FunctionEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionEditorComponent", function() { return FunctionEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blackhole-classes/sv-functions */ "./src/app/blackhole-classes/sv-functions.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _select_function_dialog_select_function_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-function-dialog/select-function-dialog.component */ "./src/app/function-editor/select-function-dialog/select-function-dialog.component.ts");
/* harmony import */ var _delete_function_dialog_delete_function_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delete-function-dialog/delete-function-dialog.component */ "./src/app/function-editor/delete-function-dialog/delete-function-dialog.component.ts");
/* harmony import */ var file_saver_dist_FileSaver_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver/dist/FileSaver.js */ "./node_modules/file-saver/dist/FileSaver.js");
/* harmony import */ var file_saver_dist_FileSaver_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver_dist_FileSaver_js__WEBPACK_IMPORTED_MODULE_6__);







var FunctionEditorComponent = /** @class */ (function () {
    /*editorOptions = {
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true
    };*/
    function FunctionEditorComponent(dialog) {
        this.dialog = dialog;
        this.SvFunctionType = _blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunctionType"];
        this.displayedColumns = [
            'paramName',
            'description',
            'defaultValue',
            'actions'
        ];
        this.currentFunction = new _blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunction"](_blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunctionType"].SV);
        this.SvFunctionType = _blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunctionType"];
    }
    FunctionEditorComponent.prototype.ngOnInit = function () {
    };
    FunctionEditorComponent.prototype.ngAfterViewInit = function () {
        // this.editor.getEditor().setOptions(this.editorOptions);
    };
    FunctionEditorComponent.prototype.onNew = function (type) {
        this.currentFunction = new _blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunction"](type);
    };
    FunctionEditorComponent.prototype.onLoad = function () {
        var _this = this;
        var openDialog = this.dialog.open(_select_function_dialog_select_function_dialog_component__WEBPACK_IMPORTED_MODULE_4__["SelectFunctionDialogComponent"]);
        openDialog.afterClosed().subscribe(function (value) {
            if (value) {
                _this.currentFunction = value;
                // sanity check
                if (_this.currentFunction.type === null ||
                    typeof (_this.currentFunction.type) === 'undefined') {
                    _this.currentFunction.type = _blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunctionType"].SV;
                }
            }
        });
    };
    FunctionEditorComponent.prototype.onSave = function () {
        if (this.currentFunction.name === '' ||
            this.currentFunction.name === _blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunction"].defaultName) {
            var ret = prompt('The function is unnamed. What will you name it?');
            if (ret != null) {
                this.currentFunction.name = ret;
            }
        }
        var msg = "The function named \"" + this.currentFunction.name + "\" already exists. Overwrite?";
        var functionList = _blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunctionCollection"].getCollection();
        if (!functionList[this.currentFunction.name] ||
            (functionList[this.currentFunction.name] && confirm(msg))) {
            functionList[this.currentFunction.name] = this.currentFunction;
            _blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunctionCollection"].setCollection(functionList);
            alert("Function " + this.currentFunction.name + " saved correctly.");
        }
    };
    FunctionEditorComponent.prototype.onDelete = function () {
        var deleteDialog = this.dialog.open(_delete_function_dialog_delete_function_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DeleteFunctionDialogComponent"]);
    };
    FunctionEditorComponent.prototype.addParam = function () {
        var newParam = new _blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvParameter"]();
        newParam.name = 'untitled_' + (this.currentFunction.parameters.length + 1);
        this.currentFunction.parameters.push(newParam);
        this.paramTable.renderRows();
    };
    FunctionEditorComponent.prototype.deleteParam = function (toRemove) {
        for (var i = 0; i < this.currentFunction.parameters.length; i++) {
            var param = this.currentFunction.parameters[i];
            if (param === toRemove) {
                this.currentFunction.parameters.splice(i, 1);
            }
        }
        this.paramTable.renderRows();
    };
    FunctionEditorComponent.prototype.onExport = function () {
        var collStr = JSON.stringify(_blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunctionCollection"].getCollection());
        var collBlob = new Blob([collStr]);
        Object(file_saver_dist_FileSaver_js__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(collBlob, 'export.json');
    };
    FunctionEditorComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paramTable', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FunctionEditorComponent.prototype, "paramTable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunctionCollection"])
    ], FunctionEditorComponent.prototype, "collection", void 0);
    FunctionEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-function-editor',
            template: __webpack_require__(/*! raw-loader!./function-editor.component.html */ "./node_modules/raw-loader/index.js!./src/app/function-editor/function-editor.component.html"),
            styles: [__webpack_require__(/*! ./function-editor.component.css */ "./src/app/function-editor/function-editor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], FunctionEditorComponent);
    return FunctionEditorComponent;
}());



/***/ }),

/***/ "./src/app/function-editor/select-function-dialog/select-function-dialog.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/function-editor/select-function-dialog/select-function-dialog.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1bmN0aW9uLWVkaXRvci9zZWxlY3QtZnVuY3Rpb24tZGlhbG9nL3NlbGVjdC1mdW5jdGlvbi1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/function-editor/select-function-dialog/select-function-dialog.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/function-editor/select-function-dialog/select-function-dialog.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SelectFunctionDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectFunctionDialogComponent", function() { return SelectFunctionDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blackhole-classes/sv-functions */ "./src/app/blackhole-classes/sv-functions.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var SelectFunctionDialogComponent = /** @class */ (function () {
    function SelectFunctionDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.collection = [];
        var funcCollection = _blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunctionCollection"].getCollection();
        for (var func in funcCollection) {
            this.collection.push(funcCollection[func]);
        }
    }
    SelectFunctionDialogComponent.prototype.ngOnInit = function () {
    };
    SelectFunctionDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
    ]; };
    SelectFunctionDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-function-dialog',
            template: __webpack_require__(/*! raw-loader!./select-function-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/function-editor/select-function-dialog/select-function-dialog.component.html"),
            styles: [__webpack_require__(/*! ./select-function-dialog.component.css */ "./src/app/function-editor/select-function-dialog/select-function-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], SelectFunctionDialogComponent);
    return SelectFunctionDialogComponent;
}());



/***/ }),

/***/ "./src/app/timing-points-manipulation/timing-points-manipulation.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/timing-points-manipulation/timing-points-manipulation.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea {\r\n  min-width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltaW5nLXBvaW50cy1tYW5pcHVsYXRpb24vdGltaW5nLXBvaW50cy1tYW5pcHVsYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC90aW1pbmctcG9pbnRzLW1hbmlwdWxhdGlvbi90aW1pbmctcG9pbnRzLW1hbmlwdWxhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWEge1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/timing-points-manipulation/timing-points-manipulation.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/timing-points-manipulation/timing-points-manipulation.component.ts ***!
  \************************************************************************************/
/*! exports provided: TimingPointsManipulationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimingPointsManipulationComponent", function() { return TimingPointsManipulationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blackhole-classes/sv-functions */ "./src/app/blackhole-classes/sv-functions.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _emitter_input_select_emitter_function_emission_function_parameters_assignment_emission_function_parameters_assignment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../emitter-input/select-emitter-function/emission-function-parameters-assignment/emission-function-parameters-assignment.component */ "./src/app/emitter-input/select-emitter-function/emission-function-parameters-assignment/emission-function-parameters-assignment.component.ts");
/* harmony import */ var _emitter_input_select_emitter_function_select_emission_function_dialog_select_emission_function_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../emitter-input/select-emitter-function/select-emission-function-dialog/select-emission-function-dialog.component */ "./src/app/emitter-input/select-emitter-function/select-emission-function-dialog/select-emission-function-dialog.component.ts");
/* harmony import */ var _blackhole_classes_osu_timing_point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blackhole-classes/osu-timing-point */ "./src/app/blackhole-classes/osu-timing-point.ts");
/* harmony import */ var _blackhole_classes_osu_timing_point_emitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blackhole-classes/osu-timing-point-emitter */ "./src/app/blackhole-classes/osu-timing-point-emitter.ts");








var TimingPointsManipulationComponent = /** @class */ (function () {
    function TimingPointsManipulationComponent(dialog) {
        this.dialog = dialog;
        this.error = null;
    }
    TimingPointsManipulationComponent.prototype.ngOnInit = function () {
    };
    TimingPointsManipulationComponent.prototype.selectFunction = function () {
        var _this = this;
        var funcDialog = this.dialog.open(_emitter_input_select_emitter_function_select_emission_function_dialog_select_emission_function_dialog_component__WEBPACK_IMPORTED_MODULE_5__["SelectEmissionFunctionDialogComponent"], {
            data: {
                allowedFunctionTypes: [_blackhole_classes_sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunctionType"].TimingPoint]
            }
        });
        funcDialog.afterClosed().subscribe(function (val) {
            _this.currentFunction = val;
        });
    };
    TimingPointsManipulationComponent.prototype.setParameters = function () {
        this.dialog.open(_emitter_input_select_emitter_function_emission_function_parameters_assignment_emission_function_parameters_assignment_component__WEBPACK_IMPORTED_MODULE_4__["EmissionFunctionParametersAssignmentComponent"], {
            height: '400px',
            width: '800px',
            data: {
                target: this.currentFunction
            }
        });
    };
    TimingPointsManipulationComponent.prototype.execute = function () {
        var set = this.tpInput
            .split('\n')
            .map(function (x) { return _blackhole_classes_osu_timing_point__WEBPACK_IMPORTED_MODULE_6__["OsuTimingPoint"].fromString(x); })
            .map(function (x) { return x.toDifference(); });
        try {
            this.error = null;
            var result = Object(_blackhole_classes_osu_timing_point_emitter__WEBPACK_IMPORTED_MODULE_7__["applyManipulation"])(this.currentFunction, set);
            if (Array.isArray(result)) {
                result = result.filter(function (x) { return _blackhole_classes_osu_timing_point__WEBPACK_IMPORTED_MODULE_6__["OsuTimingPoint"].isValidDifference(x); });
                result = result
                    .map(function (x) { return (new _blackhole_classes_osu_timing_point__WEBPACK_IMPORTED_MODULE_6__["OsuTimingPoint"]()).applyDifference(x); })
                    .map(function (x) { return x.toString(); });
                this.tpOutput = result.join('\n');
            }
            else {
                this.tpOutput = result.toString();
            }
        }
        catch (e) {
            this.error = e;
        }
    };
    TimingPointsManipulationComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    TimingPointsManipulationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timing-points-manipulation',
            template: __webpack_require__(/*! raw-loader!./timing-points-manipulation.component.html */ "./node_modules/raw-loader/index.js!./src/app/timing-points-manipulation/timing-points-manipulation.component.html"),
            styles: [__webpack_require__(/*! ./timing-points-manipulation.component.css */ "./src/app/timing-points-manipulation/timing-points-manipulation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], TimingPointsManipulationComponent);
    return TimingPointsManipulationComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ace-builds */ "./node_modules/ace-builds/src-noconflict/ace.js");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ace_builds__WEBPACK_IMPORTED_MODULE_4__);





ace_builds__WEBPACK_IMPORTED_MODULE_4__["config"].set('basePath', 'assets/');
ace_builds__WEBPACK_IMPORTED_MODULE_4__["config"].set('modePath', 'assets/');
// ace.config.set('themePath', '');
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\machindramon\Documents\dev\blackhole-studio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map