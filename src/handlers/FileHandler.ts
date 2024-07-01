import { InterfaceLogHandler } from "../interfaces/InterfaceLogHandler";
import * as fs from "fs";
import config from "../config";

export class FileHandler implements InterfaceLogHandler {
    private filePath: string;

    constructor() {
        this.filePath = config.LogFilePath;
    }

    writeLog(message: string): void {
        console.log(`[File IO] Writing to ${this.filePath}: ${message}`);
        fs.appendFileSync(this.filePath, message + "\n", "utf8");
    }
}
