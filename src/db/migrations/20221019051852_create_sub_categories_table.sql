-- migrate:up
CREATE TABLE sub_categories (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  main_category_id INT NOT NULL,
  FOREIGN KEY (main_category_id) REFERENCES main_categories (id)
);

-- migrate:down
DROP TABLE sub_categories;