import { Logger } from "./Logger";
import { FileHandler } from "./handlers/FileHandler";
import { SentryHandler } from "./handlers/SentryHandler";

// Sample usage
const logger = Logger.getInstance();

// Log to console
logger.verbose("This is a verbose message!");
logger.info("This is an info message!");
logger.warning("This is a warning message!");
logger.error("This is an error message!");

// Switch to file logging
logger.setHandler(new FileHandler());

logger.verbose("This is a verbose message logged to file.");
logger.info("This is an info message logged to file.");
logger.warning("This is a warning message logged to file.");
logger.error("This is an error message logged to file.");

// Switch to Sentry logging
logger.setHandler(new SentryHandler());

logger.verbose("This is a verbose message logged to Sentry.");
logger.info("This is an info message logged to Sentry.");
logger.warning("This is a warning message logged to Sentry.");
logger.error("This is an error message logged to Sentry.");
