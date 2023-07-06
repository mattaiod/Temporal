alter table "public"."backlog" alter column "user_id" drop not null;
alter table "public"."backlog" add column "user_id" uuid;
