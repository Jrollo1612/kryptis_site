create table visitor_logs (
  id bigint generated always as identity primary key,

  ip text,
  user_agent text,
  language text,
  platform text,
  screen_width integer,
  screen_height integer,
  timezone text,
  cookies_enabled boolean,

  created_at timestamp with time zone default now()
);
