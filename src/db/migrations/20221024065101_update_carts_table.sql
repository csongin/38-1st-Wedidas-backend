-- migrate:up
ALTER TABLE carts ALTER COLUMN count SET DEFAULT 1;

-- migrate:down

