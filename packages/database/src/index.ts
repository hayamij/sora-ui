import { assertValue } from "@workspace/utils";
import "dotenv/config";
//todo: change to postgres later
import { drizzle } from "drizzle-orm/mysql2";

const databaseUrl = assertValue(
  process.env.DATABASE_URL,
  "DATABASE_URL is not set"
);

export const db = drizzle(databaseUrl);

export * from "drizzle-orm";
