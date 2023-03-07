-- migrate:up
ALTER TABLE reviews CHANGE commets comments VARCHAR(100);


-- migrate:down

