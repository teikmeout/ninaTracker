BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL NOT NULL,
  fname VARCHAR NOT NULL,
  lname VARCHAR NOT NULL,
  uname VARCHAR NOT NULL,
  pass VARCHAR OT NULL
);

COMMIT;
