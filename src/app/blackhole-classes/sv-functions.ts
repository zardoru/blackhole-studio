import { builtinSv } from './builtin-sv-functions';

export enum SvFunctionType {
  SV,
  BPM,
  TimingPoint
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
    doNotSkipRepeatedValues: boolean;

    get isExplicitEmission() {
      // returns false if undefined, wink.
      return this.doNotSkipRepeatedValues || false;
    }

    get isBpm() {
      return this.type === SvFunctionType.BPM;
    }

    get isSv() {
      return this.type === SvFunctionType.SV;
    }

    get isTimingPointFunction() {
      return this.type === SvFunctionType.TimingPoint;
    }

    constructor(type: SvFunctionType) {
        this.parameters = [];
        this.type = type;

        if (type === SvFunctionType.SV) {
          this.body =
            `(() => {
    // Put your inner state here
    // State does not reset after each cycle.
    // var persistent = 10;

    // Return SV value given fraction 'x'
    // User parameters are put into the params object and are converted to doubles when possible
    // i.e. params["myParamName"]
    // See reference for more details about built-in parameters.
    return (x, params) => {
        return 1;
    }
})();`;
        } else if (type === SvFunctionType.BPM) {
          this.body =
            `(() => {
    // Put your inner state here
    // State does not reset after each cycle.
    // var persistent = 10;

    // Return BPM value given fraction 'x'
    // User parameters are put into the params object and are converted to doubles when possible
    // i.e. params["myParamName"]
    // See reference for more details about built-in parameters.
    return (x, params) => {
        return 120;
    }
})();`;
        }  else if (type === SvFunctionType.TimingPoint) {
          this.body =
            `(() => {
    // Put your inner state here
    // var persistent = 10

    // Return an array of timing points given an array of timing points 'tp'.
    // User parameters are put into the params object and are converted to doubles when possible
    // i.e. params["myParamName"]
    // See reference for more details about built-in parameters,
    // as well as documentation of the properties of the objects contained in each index of 'tp'.
    return (tp, params) => {
      return tp;
    };
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
        const preferred = param.currentValue || param.defaultValue;
        const val = parseFloat(preferred);

        ret[param.name] = isNaN(val) ? preferred : val;
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

    static restoreBuiltins() {
      const col = this.getCollection();
      for (const key in builtinSv) {
        if (!col[key]) {
          col[key] = builtinSv[key];
        }
      }

      this.setCollection(col);
    }

    constructor() {
    }
}
