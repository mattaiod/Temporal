alter table "public"."task"
  add constraint "task_dayPlanning_id_fkey"
  foreign key ("dayPlanning_id")
  references "public"."dayPlanning"
  ("id") on update restrict on delete restrict;
