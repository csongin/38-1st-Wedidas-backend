-- migrate:up
CREATE TABLE main_categories (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
);

-- migrate:down
DROP TABLE main_categories;