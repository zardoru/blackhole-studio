import {Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {TimingPointTemplateComponent} from '../emitter-input/timeinput/timing-point-template/timing-point-template.component';
import {EmitterParameterTrioComponent} from './emitter-parameter-trio/emitter-parameter-trio.component';
import {composeTimingPoints, OsuTimingPoint} from '../blackhole-classes/osu-timing-point';

@Component({
  selector: 'app-compose-emitters',
  templateUrl: './compose-emitters.component.html',
  styleUrls: ['./compose-emitters.component.css'],
  entryComponents: [EmitterParameterTrioComponent]
})
export class ComposeEmittersComponent implements OnInit {
  output: string;

  @ViewChild(TimingPointTemplateComponent, {static: true})
  tpTemplate: TimingPointTemplateComponent;

  @ViewChild('container', {read: ViewContainerRef, static: false})
  container: ViewContainerRef;

  factory: ComponentFactory<EmitterParameterTrioComponent>;

  emitters: ComponentRef<EmitterParameterTrioComponent>[];

  constructor(private cfr: ComponentFactoryResolver) {
    this.factory = cfr.resolveComponentFactory(EmitterParameterTrioComponent);
    this.emitters = [];
  }


  ngOnInit() {
  }


  addEmitter() {
    const el = this.container.createComponent(this.factory);
    this.emitters.push(el);
    el.instance.onRemove.subscribe(this.removeEmitter.bind(this));
  }

  removeEmitter(emitter) {
    // get componentref for emitter
    const ref = this.emitters.find(x => x.instance === emitter);


    // remove from viewref
    const index = this.container.indexOf(ref.hostView);
    if (index !== -1) {
      this.container.remove(index);
    }

    // remove from internal tracking
    const emIndex = this.emitters.indexOf(ref);
    if (emIndex !== -1) {
      this.emitters.splice(emIndex, 1);
    }
  }

  emit() {
    const tp = this.tpTemplate.currentTimingPoint;
    let combined: OsuTimingPoint [] = this.emitters[0].instance.emit(tp);
    for (let i = 1; i < this.emitters.length; i++) {
      const group = this.emitters[i].instance.emit(tp);
      combined = composeTimingPoints(combined, group, tp);
    }

    this.output = combined.map(x => x.toString()).join('\n');
  }
}
