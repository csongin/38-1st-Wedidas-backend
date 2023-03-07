-- migrate:up
ALTER TABLE carts MODIFY count INT NULL;

-- migrate:down

