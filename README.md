# TypeScript Logger Project

## Overview

This project implements a flexible and extensible logging system for a TypeScript web application. The `Logger` class provides functionalities to log messages of various levels (verbose, info, warning, error) to the console, to a file, or to Sentry. The project is designed to allow easy switching between different logging handlers.

## Project Structure

```
src/
├── handlers/
│   ├── ConsoleHandler.ts
│   ├── FileHandler.ts
│   ├── SentryHandler.ts
├── interfaces/
│   ├── InterfaceLogHandler.ts
│   ├── InterfaceLogger.ts
├── utils/
│   ├── logLevelsEnum.ts
├── Logger.ts
├── app.ts
```

### Handlers

-   `InterfaceLogHandler.ts`: Defines the interface for logging handlers.
-   `ConsoleHandler.ts`: Implements the `InterfaceLogHandler` interface for logging messages to the console.
-   `FileHandler.ts`: Implements the `InterfaceLogHandler` interface for logging messages to a file.
-   `SentryHandler.ts`: Implements the `InterfaceLogHandler` interface for logging messages to Sentry.

### Core

-   `Logger.ts`: Implements the singleton `Logger` class that logs messages to a single active handler.
-   `InterfaceLogger.ts`: Defines the interface for the `Logger` class.
-   `logLevelsEnum.ts`: Enum defining the different log levels.
-   `app.ts`: Sample usage demo on how to use the `Logger` class.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/abdelazizmirasoft/typescript-logger.git
    cd typescript-logger
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Compile the TypeScript files:**

    ```bash
    npm run build
    ```

4. **Run the project:**

    ```bash
    npm start
    ```

## Usage

### Basic Logging

You can log messages to the console at various levels using the `Logger` class:

```typescript
import { Logger } from "./Logger";

const logger = Logger.getInstance();

logger.verbose("This is a verbose message.");
logger.info("This is an info message.");
logger.warning("This is a warning message.");
logger.error("This is an error message.");
```
