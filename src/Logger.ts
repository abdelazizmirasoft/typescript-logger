import { InterfaceLogger } from "./interfaces/InterfaceLogger";
import { LogLevelEnum } from "./utils/logLevelsEnum";
import { InterfaceLogHandler } from "./interfaces/InterfaceLogHandler";
import { ConsoleHandler } from "./handlers/ConsoleHandler";

export class Logger implements InterfaceLogger {
    private static instance: Logger;
    private handler: InterfaceLogHandler;

    private constructor() {
        this.handler = new ConsoleHandler(); // Default: ConsoleLogging
    }

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public setHandler(handler: InterfaceLogHandler): void {
        this.handler = handler;
    }

    public log(message: string, level: LogLevelEnum): void {
        const logMessage = `[${level}] ${new Date().toISOString()}: ${message}`;
        this.handler.writeLog(logMessage);
    }

    public verbose(message: string): void {
        this.log(message, LogLevelEnum.VERBOSE);
    }

    public info(message: string): void {
        this.log(message, LogLevelEnum.INFO);
    }

    public warning(message: string): void {
        this.log(message, LogLevelEnum.WARNING);
    }

    public error(message: string): void {
        this.log(message, LogLevelEnum.ERROR);
    }
}
