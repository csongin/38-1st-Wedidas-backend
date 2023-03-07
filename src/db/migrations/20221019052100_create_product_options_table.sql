-- migrate:up
CREATE TABLE product_options (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  stock INT NOT NULL,
  product_id INT NOT NULL,
  size_id INT NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products (id),
  FOREIGN KEY (size_id) REFERENCES sizes (id)
);

-- migrate:down
DROP TABLE product_options;
