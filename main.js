(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<mat-toolbar>\r\n  <h2>Blackhole SV Studio (by Agka)</h2>\r\n</mat-toolbar>\r\n<mat-tab-group>\r\n  <mat-tab label=\"Emission\">\r\n    <app-emission-control></app-emission-control>\r\n  </mat-tab>\r\n  <mat-tab label=\"Editor\">\r\n    <app-function-editor [collection]=\"svFunctions\"></app-function-editor>\r\n  </mat-tab>\r\n</mat-tab-group>"

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
/* harmony import */ var _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cycle-time-emitter */ "./src/app/cycle-time-emitter.ts");
/* harmony import */ var _sv_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sv-functions */ "./src/app/sv-functions.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'blackhole';
        this.timeInputType = _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleEmissionType"];
        this.svFunctions = new _sv_functions__WEBPACK_IMPORTED_MODULE_3__["SvFunctionCollection"]();
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _timeinput_timeinput_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timeinput/timeinput.component */ "./src/app/timeinput/timeinput.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _timeinput_timeinput_duration_timeinput_duration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timeinput/timeinput-duration/timeinput-duration.component */ "./src/app/timeinput/timeinput-duration/timeinput-duration.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _timeinput_timeinput_beats_timeinput_beats_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./timeinput/timeinput-beats/timeinput-beats.component */ "./src/app/timeinput/timeinput-beats/timeinput-beats.component.ts");
/* harmony import */ var _timeinput_timeinput_notetimes_timeinput_notetimes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timeinput/timeinput-notetimes/timeinput-notetimes.component */ "./src/app/timeinput/timeinput-notetimes/timeinput-notetimes.component.ts");
/* harmony import */ var _timeinput_timeinput_startend_timeinput_startend_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./timeinput/timeinput-startend/timeinput-startend.component */ "./src/app/timeinput/timeinput-startend/timeinput-startend.component.ts");
/* harmony import */ var _divisorinput_divisorinput_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./divisorinput/divisorinput.component */ "./src/app/divisorinput/divisorinput.component.ts");
/* harmony import */ var _emission_control_emission_control_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./emission-control/emission-control.component */ "./src/app/emission-control/emission-control.component.ts");
/* harmony import */ var _function_editor_function_editor_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./function-editor/function-editor.component */ "./src/app/function-editor/function-editor.component.ts");
/* harmony import */ var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-ace-editor */ "./node_modules/ng2-ace-editor/index.js");
/* harmony import */ var _select_function_dialog_select_function_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./select-function-dialog/select-function-dialog.component */ "./src/app/select-function-dialog/select-function-dialog.component.ts");
/* harmony import */ var _delete_function_dialog_delete_function_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./delete-function-dialog/delete-function-dialog.component */ "./src/app/delete-function-dialog/delete-function-dialog.component.ts");
/* harmony import */ var _timing_point_template_timing_point_template_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./timing-point-template/timing-point-template.component */ "./src/app/timing-point-template/timing-point-template.component.ts");
/* harmony import */ var _select_emission_function_select_emission_function_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./select-emission-function/select-emission-function.component */ "./src/app/select-emission-function/select-emission-function.component.ts");
/* harmony import */ var _emission_function_parameters_assignment_emission_function_parameters_assignment_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./emission-function-parameters-assignment/emission-function-parameters-assignment.component */ "./src/app/emission-function-parameters-assignment/emission-function-parameters-assignment.component.ts");
/* harmony import */ var _timeinput_timeinput_beatfraction_timeinput_beatfraction_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./timeinput/timeinput-beatfraction/timeinput-beatfraction.component */ "./src/app/timeinput/timeinput-beatfraction/timeinput-beatfraction.component.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _timeinput_timeinput_component__WEBPACK_IMPORTED_MODULE_4__["TimeinputComponent"],
                _timeinput_timeinput_duration_timeinput_duration_component__WEBPACK_IMPORTED_MODULE_7__["TimeinputDurationComponent"],
                _timeinput_timeinput_beats_timeinput_beats_component__WEBPACK_IMPORTED_MODULE_9__["TimeinputBeatsComponent"],
                _timeinput_timeinput_notetimes_timeinput_notetimes_component__WEBPACK_IMPORTED_MODULE_10__["TimeinputNotetimesComponent"],
                _timeinput_timeinput_startend_timeinput_startend_component__WEBPACK_IMPORTED_MODULE_11__["TimeinputStartendComponent"],
                _divisorinput_divisorinput_component__WEBPACK_IMPORTED_MODULE_12__["DivisorinputComponent"],
                _emission_control_emission_control_component__WEBPACK_IMPORTED_MODULE_13__["EmissionControlComponent"],
                _function_editor_function_editor_component__WEBPACK_IMPORTED_MODULE_14__["FunctionEditorComponent"],
                _select_function_dialog_select_function_dialog_component__WEBPACK_IMPORTED_MODULE_16__["SelectFunctionDialogComponent"],
                _delete_function_dialog_delete_function_dialog_component__WEBPACK_IMPORTED_MODULE_17__["DeleteFunctionDialogComponent"],
                _timing_point_template_timing_point_template_component__WEBPACK_IMPORTED_MODULE_18__["TimingPointTemplateComponent"],
                _select_emission_function_select_emission_function_component__WEBPACK_IMPORTED_MODULE_19__["SelectEmissionFunctionComponent"],
                _emission_function_parameters_assignment_emission_function_parameters_assignment_component__WEBPACK_IMPORTED_MODULE_20__["EmissionFunctionParametersAssignmentComponent"],
                _timeinput_timeinput_beatfraction_timeinput_beatfraction_component__WEBPACK_IMPORTED_MODULE_21__["TimeinputBeatfractionComponent"]
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
                ng2_ace_editor__WEBPACK_IMPORTED_MODULE_15__["AceEditorModule"]
            ],
            providers: [],
            entryComponents: [
                _select_function_dialog_select_function_dialog_component__WEBPACK_IMPORTED_MODULE_16__["SelectFunctionDialogComponent"],
                _delete_function_dialog_delete_function_dialog_component__WEBPACK_IMPORTED_MODULE_17__["DeleteFunctionDialogComponent"],
                _select_emission_function_select_emission_function_component__WEBPACK_IMPORTED_MODULE_19__["SelectEmissionFunctionComponent"],
                _emission_function_parameters_assignment_emission_function_parameters_assignment_component__WEBPACK_IMPORTED_MODULE_20__["EmissionFunctionParametersAssignmentComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/builtin-sv-functions.ts":
/*!*****************************************!*\
  !*** ./src/app/builtin-sv-functions.ts ***!
  \*****************************************/
/*! exports provided: builtinSv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "builtinSv", function() { return builtinSv; });
var builtinSv = {
    'Monotonic Scrolling': {
        'parameters': [
            {
                'name': 'exponent',
                'description': 'Exponent to use. 1 is linear easing.',
                'defaultValue': '2.718281828459045'
            },
            {
                'name': 'startSv',
                'description': 'SV to map the starting point to',
                'defaultValue': '1'
            },
            {
                'name': 'endSv',
                'description': 'SV to map the end point to',
                'defaultValue': '2'
            }
        ],
        'body': '(() => { \n    return (x, params) => { \n        x = Math.pow(x, params.exponent);\n        return (1 - x) * params.startSv + x * params.endSv; \n    }; \n})();',
        'name': 'Monotonic Scrolling',
        'tooltip': '',
        'description': 'Function that helps the user scroll from A to B with exponential easing.'
    },
    'Sine Scrolling': {
        'parameters': [{
                'name': 'center',
                'description': 'Center point. Wave will oscilate around here.',
                'defaultValue': '1'
            },
            {
                'name': 'amplitude',
                'description': 'Amplitude. How much to move away from the center.',
                'defaultValue': '0.2'
            }],
        'body': '(() => {\n    return (x, params) => {\n        var angle = 2 * Math.PI * x;\n        var sineval = params.amplitude * Math.sin(angle) + params.center;\n        return sineval;\n    }; \n})()',
        'name': 'Sine Scrolling',
        'tooltip': '',
        'description': 'Smooth sine scrolling. Waves around center point.'
    },
    'Teleporters': {
        'parameters': [{
                'name': 'peak',
                'description': 'Peak SV multiplier.',
                'defaultValue': '10'
            },
            {
                'name': 'rate',
                'description': 'SV Rate after the peak.',
                'defaultValue': '1'
            },
            {
                'name': 'duration',
                'description': 'Fraction of the section to last.',
                'defaultValue': '0.1'
            }],
        'body': '(() => { \n    return (x, params) => {\n        if (x < params.duration) return params.peak;\n        else return params.rate;\n    }; \n})()',
        'name': 'Teleporters',
        'tooltip': '',
        'description': 'Jump that map around with this function. Hits peak for the duration, then a second rate afterwards. Make sure your divisors are at least 1/duration.'
    },
    'Rate Jitter': {
        'parameters': [{
                'name': 'duration',
                'description': 'Fraction: How long the jitter lasts on this section',
                'defaultValue': '0.5'
            }, {
                'name': 'startSv',
                'description': 'Initial SV value',
                'defaultValue': '1.5'
            }, {
                'name': 'dstRate',
                'description': 'Rate the jitter should look like',
                'defaultValue': '1'
            }],
        'body': '(() => {\n    return (x, params) => {\n        var div = 1 / (1 - params.duration);\n        var centerSv = (params.dstRate - params.startSv * params.duration) * div;\n        \n        if (x < params.duration) return params.startSv;\n        if (x >= params.duration && x < 1) return centerSv;\n        if (x == 1) return params.dstRate;\n        return 1;\n    }; \n})()',
        'name': 'Rate Jitter',
        'tooltip': '',
        'description': 'Jitter between two SV values that look like the target rate, given the first SV value.'
    },
    'Bounce': {
        'parameters': [{
                'name': 'amplitude',
                'description': 'The bounce\'s peak from the center',
                'defaultValue': '0.2'
            }, {
                'name': 'center',
                'description': 'The bounce\'s start point',
                'defaultValue': '1'
            }],
        'body': '(() => { \n    return (x, params) => {\n        var angle = Math.PI * x;\n        var sineval = params.amplitude * Math.sin(angle) + params.center;\n        return sineval;\n    }; \n})()',
        'name': 'Bounce',
        'tooltip': '',
        'description': 'Bouncy function that goes up and down.'
    }
};


/***/ }),

/***/ "./src/app/cycle-time-emitter.ts":
/*!***************************************!*\
  !*** ./src/app/cycle-time-emitter.ts ***!
  \***************************************/
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

/***/ "./src/app/delete-function-dialog/delete-function-dialog.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/delete-function-dialog/delete-function-dialog.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZS1mdW5jdGlvbi1kaWFsb2cvZGVsZXRlLWZ1bmN0aW9uLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/delete-function-dialog/delete-function-dialog.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/delete-function-dialog/delete-function-dialog.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Delete function...</h2>\r\n<mat-dialog-content>\r\n  <div class=\"row\" *ngFor=\"let func of collection\">\r\n    <div class=\"col-md-8\">\r\n      {{ func.name }}\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <button mat-button (click)=\"removeFunc(func)\">Delete</button>\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n  Functions will not be removed unless you click <b>Apply!</b>\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-button (click)=\"commitAndClose()\">Apply</button>\r\n  <button mat-button mat-dialog-close>Cancel</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/delete-function-dialog/delete-function-dialog.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/delete-function-dialog/delete-function-dialog.component.ts ***!
  \****************************************************************************/
/*! exports provided: DeleteFunctionDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFunctionDialogComponent", function() { return DeleteFunctionDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sv_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sv-functions */ "./src/app/sv-functions.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var DeleteFunctionDialogComponent = /** @class */ (function () {
    function DeleteFunctionDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.collection = [];
        var funcCollection = _sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunctionCollection"].getCollection();
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
        _sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunctionCollection"].setCollection(newCollection);
        this.dialogRef.close();
    };
    DeleteFunctionDialogComponent.prototype.ngOnInit = function () {
    };
    DeleteFunctionDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-function-dialog',
            template: __webpack_require__(/*! ./delete-function-dialog.component.html */ "./src/app/delete-function-dialog/delete-function-dialog.component.html"),
            styles: [__webpack_require__(/*! ./delete-function-dialog.component.css */ "./src/app/delete-function-dialog/delete-function-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], DeleteFunctionDialogComponent);
    return DeleteFunctionDialogComponent;
}());



/***/ }),

/***/ "./src/app/divisor-emitter.ts":
/*!************************************!*\
  !*** ./src/app/divisor-emitter.ts ***!
  \************************************/
/*! exports provided: DivisorEmitter, DivisorEmitterBeatFraction, DivisorEmitterByCount, DivisorEmitterTimeSpan, DivisorInputType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisorEmitter", function() { return DivisorEmitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisorEmitterBeatFraction", function() { return DivisorEmitterBeatFraction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisorEmitterByCount", function() { return DivisorEmitterByCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisorEmitterTimeSpan", function() { return DivisorEmitterTimeSpan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisorInputType", function() { return DivisorInputType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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

/***/ "./src/app/divisorinput/divisorinput.component.css":
/*!*********************************************************!*\
  !*** ./src/app/divisorinput/divisorinput.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpdmlzb3JpbnB1dC9kaXZpc29yaW5wdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/divisorinput/divisorinput.component.html":
/*!**********************************************************!*\
  !*** ./src/app/divisorinput/divisorinput.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"fullwidth\">\r\n    <mat-select placeholder=\"Divisor Type\" [(ngModel)]=\"type\" (ngModelChange)=\"onTypeChange($event)\" class=\"fullwidth\">\r\n        <mat-option [value]=\"DivisorInputType.Fixed\">\r\n            Fixed\r\n        </mat-option>\r\n        <mat-option [value]=\"DivisorInputType.BPM\">\r\n            BPM\r\n        </mat-option>\r\n        <mat-option [value]=\"DivisorInputType.Span\">\r\n            Span\r\n        </mat-option>\r\n    </mat-select>\r\n</mat-form-field>\r\n\r\n<div *ngIf=\"type === DivisorInputType.Fixed\">\r\n    <mat-form-field class=\"fullwidth\">\r\n        <input matInput type=\"number\" placeholder=\"Count\" [(ngModel)]=\"currentDivisorInput.count\">\r\n    </mat-form-field>\r\n</div>\r\n\r\n<div *ngIf=\"type === DivisorInputType.BPM\">\r\n    <mat-form-field class=\"fullwidth\">\r\n        <input matInput type=\"number\" placeholder=\"BPM\" [(ngModel)]=\"currentDivisorInput.bpm\">\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field class=\"fullwidth\">\r\n        <input matInput type=\"number\" placeholder=\"Divisions per beat\" [(ngModel)]=\"currentDivisorInput.beatDivisor\">\r\n    </mat-form-field>\r\n    <br>\r\n    <div class=\"alert alert-secondary\">\r\n        <b>Division Span (MS):</b> {{ currentDivisorInput.divisorSpan }}\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"type === DivisorInputType.Span\">\r\n    <mat-form-field class=\"fullwidth\">\r\n        <input matInput type=\"number\" placeholder=\"Span (MS)\" [(ngModel)]=\"currentDivisorInput.span\">\r\n    </mat-form-field>\r\n</div>"

/***/ }),

/***/ "./src/app/divisorinput/divisorinput.component.ts":
/*!********************************************************!*\
  !*** ./src/app/divisorinput/divisorinput.component.ts ***!
  \********************************************************/
/*! exports provided: DivisorinputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisorinputComponent", function() { return DivisorinputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _divisor_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../divisor-emitter */ "./src/app/divisor-emitter.ts");



var DivisorinputComponent = /** @class */ (function () {
    function DivisorinputComponent() {
        this.DivisorInputType = _divisor_emitter__WEBPACK_IMPORTED_MODULE_2__["DivisorInputType"];
        this.type = _divisor_emitter__WEBPACK_IMPORTED_MODULE_2__["DivisorInputType"].Fixed;
        this.onTypeChange(null);
    }
    DivisorinputComponent.prototype.onTypeChange = function (e) {
        if (this.type === _divisor_emitter__WEBPACK_IMPORTED_MODULE_2__["DivisorInputType"].Fixed)
            this.currentDivisorInput = new _divisor_emitter__WEBPACK_IMPORTED_MODULE_2__["DivisorEmitterByCount"]();
        if (this.type === _divisor_emitter__WEBPACK_IMPORTED_MODULE_2__["DivisorInputType"].BPM)
            this.currentDivisorInput = new _divisor_emitter__WEBPACK_IMPORTED_MODULE_2__["DivisorEmitterBeatFraction"]();
        if (this.type === _divisor_emitter__WEBPACK_IMPORTED_MODULE_2__["DivisorInputType"].Span)
            this.currentDivisorInput = new _divisor_emitter__WEBPACK_IMPORTED_MODULE_2__["DivisorEmitterTimeSpan"]();
    };
    DivisorinputComponent.prototype.ngOnInit = function () {
    };
    DivisorinputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-divisorinput',
            template: __webpack_require__(/*! ./divisorinput.component.html */ "./src/app/divisorinput/divisorinput.component.html"),
            styles: [__webpack_require__(/*! ./divisorinput.component.css */ "./src/app/divisorinput/divisorinput.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DivisorinputComponent);
    return DivisorinputComponent;
}());



/***/ }),

/***/ "./src/app/emission-control/emission-control.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/emission-control/emission-control.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea {\r\n    min-height: 300px;\r\n}\r\n\r\n.grey {\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1pc3Npb24tY29udHJvbC9lbWlzc2lvbi1jb250cm9sLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxXQUFXO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9lbWlzc2lvbi1jb250cm9sL2VtaXNzaW9uLWNvbnRyb2wuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRleHRhcmVhIHtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4uZ3JleSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/emission-control/emission-control.component.html":
/*!******************************************************************!*\
  !*** ./src/app/emission-control/emission-control.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"col\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n      <mat-card>\r\n        <mat-card-title>Time control</mat-card-title>\r\n        <app-timeinput></app-timeinput>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <mat-card>\r\n        <mat-card-title>Divisor control</mat-card-title>\r\n        <app-divisorinput></app-divisorinput>\r\n        <!-- <div class=\"alert alert-secondary\">\r\n          <strong>Total divisors: </strong> <br>\r\n          {{ currentDivisors }}\r\n        </div> -->\r\n        <mat-checkbox [(ngModel)]=\"includeDivisorAtEnd\"> Include divisor at end of last cycle </mat-checkbox>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <mat-card>\r\n        <mat-card-title>\r\n          Timing point template\r\n        </mat-card-title>\r\n        <app-timing-point-template></app-timing-point-template>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <mat-card>\r\n        <mat-card-title>Emission control</mat-card-title>\r\n        <mat-checkbox [(ngModel)]=\"useFixedBpm\">Use Fixed BPM</mat-checkbox>\r\n        <hr>\r\n        <!-- Function section -->\r\n        <div *ngIf=\"!useFixedBpm\">\r\n          <div class=\"row\">\r\n            <h4>SV/BPM function</h4>\r\n            <div class=\"col-md-12 text-center\" [class.grey]=\"!currentFunction\">\r\n              {{ currentFunction && currentFunction.name || \"no function selected\" }}\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 text-center\">\r\n              <button mat-raised-button (click)=\"selectFunction(false)\">Select function</button>\r\n            </div>\r\n            <div class=\"col-md-4 text-center\">\r\n              <button mat-raised-button (click)=\"setParameters(false)\" [disabled]=\"!currentFunction\">\r\n                Set Parameters\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Fixed BPM section -->\r\n        <div *ngIf=\"useFixedBpm\">\r\n          <input matInput type=\"number\" placeholder=\"BPM\" [(ngModel)]=\"bpm\">\r\n        </div>\r\n        <hr>\r\n\r\n        <!-- Time deformation -->\r\n        <div class=\"row\">\r\n          <h4>Time Deformation function</h4>\r\n          <div class=\"col-md-12 text-center\" [class.grey]=\"!currentTimeFunction\">\r\n            {{ currentTimeFunction && currentTimeFunction.name || \"no function selected\" }}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 text-center\">\r\n            <button mat-raised-button (click)=\"selectFunction(true)\">Select function</button>\r\n          </div>\r\n          <div class=\"col-md-4 text-center\">\r\n            <button mat-raised-button (click)=\"setParameters(true)\" [disabled]=\"!currentTimeFunction\">\r\n              Set Parameters\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n        <hr>\r\n\r\n        <!-- Emit section -->\r\n        <button mat-raised-button [disabled]=\"!(currentFunction || useFixedBpm)\" (click)=\"emit()\">\r\n          Emit\r\n        </button>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n\r\n  <div class=\"row\" *ngIf=\"error\">\r\n    <div class=\"col-md-2\"></div>\r\n    <div class=\"alert alert-danger col-md-8\">\r\n      <strong>Error: </strong>\r\n      <br>\r\n      <b>line:</b> {{ error.lineNumber }} <br>\r\n      <b>message: </b>  <br>\r\n      {{ error.message }}\r\n    </div>\r\n    <div class=\"col-md-2\"></div>\r\n  </div>\r\n\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 padder\">\r\n      <mat-card>\r\n        <mat-card-title>\r\n          Output area\r\n        </mat-card-title>\r\n        <button mat-raised-button (click)=\"output = ''\">Clear...</button>\r\n        <button mat-raised-button (click)=\"outputArea.select()\">Select all</button>\r\n        <textarea matInput #outputArea readonly placeholder=\"output will be here\" [value]=\"output\"></textarea>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _timeinput_timeinput_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../timeinput/timeinput.component */ "./src/app/timeinput/timeinput.component.ts");
/* harmony import */ var _divisorinput_divisorinput_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../divisorinput/divisorinput.component */ "./src/app/divisorinput/divisorinput.component.ts");
/* harmony import */ var _sv_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sv-functions */ "./src/app/sv-functions.ts");
/* harmony import */ var _timing_point_template_timing_point_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../timing-point-template/timing-point-template.component */ "./src/app/timing-point-template/timing-point-template.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _osu_timing_point_emitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../osu-timing-point-emitter */ "./src/app/osu-timing-point-emitter.ts");
/* harmony import */ var _select_emission_function_select_emission_function_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../select-emission-function/select-emission-function.component */ "./src/app/select-emission-function/select-emission-function.component.ts");
/* harmony import */ var _emission_function_parameters_assignment_emission_function_parameters_assignment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../emission-function-parameters-assignment/emission-function-parameters-assignment.component */ "./src/app/emission-function-parameters-assignment/emission-function-parameters-assignment.component.ts");










var EmissionControlComponent = /** @class */ (function () {
    function EmissionControlComponent(dialog) {
        this.dialog = dialog;
        this.bpm = 120;
        this.error = null;
        this.output = '';
        // this.output = "hello world";
    }
    EmissionControlComponent.prototype.selectFunction = function (isForTimeDeformation) {
        var _this = this;
        if (isForTimeDeformation) {
            var funcDialog = this.dialog.open(_select_emission_function_select_emission_function_component__WEBPACK_IMPORTED_MODULE_8__["SelectEmissionFunctionComponent"], {
                data: {
                    allowedFunctionTypes: [_sv_functions__WEBPACK_IMPORTED_MODULE_4__["SvFunctionType"].SV]
                }
            });
            funcDialog.afterClosed().subscribe(function (x) {
                _this.currentTimeFunction = x;
            });
        }
        else {
            var funcDialog = this.dialog.open(_select_emission_function_select_emission_function_component__WEBPACK_IMPORTED_MODULE_8__["SelectEmissionFunctionComponent"], {
                data: {
                    allowedFunctionTypes: [_sv_functions__WEBPACK_IMPORTED_MODULE_4__["SvFunctionType"].SV, _sv_functions__WEBPACK_IMPORTED_MODULE_4__["SvFunctionType"].BPM]
                }
            });
            funcDialog.afterClosed().subscribe(function (x) {
                _this.currentFunction = x;
            });
        }
    };
    EmissionControlComponent.prototype.setParameters = function (isForTimeDeformation) {
        if (isForTimeDeformation) {
            this.dialog.open(_emission_function_parameters_assignment_emission_function_parameters_assignment_component__WEBPACK_IMPORTED_MODULE_9__["EmissionFunctionParametersAssignmentComponent"], {
                height: "400px",
                width: "800px",
                data: {
                    target: this.currentTimeFunction
                }
            });
        }
        else {
            this.dialog.open(_emission_function_parameters_assignment_emission_function_parameters_assignment_component__WEBPACK_IMPORTED_MODULE_9__["EmissionFunctionParametersAssignmentComponent"], {
                height: "400px",
                width: "800px",
                data: {
                    target: this.currentFunction
                }
            });
        }
    };
    EmissionControlComponent.prototype.emit = function () {
        var timeInput = this.timeInput.currentTimeInput;
        var divInput = this.divisorInput.currentDivisorInput;
        var timingDefault = this.timingPointTemplate.currentTimingPoint;
        //console.log(timeInput);
        //console.log(divInput);
        //console.log(timingDefault);
        try {
            var result = Object(_osu_timing_point_emitter__WEBPACK_IMPORTED_MODULE_7__["emitTargets"])(timeInput, divInput, this.useFixedBpm ? null : this.currentFunction, this.currentTimeFunction, timingDefault, this.bpm, this.includeDivisorAtEnd);
            this.output = result.join('\n');
            this.error = null;
        }
        catch (err) {
            console.log(err);
            this.error = err;
        }
    };
    Object.defineProperty(EmissionControlComponent.prototype, "currentDivisors", {
        get: function () {
            var di = this.divisorInput.currentDivisorInput;
            var ti = this.timeInput.currentTimeInput;
            var arr = new Set();
            for (var i = 0; i < ti.cycleCount; i++) {
                arr.add(Math.floor(di.getSpanDivisorCount(ti.getDuration(i))));
            }
            return Array.from(arr).join(", ");
        },
        enumerable: true,
        configurable: true
    });
    EmissionControlComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_timeinput_timeinput_component__WEBPACK_IMPORTED_MODULE_2__["TimeinputComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _timeinput_timeinput_component__WEBPACK_IMPORTED_MODULE_2__["TimeinputComponent"])
    ], EmissionControlComponent.prototype, "timeInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_divisorinput_divisorinput_component__WEBPACK_IMPORTED_MODULE_3__["DivisorinputComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _divisorinput_divisorinput_component__WEBPACK_IMPORTED_MODULE_3__["DivisorinputComponent"])
    ], EmissionControlComponent.prototype, "divisorInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_timing_point_template_timing_point_template_component__WEBPACK_IMPORTED_MODULE_5__["TimingPointTemplateComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _timing_point_template_timing_point_template_component__WEBPACK_IMPORTED_MODULE_5__["TimingPointTemplateComponent"])
    ], EmissionControlComponent.prototype, "timingPointTemplate", void 0);
    EmissionControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-emission-control',
            template: __webpack_require__(/*! ./emission-control.component.html */ "./src/app/emission-control/emission-control.component.html"),
            styles: [__webpack_require__(/*! ./emission-control.component.css */ "./src/app/emission-control/emission-control.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], EmissionControlComponent);
    return EmissionControlComponent;
}());



/***/ }),

/***/ "./src/app/emission-function-parameters-assignment/emission-function-parameters-assignment.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/emission-function-parameters-assignment/emission-function-parameters-assignment.component.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtaXNzaW9uLWZ1bmN0aW9uLXBhcmFtZXRlcnMtYXNzaWdubWVudC9lbWlzc2lvbi1mdW5jdGlvbi1wYXJhbWV0ZXJzLWFzc2lnbm1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/emission-function-parameters-assignment/emission-function-parameters-assignment.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/emission-function-parameters-assignment/emission-function-parameters-assignment.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\r\n  <h2 mat-dialog-title>Function Parameters</h2>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <b>\r\n        Parameter Name\r\n      </b>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <b>\r\n        Description\r\n      </b>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <b>\r\n       Value\r\n      </b>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row\" *ngFor=\"let param of target.parameters\">\r\n    <div class=\"col-md-4\">\r\n      {{ param.name }}\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      {{ param.description }}\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder=\"Value\" [(ngModel)]=\"param.currentValue\">\r\n      </mat-form-field>\r\n    </div>\r\n    <hr>\r\n  </div>\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-button mat-dialog-close>Close</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/emission-function-parameters-assignment/emission-function-parameters-assignment.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/emission-function-parameters-assignment/emission-function-parameters-assignment.component.ts ***!
  \**************************************************************************************************************/
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
        console.log(data.target);
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
    EmissionFunctionParametersAssignmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-emission-function-parameters-assignment',
            template: __webpack_require__(/*! ./emission-function-parameters-assignment.component.html */ "./src/app/emission-function-parameters-assignment/emission-function-parameters-assignment.component.html"),
            styles: [__webpack_require__(/*! ./emission-function-parameters-assignment.component.css */ "./src/app/emission-function-parameters-assignment/emission-function-parameters-assignment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], EmissionFunctionParametersAssignmentComponent);
    return EmissionFunctionParametersAssignmentComponent;
}());



/***/ }),

/***/ "./src/app/function-editor/function-editor.component.css":
/*!***************************************************************!*\
  !*** ./src/app/function-editor/function-editor.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\r\n    display: inline;\r\n}\r\n\r\n.paramarea {\r\n    width: 90%;\r\n    margin-left: 5%;\r\n    margin-right: 5%;\r\n}\r\n\r\ntable {\r\n    width: 80%;\r\n}\r\n\r\ntd.mat-cell {\r\n    padding: 5px;\r\n}\r\n\r\n.mat-form-field-wrapper {\r\n    width: 90%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVuY3Rpb24tZWRpdG9yL2Z1bmN0aW9uLWVkaXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksV0FBVztDQUNkIiwiZmlsZSI6InNyYy9hcHAvZnVuY3Rpb24tZWRpdG9yL2Z1bmN0aW9uLWVkaXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLnBhcmFtYXJlYSB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxudGQubWF0LWNlbGwge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/function-editor/function-editor.component.html":
/*!****************************************************************!*\
  !*** ./src/app/function-editor/function-editor.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-9\">\r\n    <b style=\"padding: 2%\">Menu</b> <button mat-button [matMenuTriggerFor]=\"fileMenu\">Collection</button>\r\n  </div>\r\n  <div class=\"col-md-3\">\r\n    <div class=\"text-center\">\r\n      <b>Working on:</b> {{ currentFunction.name }}\r\n    </div>\r\n  </div>\r\n</div>\r\n<mat-menu #fileMenu>\r\n  <button mat-menu-item (click)=\"onNew()\">New</button>\r\n  <button mat-menu-item (click)=\"onLoad()\">Load...</button>\r\n  <button mat-menu-item (click)=\"onSave()\">Save to collection...</button>\r\n  <button mat-menu-item (click)=\"onDelete()\">Delete from collection...</button>\r\n  <button mat-menu-item>Import collection...</button>\r\n  <button mat-menu-item (click)=\"onExport()\">Export collection</button>\r\n</mat-menu>\r\n\r\n<mat-tab-group>\r\n  <mat-tab label=\"Code\">\r\n    <div ace-editor [(text)]=\"currentFunction.body\" [mode]=\"'javascript'\" [theme]=\"'eclipse'\" [options]=\"editorOptions\" style=\"min-height: 540px\"\r\n      #editor>\r\n    </div>\r\n\r\n  </mat-tab>\r\n  <mat-tab label=\"Parameters\">\r\n    <br>\r\n    <div class=\"paramarea\">\r\n      <mat-card>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Function Name\" [(ngModel)]=\"currentFunction.name\">\r\n        </mat-form-field>\r\n        <br>\r\n        <mat-form-field>\r\n          <textarea matInput placeholder=\"Function description\" [(ngModel)]=\"currentFunction.tooltip\">\r\n        </textarea>\r\n        </mat-form-field>\r\n        <mat-checkbox [(ngModel)]=\"currentFunction.isBpm\">Is BPM function</mat-checkbox>\r\n      </mat-card>\r\n    </div>\r\n\r\n    <br>\r\n\r\n    <div class=\"paramarea\">\r\n      <h2> Function Parameters </h2>\r\n      <br>\r\n      <button mat-raised-button (click)=\"addParam();\">Add...</button>\r\n      <br>\r\n\r\n      <table mat-table [dataSource]=\"currentFunction.parameters\" #paramTable>\r\n        <ng-container matColumnDef=\"paramName\">\r\n          <th mat-header-cell *matHeaderCellDef> Parameter Name </th>\r\n          <td mat-cell *matCellDef=\"let el\">\r\n            <mat-form-field class=\"tbIn\">\r\n              <input matInput class=\"tbIn\" [(ngModel)]=\"el.name\">\r\n            </mat-form-field>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"description\">\r\n          <th mat-header-cell *matHeaderCellDef> Description </th>\r\n          <td mat-cell *matCellDef=\"let el\">\r\n            <mat-form-field class=\"tbIn\">\r\n              <input matInput class=\"tbIn\" [(ngModel)]=\"el.description\">\r\n            </mat-form-field>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"defaultValue\">\r\n          <th mat-header-cell *matHeaderCellDef> Default Value </th>\r\n          <td mat-cell *matCellDef=\"let el\">\r\n            <mat-form-field class=\"tbIn\">\r\n              <input matInput class=\"tbIn\" [(ngModel)]=\"el.defaultValue\">\r\n            </mat-form-field>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"actions\">\r\n          <th mat-header-cell *matHeaderCellDef> Actions </th>\r\n          <td mat-cell *matCellDef=\"let el\">\r\n            <button mat-button (click)=\"deleteParam(el)\">\r\n              Remove\r\n            </button>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table>\r\n\r\n      <p class=\"alert alert-primary\" *ngIf=\"currentFunction.parameters.length === 0\">\r\n        No parameters to display.\r\n      </p>\r\n\r\n      <br>\r\n\r\n    </div>\r\n\r\n  </mat-tab>\r\n  <mat-tab label=\"Reference\">\r\n    <div class=\"padder col\">\r\n      <h2>Reference</h2>\r\n      <ul>\r\n        <li>\r\n          Returning a\r\n          <code>NaN</code> value will skip over the current divisor.\r\n        </li>\r\n        <li>\r\n          The\r\n          <code>params.builtin</code> value contains some useful definitions, such as\r\n          <code>currentDivisor</code>,\r\n          <code>divisorCount</code>,\r\n          <code>divisorBpm</code> (can be null),\r\n          <code>cycleBpm</code> (can be null),\r\n          <code>currentCycle</code>,\r\n          <code>cycleCount</code>,\r\n          <code>divisionSpan</code> in MS, and\r\n          <code>cycleSpan</code> in MS. Overwriting them changes the value for repeated calls within the same cycle.\r\n        </li>\r\n        <li>\r\n          The SV function is called once every divisor of every cycle.\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n"

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
/* harmony import */ var _sv_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sv-functions */ "./src/app/sv-functions.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _select_function_dialog_select_function_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../select-function-dialog/select-function-dialog.component */ "./src/app/select-function-dialog/select-function-dialog.component.ts");
/* harmony import */ var _delete_function_dialog_delete_function_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../delete-function-dialog/delete-function-dialog.component */ "./src/app/delete-function-dialog/delete-function-dialog.component.ts");
/* harmony import */ var file_saver_FileSaver_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver/FileSaver.js */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver_FileSaver_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver_FileSaver_js__WEBPACK_IMPORTED_MODULE_6__);







var FunctionEditorComponent = /** @class */ (function () {
    function FunctionEditorComponent(dialog) {
        this.dialog = dialog;
        this.displayedColumns = [
            'paramName',
            'description',
            'defaultValue',
            'actions'
        ];
        this.editorOptions = {
            enableLiveAutocompletion: true
        };
        this.currentFunction = new _sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunction"](_sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunctionType"].SV);
    }
    FunctionEditorComponent.prototype.ngOnInit = function () {
    };
    FunctionEditorComponent.prototype.onNew = function () {
        this.currentFunction = new _sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunction"](_sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunctionType"].SV);
    };
    FunctionEditorComponent.prototype.onLoad = function () {
        var _this = this;
        var opendialog = this.dialog.open(_select_function_dialog_select_function_dialog_component__WEBPACK_IMPORTED_MODULE_4__["SelectFunctionDialogComponent"]);
        opendialog.afterClosed().subscribe(function (value) {
            if (value) {
                _this.currentFunction = value;
            }
        });
    };
    FunctionEditorComponent.prototype.onSave = function () {
        if (this.currentFunction.name === '' ||
            this.currentFunction.name === _sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunction"].defaultName) {
            var ret = prompt('The function is unnamed. What will you name it?');
            if (ret != null) {
                this.currentFunction.name = ret;
            }
        }
        var msg = "The function named \"" + this.currentFunction.name + "\" already exists. Overwrite?";
        var funcobj = _sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunctionCollection"].getCollection();
        if (!funcobj[this.currentFunction.name] ||
            (funcobj[this.currentFunction.name] && confirm(msg))) {
            funcobj[this.currentFunction.name] = this.currentFunction;
            _sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunctionCollection"].setCollection(funcobj);
            alert("Function " + this.currentFunction.name + " saved correctly.");
        }
    };
    FunctionEditorComponent.prototype.onDelete = function () {
        var deletedialog = this.dialog.open(_delete_function_dialog_delete_function_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DeleteFunctionDialogComponent"]);
    };
    FunctionEditorComponent.prototype.addParam = function () {
        var newParam = new _sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvParameter"]();
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
        var collStr = JSON.stringify(_sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunctionCollection"].getCollection());
        var collBlob = new Blob([collStr]);
        Object(file_saver_FileSaver_js__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(collBlob, 'export.json');
    };
    FunctionEditorComponent.prototype.ngAfterViewInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FunctionEditorComponent.prototype, "editor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paramTable'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FunctionEditorComponent.prototype, "paramTable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunctionCollection"])
    ], FunctionEditorComponent.prototype, "collection", void 0);
    FunctionEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-function-editor',
            template: __webpack_require__(/*! ./function-editor.component.html */ "./src/app/function-editor/function-editor.component.html"),
            styles: [__webpack_require__(/*! ./function-editor.component.css */ "./src/app/function-editor/function-editor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], FunctionEditorComponent);
    return FunctionEditorComponent;
}());



/***/ }),

/***/ "./src/app/osu-timestamp.ts":
/*!**********************************!*\
  !*** ./src/app/osu-timestamp.ts ***!
  \**********************************/
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

/***/ "./src/app/osu-timing-point-emitter.ts":
/*!*********************************************!*\
  !*** ./src/app/osu-timing-point-emitter.ts ***!
  \*********************************************/
/*! exports provided: OsuTimingPointEmitter, emitTargets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OsuTimingPointEmitter", function() { return OsuTimingPointEmitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emitTargets", function() { return emitTargets; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _divisor_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./divisor-emitter */ "./src/app/divisor-emitter.ts");
/* harmony import */ var _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cycle-time-emitter */ "./src/app/cycle-time-emitter.ts");
/* harmony import */ var _sv_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sv-functions */ "./src/app/sv-functions.ts");




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
    OsuTimingPointEmitter.emitBpmFunction = function (vars, cycle, defaultTimingPoint, bpmFunction) {
        var i, cl, it, divisor, bpm, point;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    vars.builtin.divisorCount = cycle.count;
                    cl = cycle.cycle;
                    _a.label = 1;
                case 1:
                    if (!(it = cl.next())) return [3 /*break*/, 3];
                    if (it.done) {
                        return [3 /*break*/, 3];
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
                    return [4 /*yield*/, point];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    };
    OsuTimingPointEmitter.emitSv = function (vars, cycle, defaultTimingPoint, svFunction) {
        var i, lastSv, cl, it, divisor, multiplier, point;
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
                    if (!(multiplier !== lastSv)) return [3 /*break*/, 3];
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

function emitTargets(timeInput, divisors, svFunction, timeFunction, defaultTimingPoint, fixedBpm, includeDivisorAtEnd) {
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
        var cycleData = timeInput.createCycle(i, divisors, userFunctionTime, varsTime, includeDivisorAtEnd && (i === (cycleCount - 1)));
        var cycleResult = void 0;
        if (svFunction) {
            if (svFunction.type === _sv_functions__WEBPACK_IMPORTED_MODULE_3__["SvFunctionType"].BPM) {
                cycleResult = OsuTimingPointEmitter.emitBpmFunction(varsSv, cycleData, defaultTimingPoint, userFunctionSV);
            }
            else {
                cycleResult = OsuTimingPointEmitter.emitSv(varsSv, cycleData, defaultTimingPoint, userFunctionSV);
            }
        }
        else {
            cycleResult = OsuTimingPointEmitter.emitFixedBpm(cycleData, defaultTimingPoint, fixedBpm);
        }
        var res = cycleResult.next();
        while (!res.done) {
            output.push(res.value.toString());
            res = cycleResult.next();
        }
    }
    return output;
}


/***/ }),

/***/ "./src/app/osu-timing-point.ts":
/*!*************************************!*\
  !*** ./src/app/osu-timing-point.ts ***!
  \*************************************/
/*! exports provided: SampleSet, OsuTimingPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleSet", function() { return SampleSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OsuTimingPoint", function() { return OsuTimingPoint; });
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
    Object.defineProperty(OsuTimingPoint.prototype, "inheritedInt", {
        get: function () {
            return (this.inherited == true) ? 0 : 1;
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
    OsuTimingPoint.prototype.toString = function () {
        return this.roundedTime + "," + this.value + "," + this.measureLength + "," +
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
        if (changes && changes.inherited !== undefined)
            ret.inherited = changes.inherited;
        else
            ret.inherited = this.inherited;
        return ret;
    };
    return OsuTimingPoint;
}());



/***/ }),

/***/ "./src/app/select-emission-function/select-emission-function.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/select-emission-function/select-emission-function.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdC1lbWlzc2lvbi1mdW5jdGlvbi9zZWxlY3QtZW1pc3Npb24tZnVuY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/select-emission-function/select-emission-function.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/select-emission-function/select-emission-function.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\r\n  <h2 matDialogTitle>Select emission function...</h2>\r\n  <mat-select [(ngModel)]=\"selectedFunction\">\r\n    <mat-option *ngFor=\"let func of collection\" [value]=\"func\">\r\n      {{ SvFunctionType[func.type || 0] }} - {{ func.name }}\r\n    </mat-option>\r\n  </mat-select>\r\n\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"selectedFunction\">Select</button>\r\n  <button mat-button mat-dialog-close>Cancel</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/select-emission-function/select-emission-function.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/select-emission-function/select-emission-function.component.ts ***!
  \********************************************************************************/
/*! exports provided: SelectEmissionFunctionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectEmissionFunctionComponent", function() { return SelectEmissionFunctionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _sv_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sv-functions */ "./src/app/sv-functions.ts");




var SelectEmissionFunctionComponent = /** @class */ (function () {
    function SelectEmissionFunctionComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.SvFunctionType = _sv_functions__WEBPACK_IMPORTED_MODULE_3__["SvFunctionType"];
        this.collection = [];
        // console.log(this.SvFunctionType);
        var typeSet = new Set(data.allowedFunctionTypes);
        // console.log(typeSet);
        var funcCollection = _sv_functions__WEBPACK_IMPORTED_MODULE_3__["SvFunctionCollection"].getCollection();
        // console.log(funcCollection);
        for (var key in funcCollection) {
            var func = funcCollection[key];
            var isSvFunction = func.type === undefined || func.type === _sv_functions__WEBPACK_IMPORTED_MODULE_3__["SvFunctionType"].SV;
            // console.log(func);
            // console.log(isSvFunction);
            // only allowed functions are displayed in this dialog
            if ((isSvFunction && typeSet.has(_sv_functions__WEBPACK_IMPORTED_MODULE_3__["SvFunctionType"].SV) ||
                typeSet.has(func.type))) {
                this.collection.push(func);
            }
        }
    }
    SelectEmissionFunctionComponent.prototype.ngOnInit = function () {
    };
    SelectEmissionFunctionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-emission-function',
            template: __webpack_require__(/*! ./select-emission-function.component.html */ "./src/app/select-emission-function/select-emission-function.component.html"),
            styles: [__webpack_require__(/*! ./select-emission-function.component.css */ "./src/app/select-emission-function/select-emission-function.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], SelectEmissionFunctionComponent);
    return SelectEmissionFunctionComponent;
}());



/***/ }),

/***/ "./src/app/select-function-dialog/select-function-dialog.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/select-function-dialog/select-function-dialog.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdC1mdW5jdGlvbi1kaWFsb2cvc2VsZWN0LWZ1bmN0aW9uLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/select-function-dialog/select-function-dialog.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/select-function-dialog/select-function-dialog.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Open...</h2>\r\n<mat-dialog-content>\r\n  <mat-form-field>\r\n    <mat-select [(ngModel)]=\"selection\">\r\n      <mat-option *ngFor=\"let f of collection\" [value]=\"f\">\r\n        {{ f.name }}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"selection\">Select</button>\r\n  <button mat-button mat-dialog-close>Cancel</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/select-function-dialog/select-function-dialog.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/select-function-dialog/select-function-dialog.component.ts ***!
  \****************************************************************************/
/*! exports provided: SelectFunctionDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectFunctionDialogComponent", function() { return SelectFunctionDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sv_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sv-functions */ "./src/app/sv-functions.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var SelectFunctionDialogComponent = /** @class */ (function () {
    function SelectFunctionDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.collection = [];
        var funcCollection = _sv_functions__WEBPACK_IMPORTED_MODULE_2__["SvFunctionCollection"].getCollection();
        for (var func in funcCollection) {
            this.collection.push(funcCollection[func]);
        }
    }
    SelectFunctionDialogComponent.prototype.ngOnInit = function () {
    };
    SelectFunctionDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-function-dialog',
            template: __webpack_require__(/*! ./select-function-dialog.component.html */ "./src/app/select-function-dialog/select-function-dialog.component.html"),
            styles: [__webpack_require__(/*! ./select-function-dialog.component.css */ "./src/app/select-function-dialog/select-function-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], SelectFunctionDialogComponent);
    return SelectFunctionDialogComponent;
}());



/***/ }),

/***/ "./src/app/sv-functions.ts":
/*!*********************************!*\
  !*** ./src/app/sv-functions.ts ***!
  \*********************************/
/*! exports provided: SvFunctionType, SvParameter, SvFunction, SvFunctionCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvFunctionType", function() { return SvFunctionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvParameter", function() { return SvParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvFunction", function() { return SvFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvFunctionCollection", function() { return SvFunctionCollection; });
/* harmony import */ var _builtin_sv_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builtin-sv-functions */ "./src/app/builtin-sv-functions.ts");

var SvFunctionType;
(function (SvFunctionType) {
    SvFunctionType[SvFunctionType["SV"] = 0] = "SV";
    SvFunctionType[SvFunctionType["BPM"] = 1] = "BPM";
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
        if (type === SvFunctionType.SV || type === SvFunctionType.BPM) {
            this.body =
                "(() => {\n    // Put your inner state here\n    // var persistent = 10;\n\n    // Return SV value given fraction x\n    // user param are strings: param[\"myParamName\"]\n    return (x, params) => {\n        return 1;\n    }\n})();";
        }
        else {
            this.body = ''; // todo xoxo
        }
        this.name = SvFunction.defaultName;
        this.tooltip = '';
    }
    Object.defineProperty(SvFunction.prototype, "isBpm", {
        get: function () {
            return this.type === SvFunctionType.BPM;
        },
        set: function (value) {
            this.type = value ? SvFunctionType.BPM : SvFunctionType.SV;
        },
        enumerable: true,
        configurable: true
    });
    SvFunction.getCurrentParameters = function (it) {
        var ret = {};
        for (var _i = 0, _a = it.parameters; _i < _a.length; _i++) {
            var param = _a[_i];
            ret[param.name] = param.currentValue || param.defaultValue;
        }
        return ret;
    };
    SvFunction.defaultName = 'unnamed';
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
    return SvFunctionCollection;
}());



/***/ }),

/***/ "./src/app/timeinput/timeinput-beatfraction/timeinput-beatfraction.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/timeinput/timeinput-beatfraction/timeinput-beatfraction.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWVpbnB1dC90aW1laW5wdXQtYmVhdGZyYWN0aW9uL3RpbWVpbnB1dC1iZWF0ZnJhY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/timeinput/timeinput-beatfraction/timeinput-beatfraction.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/timeinput/timeinput-beatfraction/timeinput-beatfraction.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"fullwidth\">\r\n  <input matInput type=\"number\" placeholder=\"BPM\" [(ngModel)]=\"currentTimeInput.bpm\">\r\n</mat-form-field>\r\n\r\n<mat-form-field class=\"fullwidth\">\r\n  <input matInput type=\"number\" [(ngModel)]=\"currentTimeInput.beatDivisor\" placeholder=\"Beat parts per cycle\">\r\n</mat-form-field>\r\n\r\n<mat-form-field class=\"fullwidth\">\r\n  <input matInput type=\"number\" [(ngModel)]=\"currentTimeInput.totalBeats\" placeholder=\"Total duration (beats)\">\r\n</mat-form-field>\r\n"

/***/ }),

/***/ "./src/app/timeinput/timeinput-beatfraction/timeinput-beatfraction.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/timeinput/timeinput-beatfraction/timeinput-beatfraction.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TimeinputBeatfractionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeinputBeatfractionComponent", function() { return TimeinputBeatfractionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cycle-time-emitter */ "./src/app/cycle-time-emitter.ts");



var TimeinputBeatfractionComponent = /** @class */ (function () {
    function TimeinputBeatfractionComponent() {
    }
    TimeinputBeatfractionComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeBeatFraction"])
    ], TimeinputBeatfractionComponent.prototype, "currentTimeInput", void 0);
    TimeinputBeatfractionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeinput-beatfraction',
            template: __webpack_require__(/*! ./timeinput-beatfraction.component.html */ "./src/app/timeinput/timeinput-beatfraction/timeinput-beatfraction.component.html"),
            styles: [__webpack_require__(/*! ./timeinput-beatfraction.component.css */ "./src/app/timeinput/timeinput-beatfraction/timeinput-beatfraction.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimeinputBeatfractionComponent);
    return TimeinputBeatfractionComponent;
}());



/***/ }),

/***/ "./src/app/timeinput/timeinput-beats/timeinput-beats.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/timeinput/timeinput-beats/timeinput-beats.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWVpbnB1dC90aW1laW5wdXQtYmVhdHMvdGltZWlucHV0LWJlYXRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/timeinput/timeinput-beats/timeinput-beats.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/timeinput/timeinput-beats/timeinput-beats.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"fullwidth\">\r\n    <input matInput type=\"number\" [(ngModel)]=\"currentTimeInput.bpm\" placeholder=\"BPM\">\r\n</mat-form-field>\r\n\r\n<br/>\r\n\r\n<mat-form-field class=\"fullwidth\">\r\n    <input matInput type=\"number\" [(ngModel)]=\"currentTimeInput.beats\" placeholder=\"Beats\">\r\n</mat-form-field>"

/***/ }),

/***/ "./src/app/timeinput/timeinput-beats/timeinput-beats.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/timeinput/timeinput-beats/timeinput-beats.component.ts ***!
  \************************************************************************/
/*! exports provided: TimeinputBeatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeinputBeatsComponent", function() { return TimeinputBeatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cycle-time-emitter */ "./src/app/cycle-time-emitter.ts");



var TimeinputBeatsComponent = /** @class */ (function () {
    function TimeinputBeatsComponent() {
    }
    TimeinputBeatsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeBeats"])
    ], TimeinputBeatsComponent.prototype, "currentTimeInput", void 0);
    TimeinputBeatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeinput-beats',
            template: __webpack_require__(/*! ./timeinput-beats.component.html */ "./src/app/timeinput/timeinput-beats/timeinput-beats.component.html"),
            styles: [__webpack_require__(/*! ./timeinput-beats.component.css */ "./src/app/timeinput/timeinput-beats/timeinput-beats.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimeinputBeatsComponent);
    return TimeinputBeatsComponent;
}());



/***/ }),

/***/ "./src/app/timeinput/timeinput-duration/timeinput-duration.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/timeinput/timeinput-duration/timeinput-duration.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWVpbnB1dC90aW1laW5wdXQtZHVyYXRpb24vdGltZWlucHV0LWR1cmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/timeinput/timeinput-duration/timeinput-duration.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/timeinput/timeinput-duration/timeinput-duration.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"fullwidth\">\r\n    <input matInput type=\"number\" [(ngModel)]=\"currentTimeInput.duration\" placeholder=\"Duration\">\r\n</mat-form-field>\r\n"

/***/ }),

/***/ "./src/app/timeinput/timeinput-duration/timeinput-duration.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/timeinput/timeinput-duration/timeinput-duration.component.ts ***!
  \******************************************************************************/
/*! exports provided: TimeinputDurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeinputDurationComponent", function() { return TimeinputDurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cycle-time-emitter */ "./src/app/cycle-time-emitter.ts");



var TimeinputDurationComponent = /** @class */ (function () {
    function TimeinputDurationComponent() {
    }
    TimeinputDurationComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeMsDuration"])
    ], TimeinputDurationComponent.prototype, "currentTimeInput", void 0);
    TimeinputDurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeinput-duration',
            template: __webpack_require__(/*! ./timeinput-duration.component.html */ "./src/app/timeinput/timeinput-duration/timeinput-duration.component.html"),
            styles: [__webpack_require__(/*! ./timeinput-duration.component.css */ "./src/app/timeinput/timeinput-duration/timeinput-duration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimeinputDurationComponent);
    return TimeinputDurationComponent;
}());



/***/ }),

/***/ "./src/app/timeinput/timeinput-notetimes/timeinput-notetimes.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/timeinput/timeinput-notetimes/timeinput-notetimes.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWVpbnB1dC90aW1laW5wdXQtbm90ZXRpbWVzL3RpbWVpbnB1dC1ub3RldGltZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/timeinput/timeinput-notetimes/timeinput-notetimes.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/timeinput/timeinput-notetimes/timeinput-notetimes.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isFixedDuration\">\r\n  <mat-form-field class=\"fullwidth\">\r\n    <mat-select [(ngModel)]=\"innerTimeType\" placeholder=\"Cycle Time Type\">\r\n      <mat-option [value]=\"TimeInputType.Span\">\r\n        Duration (MS)\r\n      </mat-option>\r\n      <mat-option [value]=\"TimeInputType.Beats\">\r\n        Beats\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <br>\r\n\r\n  <app-timeinput-duration [currentTimeInput]=\"innerTimeInput\" *ngIf=\"innerTimeType == TimeInputType.Span\"></app-timeinput-duration>\r\n  <app-timeinput-beats [currentTimeInput]=\"innerTimeInput\" *ngIf=\"innerTimeType == TimeInputType.Beats\"></app-timeinput-beats>\r\n</div>\r\n\r\n<br>\r\n\r\n<mat-form-field class=\"fullwidth\">\r\n  <textarea matInput [(ngModel)]=\"currentTimeInput.notes\" placeholder=\"Note data (paste from osu editor)\"></textarea>\r\n</mat-form-field>\r\n\r\n<!-- <div class=\"alert alert-secondary\">\r\n  {{ currentTimeInput.noteTimes.join(\", \") }}\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/timeinput/timeinput-notetimes/timeinput-notetimes.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/timeinput/timeinput-notetimes/timeinput-notetimes.component.ts ***!
  \********************************************************************************/
/*! exports provided: TimeinputNotetimesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeinputNotetimesComponent", function() { return TimeinputNotetimesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cycle-time-emitter */ "./src/app/cycle-time-emitter.ts");



var TimeinputNotetimesComponent = /** @class */ (function () {
    function TimeinputNotetimesComponent() {
        this.TimeInputType = _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleEmissionType"];
        this.TimeInputNotetimeFixedDuration = _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeNotetimeFixedDuration"];
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
            if (type == _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleEmissionType"].Span) {
                var timeInput = new _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeMsDuration"]();
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
            if (type == _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleEmissionType"].Beats) {
                var timeInput = new _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeBeats"]();
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
            return this.currentTimeInput instanceof _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeNotetimeFixedDuration"];
        },
        enumerable: true,
        configurable: true
    });
    TimeinputNotetimesComponent.prototype.ngOnInit = function () {
        this.innerTimeType = _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleEmissionType"].Span;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeNotetime"])
    ], TimeinputNotetimesComponent.prototype, "currentTimeInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeEmitter"])
    ], TimeinputNotetimesComponent.prototype, "innerTimeInput", void 0);
    TimeinputNotetimesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeinput-notetimes',
            template: __webpack_require__(/*! ./timeinput-notetimes.component.html */ "./src/app/timeinput/timeinput-notetimes/timeinput-notetimes.component.html"),
            styles: [__webpack_require__(/*! ./timeinput-notetimes.component.css */ "./src/app/timeinput/timeinput-notetimes/timeinput-notetimes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimeinputNotetimesComponent);
    return TimeinputNotetimesComponent;
}());



/***/ }),

/***/ "./src/app/timeinput/timeinput-startend/timeinput-startend.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/timeinput/timeinput-startend/timeinput-startend.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWVpbnB1dC90aW1laW5wdXQtc3RhcnRlbmQvdGltZWlucHV0LXN0YXJ0ZW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/timeinput/timeinput-startend/timeinput-startend.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/timeinput/timeinput-startend/timeinput-startend.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"fullwidth\">\r\n  <input matInput \r\n         (change)=\"validateTimestamp($event)\" \r\n         type=\"text\" \r\n         [(ngModel)]=\"currentTimeInput.endTime\" \r\n         placeholder=\"End Time\">\r\n</mat-form-field>"

/***/ }),

/***/ "./src/app/timeinput/timeinput-startend/timeinput-startend.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/timeinput/timeinput-startend/timeinput-startend.component.ts ***!
  \******************************************************************************/
/*! exports provided: TimeinputStartendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeinputStartendComponent", function() { return TimeinputStartendComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cycle-time-emitter */ "./src/app/cycle-time-emitter.ts");
/* harmony import */ var _osu_timestamp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../osu-timestamp */ "./src/app/osu-timestamp.ts");




var TimeinputStartendComponent = /** @class */ (function () {
    function TimeinputStartendComponent() {
    }
    TimeinputStartendComponent.prototype.validateTimestamp = function (event) {
        var value = event.target.value;
        var validatedValue = Object(_osu_timestamp__WEBPACK_IMPORTED_MODULE_3__["validateTimestamp"])(value);
        if (!isNaN(validatedValue))
            this.currentTimeInput.endTime = validatedValue;
    };
    TimeinputStartendComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeDeltatime"])
    ], TimeinputStartendComponent.prototype, "currentTimeInput", void 0);
    TimeinputStartendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeinput-startend',
            template: __webpack_require__(/*! ./timeinput-startend.component.html */ "./src/app/timeinput/timeinput-startend/timeinput-startend.component.html"),
            styles: [__webpack_require__(/*! ./timeinput-startend.component.css */ "./src/app/timeinput/timeinput-startend/timeinput-startend.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimeinputStartendComponent);
    return TimeinputStartendComponent;
}());



/***/ }),

/***/ "./src/app/timeinput/timeinput.component.css":
/*!***************************************************!*\
  !*** ./src/app/timeinput/timeinput.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWVpbnB1dC90aW1laW5wdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/timeinput/timeinput.component.html":
/*!****************************************************!*\
  !*** ./src/app/timeinput/timeinput.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"fullwidth\">\r\n  <mat-select [(ngModel)]=\"newType\" placeholder=\"Model type...\">\r\n    <mat-option [value]=\"TimeInputType.Span\">\r\n      Duration (MS)\r\n    </mat-option>\r\n    <mat-option [value]=\"TimeInputType.Delta\">\r\n      Start-End time pair\r\n    </mat-option>\r\n    <mat-option [value]=\"TimeInputType.Beats\">\r\n      Beats\r\n    </mat-option>\r\n    <mat-option [value]=\"TimeInputType.BeatDivision\">\r\n      Beat fractions\r\n    </mat-option>\r\n    <mat-option [value]=\"TimeInputType.NotetimeSpan\">\r\n      Based on notes (fixed duration)\r\n    </mat-option>\r\n    <mat-option [value]=\"TimeInputType.NoteToNote\">\r\n      Based on notes (note to note)\r\n    </mat-option>\r\n  </mat-select>\r\n\r\n</mat-form-field>\r\n<br/>\r\n\r\n<mat-form-field class=\"fullwidth\">\r\n  <input matInput type=\"text\" (change)=\"validateTimestamp($event)\" [(ngModel)]=\"currentTimeInput.startTime\" placeholder=\"Start time\">\r\n</mat-form-field>\r\n<br/>\r\n\r\n<mat-form-field *ngIf=\"!currentTimeInput.autocycle\" class=\"fullwidth\">\r\n  <input matInput type=\"number\" [(ngModel)]=\"currentTimeInput.cycleCount\" placeholder=\"Cycle count\">\r\n</mat-form-field>\r\n<br/>\r\n\r\n<app-timeinput-duration [currentTimeInput]=\"currentTimeInput\" *ngIf=\"timeType == TimeInputType.Span\">\r\n</app-timeinput-duration>\r\n\r\n<app-timeinput-startend [currentTimeInput]=\"currentTimeInput\" *ngIf=\"timeType == TimeInputType.Delta\">\r\n</app-timeinput-startend>\r\n\r\n<app-timeinput-beats [currentTimeInput]=\"currentTimeInput\" *ngIf=\"timeType == TimeInputType.Beats\">\r\n</app-timeinput-beats>\r\n\r\n<app-timeinput-notetimes [currentTimeInput]=\"currentTimeInput\" *ngIf=\"timeType == TimeInputType.NotetimeSpan || timeType == TimeInputType.NoteToNote\">\r\n</app-timeinput-notetimes>\r\n\r\n<app-timeinput-beatfraction [currentTimeInput]=\"currentTimeInput\" *ngIf=\"timeType == TimeInputType.BeatDivision\">\r\n</app-timeinput-beatfraction>\r\n\r\n<div *ngIf=\"currentTimeInput.isConstantCycleTime\" class=\"alert alert-secondary\">\r\n  <b>Used Cycle Time (MS):</b> {{ currentTimeInput.cycleDuration }}\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/timeinput/timeinput.component.ts":
/*!**************************************************!*\
  !*** ./src/app/timeinput/timeinput.component.ts ***!
  \**************************************************/
/*! exports provided: TimeinputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeinputComponent", function() { return TimeinputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cycle-time-emitter */ "./src/app/cycle-time-emitter.ts");
/* harmony import */ var _osu_timestamp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../osu-timestamp */ "./src/app/osu-timestamp.ts");




var TimeinputComponent = /** @class */ (function () {
    function TimeinputComponent() {
        this.TimeInputType = _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleEmissionType"];
        this.timeInputs = {
            0: new _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeMsDuration"](),
            1: new _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeDeltatime"](),
            2: new _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeBeats"](),
            3: new _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeBeatFraction"](),
            4: new _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeNotetimeFixedDuration"](),
            5: new _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleTimeNoteToNote"]()
        };
        this.timeType = _cycle_time_emitter__WEBPACK_IMPORTED_MODULE_2__["CycleEmissionType"].Span;
        this.currentTimeInput = this.timeInputs[this.timeType];
    }
    TimeinputComponent.prototype.validateTimestamp = function (event) {
        var value = event.target.value;
        var validatedValue = Object(_osu_timestamp__WEBPACK_IMPORTED_MODULE_3__["validateTimestamp"])(value);
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
            template: __webpack_require__(/*! ./timeinput.component.html */ "./src/app/timeinput/timeinput.component.html"),
            styles: [__webpack_require__(/*! ./timeinput.component.css */ "./src/app/timeinput/timeinput.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimeinputComponent);
    return TimeinputComponent;
}());



/***/ }),

/***/ "./src/app/timing-point-template/timing-point-template.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/timing-point-template/timing-point-template.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWluZy1wb2ludC10ZW1wbGF0ZS90aW1pbmctcG9pbnQtdGVtcGxhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/timing-point-template/timing-point-template.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/timing-point-template/timing-point-template.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"fullwidth\">\r\n    <mat-select [(ngModel)]=\"currentTimingPoint.sampleSet\" placeholder=\"Sample Set\">\r\n        <mat-option [value]=\"SampleSet.Auto\">\r\n          Auto\r\n        </mat-option>\r\n        <mat-option [value]=\"SampleSet.Normal\">\r\n          Normal\r\n        </mat-option>\r\n        <mat-option [value]=\"SampleSet.Soft\">\r\n          Soft\r\n        </mat-option>\r\n        <mat-option [value]=\"SampleSet.Drum\">\r\n          Drum\r\n        </mat-option>\r\n    </mat-select>\r\n</mat-form-field>\r\n\r\n<mat-form-field class=\"fullwidth\">\r\n  <input matInput type=\"number\" placeholder=\"Volume\" [(ngModel)]=\"currentTimingPoint.volume\">\r\n</mat-form-field>\r\n\r\n<mat-form-field class=\"fullwidth\">\r\n  <input matInput type=\"number\" placeholder=\"Sampleset Index\" [(ngModel)]=\"currentTimingPoint.sampleIndex\">\r\n</mat-form-field>\r\n\r\n<mat-form-field class=\"fullwidth\">\r\n  <input matInput type=\"number\" placeholder=\"Measure Length\" [(ngModel)]=\"currentTimingPoint.measureLength\">\r\n</mat-form-field>\r\n\r\n<br>\r\n\r\n<mat-checkbox [(ngModel)]=\"currentTimingPoint.kiai\">\r\n  Kiai\r\n</mat-checkbox>\r\n"

/***/ }),

/***/ "./src/app/timing-point-template/timing-point-template.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/timing-point-template/timing-point-template.component.ts ***!
  \**************************************************************************/
/*! exports provided: TimingPointTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimingPointTemplateComponent", function() { return TimingPointTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _osu_timing_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../osu-timing-point */ "./src/app/osu-timing-point.ts");

///<reference path="../osu-timing-point.ts"/>


var TimingPointTemplateComponent = /** @class */ (function () {
    function TimingPointTemplateComponent() {
        this.SampleSet = _osu_timing_point__WEBPACK_IMPORTED_MODULE_2__["SampleSet"];
        this.currentTimingPoint = new _osu_timing_point__WEBPACK_IMPORTED_MODULE_2__["OsuTimingPoint"]();
    }
    TimingPointTemplateComponent.prototype.ngOnInit = function () {
    };
    TimingPointTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timing-point-template',
            template: __webpack_require__(/*! ./timing-point-template.component.html */ "./src/app/timing-point-template/timing-point-template.component.html"),
            styles: [__webpack_require__(/*! ./timing-point-template.component.css */ "./src/app/timing-point-template/timing-point-template.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimingPointTemplateComponent);
    return TimingPointTemplateComponent;
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