


export class OsuTimestamp {

    _stampTime: number;

    valid: boolean;

    readonly timestampRegex : RegExp = /(\d{2,}):(\d\d):(\d\d\d)/;
    get time() {
        return this._stampTime;
    }

    get osuTimestamp() {
        var minutes = Math.floor(this.time / 60000);
        var milliseconds = Math.floor(this.time % 1000);
        var seconds = Math.floor((this._stampTime - minutes * 60000 - milliseconds) / 1000);

        var strMinutes = minutes.toString();
        if (minutes < 10) {
            strMinutes = `0${minutes}`;
        }

        var strSeconds = seconds.toString();
        if (seconds < 10) {
            strSeconds = `0${seconds}`;
        }

        var strMilliseconds = milliseconds.toString();
        if (milliseconds < 10) {
            strMilliseconds = `0${milliseconds}`;
        }

        if (milliseconds < 100) {
            strMilliseconds = `0${strMilliseconds}`;
        }

        return `${strMinutes}:${strSeconds}:${strMilliseconds}`;
    }

    static fromRegexResult(result) : number
    {
        var minutes = parseInt(result[1]);
        var seconds = parseInt(result[2]);
        var milliseconds = parseInt(result[3]);

        return minutes * 60 * 1000 + 
            seconds * 1000 +
            milliseconds;
    }

    constructor(stampText) {
        let result = this.timestampRegex.exec(stampText);
        if (result) {
            this._stampTime = OsuTimestamp.fromRegexResult(result);
            this.valid = true;
            return;
        }

        let timeResult = parseFloat(stampText);
        if (!isNaN(timeResult) && isFinite(timeResult)) {
            this._stampTime = timeResult;
            this.valid = true;
            return;
        }

        this.valid = false; 
    }
}

export function validateTimestamp(text)
{
    var ts = new OsuTimestamp(text);
    if (ts.valid)
        return ts.time;
    else 
        return NaN;
}

export function eventValidateTimestamp(event)
{
    var stamp = validateTimestamp(event.target.value);
    if (!isNaN(stamp))
        event.target.value = stamp;
}