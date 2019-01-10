import { builtinSv } from './builtin-sv-functions';

export enum SvFunctionType {
  SV,
  BPM
}

export class SvParameter {
    name: string;
    description: string;
    defaultValue: any;
    currentValue: any;

    constructor() {
        this.name = 'unnamed';
        this.description = '';
        this.defaultValue = '0';
    }
}

export type SvFunctionParams = SvParameter[];

export class SvFunction {

    static defaultName = 'unnamed';

    name: string;
    tooltip: string;
    body: string;
    parameters: SvFunctionParams;
    type: SvFunctionType;

    get isBpm() {
      return this.type === SvFunctionType.BPM;
    }

    set isBpm(value: boolean) {
      this.type = value ? SvFunctionType.BPM : SvFunctionType.SV;
    }


    constructor(type: SvFunctionType) {
        this.parameters = [];
        this.type = type;

        if (type === SvFunctionType.SV || type === SvFunctionType.BPM) {
          this.body =
            `(() => {
    // Put your inner state here
    // var persistent = 10;

    // Return SV value given fraction x
    // user param are strings: param["myParamName"]
    return (x, params) => {
        return 1;
    }
})();`;
        } else {
          this.body = ''; // todo xoxo
        }
        this.name = SvFunction.defaultName;
        this.tooltip = '';
    }

    static getCurrentParameters(it: any): any {
      const ret: any = {};
      for (const param of it.parameters) {
        ret[param.name] = param.currentValue || param.defaultValue;
      }

      return ret;
    }
}

export class SvFunctionCollection {
    static getCollection() {
        return JSON.parse(localStorage.getItem('svCollection')) || builtinSv || {};
    }

    static setCollection(obj: any) {
        return localStorage.setItem('svCollection', JSON.stringify(obj));
    }

    constructor() {
    }
}
