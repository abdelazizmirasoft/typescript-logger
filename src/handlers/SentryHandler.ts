import { InterfaceLogHandler } from "../interfaces/InterfaceLogHandler";
import * as Sentry from "@sentry/node";
import config from "../config";

export class SentryHandler implements InterfaceLogHandler {
    constructor() {
        // Sentry.init({ dsn: config.DSN });
    }

    writeLog(message: string): void {
        console.log(`[Sentry] Writing: ${message}`);
        // Sentry.captureMessage(message);
    }
}
