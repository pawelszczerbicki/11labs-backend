import 'dotenv/config'
import * as process from "node:process";


export const config = {
  PORT: process.env.PORT || 3000,
  DB_URL: process.env.DB_URL,
  LOG_LEVEL: process.env.LOG_LEVEL || "info",
  SMS_API_TOKEN: process.env.SMS_API_TOKEN,
  QUEUE_REGION: process.env.QUEUE_REGION,
  PROJECT_ID: process.env.PROJECT_ID,
  FRONT_URL: process.env.FRONT_URL,
  BUCKET: process.env.BUCKET,
  ELEVEN_LABS_KEY: "sk_461f9036e78b1ecfe205fbea82da2561ce61b7bebb6f7428"
}