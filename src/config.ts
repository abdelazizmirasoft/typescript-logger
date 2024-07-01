import dotenv from "dotenv";

dotenv.config();

export default {
    DSN: process.env.DSN ?? "",
    LogFilePath: process.env.LOG_FILE_PATH ?? "",
};
