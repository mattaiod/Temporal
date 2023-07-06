alter table "public"."test" add column "createdAt" timestamptz
 not null default now();
