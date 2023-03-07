-- migrate:up
ALTER TABLE users MODIFY password NOT NULL VARCHAR(200);
-- migrate:down