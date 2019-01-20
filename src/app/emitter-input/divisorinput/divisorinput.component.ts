import { Component, OnInit } from '@angular/core';
import { DivisorEmitter, DivisorEmitterByCount, DivisorEmitterBeatFraction, DivisorInputType, DivisorEmitterTimeSpan } from '../../blackhole-classes/divisor-emitter';

@Component({
  selector: 'app-divisorinput',
  templateUrl: './divisorinput.component.html',
  styleUrls: ['./divisorinput.component.css']
})
export class DivisorinputComponent implements OnInit {

  type: DivisorInputType;

  currentDivisorInput: DivisorEmitter;

  DivisorInputType = DivisorInputType;

  constructor() { 
    this.type = DivisorInputType.Fixed;
    this.onTypeChange(null);
  }

  onTypeChange(e) {
    if (this.type === DivisorInputType.Fixed)
      this.currentDivisorInput = new DivisorEmitterByCount();
    if (this.type === DivisorInputType.BPM)
      this.currentDivisorInput = new DivisorEmitterBeatFraction();
    if (this.type === DivisorInputType.Span)
      this.currentDivisorInput = new DivisorEmitterTimeSpan();
  }

  ngOnInit() {

  }

}
