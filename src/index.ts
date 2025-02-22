import 'express-async-errors'
import {mongo} from "./context";
import {app} from "./app";
import {config} from "./utils/config";
import {logger} from "./utils/logger";
import admin from 'firebase-admin';

admin.initializeApp()
mongo.connect(config.DB_URL)
  .then(() => console.log("Db connected"))
  .then(() => app.listen(config.PORT, () => logger.info("Server started")))
  .catch(e => {
    logger.error("Can not start app", e)
    throw e
  })