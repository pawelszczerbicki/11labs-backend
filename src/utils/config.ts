import 'dotenv/config'
import * as process from "node:process";

export const config = {
  PORT: process.env.PORT || 3000,
  DB_URL: "mongodb+srv://user:QNeOo7StPNR0tHpK@hackaton.rkoie.mongodb.net/?retryWrites=true&w=majority&appName=hackaton",
  LOG_LEVEL: process.env.LOG_LEVEL || "info",
  SMS_API_TOKEN: process.env.SMS_API_TOKEN,
  QUEUE_REGION: process.env.QUEUE_REGION,
  PROJECT_ID: process.env.PROJECT_ID,
  FRONT_URL: process.env.FRONT_URL,
  BUCKET: process.env.BUCKET,
  ELEVEN_LABS_KEY: "sk_461f9036e78b1ecfe205fbea82da2561ce61b7bebb6f7428",
  GEMINI_KEY: "AIzaSyDTpqR2IYOsfJWLhTeFouD0tGSkrOAHo90",
  FAL_KEY:  "94ba8469-c3c8-4486-9e09-fe2248ce2496:058b9f8ab6290585c8cdc417da1bc3fe"
}