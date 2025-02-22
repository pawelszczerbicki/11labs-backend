import 'express-async-errors'
import {app} from "./app";
import {config} from "./utils/config";
import {logger} from "./utils/logger";
import {mongo} from "./context";

mongo.connect(config.DB_URL)
  .then(() => logger.info("Db connected"))
  .then(() => app.listen(config.PORT, () => logger.info("Server started")))
  .catch(e => {
    logger.error("Can not start app", e)
    throw e
  })