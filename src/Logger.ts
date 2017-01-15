enum eLogLevel {
    ERROR = 1,
    WARN,
    INFO,
    LOG
}

export default class Logger {
    private name: string;
    private logLevel: eLogLevel;

    constructor(name: string, logLevel?: eLogLevel) {
        this.name = name;
        this.logLevel = logLevel || eLogLevel.WARN;
    }

    get Name(): string { return this.name; }

    get Log() {
        if (this.logLevel === eLogLevel.LOG) {
            return console.log.bind(console, this.generateCurrentTime);
        }

        return this.noOp;
    }

    get Info() {
        if (this.logLevel >= eLogLevel.INFO) {
            return console.info.bind(console, this.generateCurrentTime);
        }

        return this.noOp;
    }

    get Warn() {
        if (this.logLevel >= eLogLevel.WARN) {
            return console.warn.bind(console, this.generateCurrentTime);
        }

        return this.noOp;
    }

    get Error() {
        if (this.logLevel >= eLogLevel.ERROR) {
            return console.error.bind(console, this.generateCurrentTime);
        }

        return this.noOp;
    }

    /**
     * @ignore
     */
    // tslint:disable-next-line:no-empty
    private noOp(...args: any[]) { }

    /**
     * @ignore
     */
    private get generateCurrentTime(): string {
        const date = new Date();
        return `[${date.toLocaleDateString()} ${date.toTimeString()}][${this.name}]:`;
    }
}
