-- migrate:up
CREATE TABLE sizes (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  foot_size INT NOT NULL
);

-- migrate:down
DROP TABLE sizes;