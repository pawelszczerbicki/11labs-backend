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
  STRIPE_API_KEY: process.env.STRIPE_API_KEY,
  BUSINESS_FRONT_URL: process.env.BUSINESS_FRONT_URL,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
}