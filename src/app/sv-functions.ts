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
    }
}

export class SvFunctionCollection
{
    functions: SvFunction[];

    getFunctionByName(name: string) : SvFunction {
        for (var func of this.functions) {
            if (func.name === name) return func;
        }

        return null;
    }

    constructor() {
    }
}