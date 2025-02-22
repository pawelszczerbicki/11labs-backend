import 'express-async-errors'
import {app} from "./app";
import {config} from "./utils/config";
import {logger} from "./utils/logger";

// admin.initializeApp()
app.listen(config.PORT, () => logger.info("Server started"))
