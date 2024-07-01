import { InterfaceLogHandler } from "../interfaces/InterfaceLogHandler";

export class ConsoleHandler implements InterfaceLogHandler {
    writeLog(message: string): void {
        console.log(message);
    }
}
