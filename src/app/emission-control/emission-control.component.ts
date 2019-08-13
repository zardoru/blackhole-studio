import {Component, OnInit, ViewChild} from '@angular/core';
import {TimeinputComponent} from '../emitter-input/timeinput/timeinput.component';
import {DivisorInputComponent} from '../emitter-input/divisorinput/divisor-input.component';
import {TimingPointTemplateComponent} from '../emitter-input/timeinput/timing-point-template/timing-point-template.component';
import {emitTargets} from '../blackhole-classes/osu-timing-point-emitter';
import {SelectEmitterFunctionComponent} from '../emitter-input/select-emitter-function/select-emitter-function.component';
import {EndPointMode} from '../blackhole-classes/divisor-emitter';

@Component({
  selector: 'app-emission-control',
  templateUrl: './emission-control.component.html',
  styleUrls: ['./emission-control.component.css']
})
export class EmissionControlComponent implements OnInit {
  @ViewChild(TimeinputComponent, {static: true})
  timeInput: TimeinputComponent;

  @ViewChild(DivisorInputComponent, {static: true})
  divisorInput: DivisorInputComponent;

  @ViewChild(TimingPointTemplateComponent, {static: true})
  timingPointTemplate: TimingPointTemplateComponent;

  @ViewChild(SelectEmitterFunctionComponent, {static: true})
  funcParams: SelectEmitterFunctionComponent;

  output: string;

  error: any;

  constructor() {
    this.error = null;
    this.output = '';
    // this.output = "hello world";
  }


  emit() {
    const timeInput = this.timeInput.currentTimeInput;
    const divInput = this.divisorInput.currentDivisorInput;
    const timingDefault = this.timingPointTemplate.currentTimingPoint;

    // console.log(timeInput);
    // console.log(divInput);
    // console.log(timingDefault);

    try {
      const result = emitTargets(
        timeInput,
        divInput,
        /*
        todo: wrap this extra funcParams data into
        its own type that doesn't depend on the component
        */
        this.funcParams.useFixedBpm ? null : this.funcParams.currentFunction,
        this.funcParams.currentTimeFunction,
        timingDefault,
        this.funcParams.bpm,
        this.divisorInput.endDivisorMode
      ).map(x => x.toString());

      this.output = result.join('\n');
      this.error = null;
    } catch (err) {
      console.log(err);

      this.error = err;
    }
  }

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
  ngOnInit() {
  }

}
