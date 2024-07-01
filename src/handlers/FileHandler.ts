import { InterfaceLogHandler } from "../interfaces/InterfaceLogHandler";
import * as fs from "fs";

export class FileHandler implements InterfaceLogHandler {
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    writeLog(message: string): void {
        console.log(`[File IO] Writing to ${this.filePath}: ${message}`);
        fs.appendFileSync(this.filePath, message + "\n", "utf8");
    }
}
