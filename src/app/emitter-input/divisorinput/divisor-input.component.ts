import {Component, OnInit} from '@angular/core';
import {
  DivisorEmitter,
  DivisorEmitterBeatFraction,
  DivisorEmitterByCount,
  DivisorEmitterTimeSpan,
  DivisorInputType,
  EndPointMode
} from '../../blackhole-classes/divisor-emitter';

@Component({
  selector: 'app-divisorinput',
  templateUrl: './divisor-input.component.html',
  styleUrls: ['./divisor-input.component.css']
})
export class DivisorInputComponent implements OnInit {

  type: DivisorInputType;

  currentDivisorInput: DivisorEmitter;

  DivisorInputType = DivisorInputType;

  endDivisorMode: EndPointMode;

  EndPointMode = EndPointMode;

  constructor() {
    this.type = DivisorInputType.Fixed;
    this.endDivisorMode = EndPointMode.NoEndPoint;
    this.onTypeChange();
  }

  onTypeChange() {
    if (this.type === DivisorInputType.Fixed) {
      this.currentDivisorInput = new DivisorEmitterByCount();
    }
    if (this.type === DivisorInputType.BPM) {
      this.currentDivisorInput = new DivisorEmitterBeatFraction();
    }
    if (this.type === DivisorInputType.Span) {
      this.currentDivisorInput = new DivisorEmitterTimeSpan();
    }
  }

  ngOnInit() {

  }

}
