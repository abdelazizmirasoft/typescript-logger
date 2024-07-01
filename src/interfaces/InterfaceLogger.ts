import { LogLevelEnum } from "../utils/logLevelsEnum";

export interface InterfaceLogger {
    log(message: string, level: LogLevelEnum): void;
    verbose(message: string): void;
    info(message: string): void;
    warning(message: string): void;
    error(message: string): void;
}
