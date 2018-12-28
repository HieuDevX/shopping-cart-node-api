import * as path from "path";
import * as dotEnvSafe from "dotenv-safe";

// check process.env and load environment variables
(() => {
  if (
    process.env.NODE_ENV === "production" ||
    process.env.NODE_ENV === "debug" ||
    process.env.NODE_ENV === "dev"
  ) {
    return;
  }
  // declare path of env file
  let envPath = path.join(__dirname, "../.env");

  if (process.env.NODE_ENV === "test") {
    envPath = path.join(__dirname, "../.env.test");
  }
  // import .env variables from file .env.example by dotEnvSafe package
  dotEnvSafe.load({
    allowEmptyValues: true,
    path: envPath,
    sample: path.join(__dirname, "../.env.example")
  });
})();

import * as express from "express";
import { Request, Response, NextFunction } from "express";
import * as http from "http";
import * as mongoose from "mongoose";
import * as morgan from "morgan";
import * as cors from "cors";
import {
  MONGODB_URI,
  MONGODB_USER,
  MONGODB_PWD,
  SERVER_PORT,
  SERVER_TEST_PORT
} from "./custom_modules/configs/env-configs";
import ExceptionCode from "./custom_modules/exceptions/ExceptionCode";
import Exception from "./custom_modules/exceptions/Exception";
import routes from "./routes/routes";
import Logger from "./custom_modules/helpers/log/logger";
import logger from "./custom_modules/helpers/log/logger";

const app = express();
const server = http.createServer(app);

const mongoDbOptions = {
  // user: MONGODB_USER,
  // pass: MONGODB_PWD,
  useNewUrlParser: true
};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/static", express.static("public"));

if (process.env.NODE_ENV !== "test") {
  logger.info(`MongoDB options: `);
  console.log(mongoDbOptions);
  mongoose
    .connect(
      MONGODB_URI,
      mongoDbOptions
    )
    .then(() => {
      Logger.info(`MongoDB connected`);
    })
    .catch(error => {
      Logger.error(`Failed to connect mongodb`);
      console.log(error);
      Logger.info(`Mongo connection: `);
      console.log(mongoose.connection);
    });
}

app.use(morgan("dev"));

app.use(async (req: Request, res: Response, next: NextFunction) => {
  Logger.info(`MongoDB ready state: ${mongoose.connection.readyState}`);
  try {
    if (mongoose.connection.readyState !== 1) {
      Logger.error(`failed to connect mongodb`);
      Logger.info(`Mongo connection: `);
      console.log(mongoose.connection);

      logger.info(`MongoDB options: `);
      console.log(mongoDbOptions);
      // Reconnect if we can
      await mongoose.connect(
        MONGODB_URI,
        mongoDbOptions
      );
      Logger.info(`MongoDB connected`);
    }
  } catch (error) {
    return next(new Exception("server error", 500));
  }

  next();
});

app.use(routes);

// Hanlde all error thrown from controller or other middlewares
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error.code) {
    res.json({
      error_code: error.code,
      message: error.message
    });
  } else {
    res.json({
      error_code: ExceptionCode.SYSTEM_ERROR,
      message: "server error!"
    });
  }
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.json({
    error_code: ExceptionCode.REQUEST_NOT_FOUND,
    message: "request not found!"
  });
});

let port = SERVER_PORT;

if (process.env.NODE_ENV === "test") {
  port = SERVER_TEST_PORT;
}

server.listen(port, () => {
  Logger.info(
    `${path.basename(
      __filename
    )}| Server running at: http://localhost:${SERVER_PORT}`
  );
  Logger.info(`${path.basename(__filename)}| ENV: ${process.env.NODE_ENV}`);
  Logger.info(`${path.basename(__filename)}| MongoDB URI: ${MONGODB_URI}`);
});

export default server;
