CREATE TABLE "public"."test" ("user_id" uuid NOT NULL, "id" uuid NOT NULL DEFAULT gen_random_uuid(), PRIMARY KEY ("id") , UNIQUE ("user_id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
