export declare enum eLogLevel {
    ERROR = 1,
    WARN = 2,
    INFO = 3,
    LOG = 4,
}
export default class Logger {
    private name;
    private logLevel;
    constructor(name: string, logLevel?: eLogLevel);
    readonly Name: string;
    readonly Log: any;
    readonly Info: any;
    readonly Warn: any;
    readonly Error: any;
    /**
     * @ignore
     */
    private noOp(...args);
    /**
     * @ignore
     */
    private readonly generateCurrentTime;
}
