


export class OsuTimestamp {

    _stampTime: number;

    valid: boolean;

    get time() {
        return this._stampTime;
    }

    get osuTimestamp() {
        const minutes = Math.floor(this.time / 60000);
        const milliseconds = Math.floor(this.time % 1000);
        const seconds = Math.floor((this._stampTime - minutes * 60000 - milliseconds) / 1000);

        let strMinutes = minutes.toString();
        if (minutes < 10) {
            strMinutes = `0${minutes}`;
        }

        let strSeconds = seconds.toString();
        if (seconds < 10) {
            strSeconds = `0${seconds}`;
        }

        let strMilliseconds = milliseconds.toString();
        if (milliseconds < 10) {
            strMilliseconds = `0${milliseconds}`;
        }

        if (milliseconds < 100) {
            strMilliseconds = `0${strMilliseconds}`;
        }

        return `${strMinutes}:${strSeconds}:${strMilliseconds}`;
    }

    static fromRegexResult(result): number {
        const minutes = parseInt(result[1]);
        const seconds = parseInt(result[2]);
        const milliseconds = parseInt(result[3]);

        return minutes * 60 * 1000 +
            seconds * 1000 +
            milliseconds;
    }

    constructor(stampText) {
        const timestampRegex: RegExp = /(\d{2,}):(\d\d):(\d\d\d)/;
        const result = timestampRegex.exec(stampText);
        if (result) {
            this._stampTime = OsuTimestamp.fromRegexResult(result);
            this.valid = true;
            return;
        }

        const timeResult = parseFloat(stampText);
        if (!isNaN(timeResult) && isFinite(timeResult)) {
            this._stampTime = timeResult;
            this.valid = true;
            return;
        }

        this.valid = false;
    }
}

export function validateTimestamp(text) {
    const ts = new OsuTimestamp(text);
    if (ts.valid) {
        return ts.time;
    } else {
        return NaN;
    }
}

export function eventValidateTimestamp(event) {
    const stamp = validateTimestamp(event.target.value);
    if (!isNaN(stamp)) {
        event.target.value = stamp;
    }
}
