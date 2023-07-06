alter table "public"."backlog"
  add constraint "backlog_user_id_fkey"
  foreign key ("user_id")
  references "auth"."users"
  ("id") on update restrict on delete restrict;
