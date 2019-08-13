import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {TimeinputComponent} from '../../emitter-input/timeinput/timeinput.component';
import {DivisorInputComponent} from '../../emitter-input/divisorinput/divisor-input.component';
import {SelectEmitterFunctionComponent} from '../../emitter-input/select-emitter-function/select-emitter-function.component';
import {OsuTimingPoint} from '../../blackhole-classes/osu-timing-point';
import {emitTargets} from '../../blackhole-classes/osu-timing-point-emitter';

@Component({
  selector: 'app-emitter-parameter-trio',
  templateUrl: './emitter-parameter-trio.component.html',
  styleUrls: ['./emitter-parameter-trio.component.css']
})
export class EmitterParameterTrioComponent implements OnInit {
  @ViewChild(TimeinputComponent, {static: true})
  timeInput: TimeinputComponent;

  @ViewChild(DivisorInputComponent, {static: true})
  divisorInput: DivisorInputComponent;

  @ViewChild(SelectEmitterFunctionComponent, {static: true})
  funcInput: SelectEmitterFunctionComponent;

  @Output() onRemove = new EventEmitter();


  get functitle() {
    if (this.funcInput.currentFunction) {
      return this.funcInput.currentFunction.name;
    } else {
      if (this.funcInput.useFixedBpm) {
        return 'bpm: ' + this.funcInput.bpm;
      }
    }

    return 'unknown';
  }

  constructor() { }

  removeSelf() {
    this.onRemove.emit(this);
  }

  emit(template: OsuTimingPoint): OsuTimingPoint[] {
    const ti = this.timeInput.currentTimeInput;
    const di = this.divisorInput.currentDivisorInput;
    const fp = this.funcInput;
    const func = fp.useFixedBpm ? null : fp.currentFunction;

    return emitTargets(
      ti,
      di,
      func,
      fp.currentTimeFunction,
      template,
      fp.bpm,
      this.divisorInput.endDivisorMode
    );
  }

  ngOnInit() {
  }

}
