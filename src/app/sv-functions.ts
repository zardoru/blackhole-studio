import { builtinSv } from "./builtin-sv-functions";

export class SvParameter {
    name: string;
    description: string;
    defaultValue: any;
    currentValue: any;

    constructor() {
        this.name = "unnamed";
        this.description = "";
        this.defaultValue = "0";
    }
}

export type SvFunctionParams = SvParameter[];

export class SvFunction {
    name: string;
    tooltip: string;
    body: string;
    parameters: SvFunctionParams;
    isBpm: boolean;

    static defaultName = "unnamed";

    constructor() {
        this.parameters = [];
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
        this.name = SvFunction.defaultName;
        this.tooltip = "";
    }
}

export class SvFunctionCollection
{
    static getCollection() {
        return JSON.parse(localStorage.getItem("svCollection")) || builtinSv || {};
    }

    static setCollection(obj: any) {
        return localStorage.setItem("svCollection", JSON.stringify(obj));
    }

    constructor() {
    }
}