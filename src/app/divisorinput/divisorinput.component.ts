import { Component, OnInit } from '@angular/core';
import { DivisorInput, DivisorInputFixed, DivisorInputBPM, DivisorInputType } from '../divisor-input';

@Component({
  selector: 'app-divisorinput',
  templateUrl: './divisorinput.component.html',
  styleUrls: ['./divisorinput.component.css']
})
export class DivisorinputComponent implements OnInit {

  type: DivisorInputType;

  currentDivisorInput: DivisorInput;

  DivisorInputType = DivisorInputType;

  constructor() { 
    this.type = DivisorInputType.Fixed;
    this.onTypeChange(null);
  }

  onTypeChange(e) {
    if (this.type === DivisorInputType.Fixed)
      this.currentDivisorInput = new DivisorInputFixed();
    if (this.type === DivisorInputType.BPM)
      this.currentDivisorInput = new DivisorInputBPM();
  }

  ngOnInit() {

  }

}
