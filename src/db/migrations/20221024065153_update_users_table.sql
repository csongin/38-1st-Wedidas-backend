-- migrate:up
ALTER TABLE users ADD UNIQUE (email);

-- migrate:down