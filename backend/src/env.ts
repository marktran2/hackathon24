import dotenv from "dotenv";
import assert from "assert";

dotenv.config();

assert(process.env.PORT !== undefined, "PORT must be defined");
export const PORT = process.env.PORT;

assert(
  process.env.OPENAI_API_KEY !== undefined,
  "OPENAI_API_KEY must be defined"
);
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
