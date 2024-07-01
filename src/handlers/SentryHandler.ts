import { InterfaceLogHandler } from "../interfaces/InterfaceLogHandler";
import * as Sentry from "@sentry/node";

export class SentryHandler implements InterfaceLogHandler {
    constructor(dsn: string) {
        // Sentry.init({ dsn: dsn});
    }

    writeLog(message: string): void {
        console.log(`[Sentry] Writing: ${message}`);
        // Sentry.captureMessage(message);
    }
}
