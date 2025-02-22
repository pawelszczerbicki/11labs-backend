import { controllers, publicControllers} from "./context";
import {errorHandler} from "./error/error.handler";
import express from "express";
import cors from "cors";
import {auth} from "./auth/auth.middleware";
import {expressLogger} from "./utils/logger";

export const app = express()
  .use(cors())
  .use(expressLogger)
  .use(express.json())
  .use(express.urlencoded({extended: true}))
  .use("/client", publicControllers)
  .use(auth)
  .use(controllers)
  .use(errorHandler);


