-- migrate:up
ALTER TABLE carts CHANGE count quantity INT DEFAULT 1;

-- migrate:down

