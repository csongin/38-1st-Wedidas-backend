-- migrate:up
CREATE TABLE carts (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  count INT NOT NULL,
  user_id INT NOT NULL,
  product_option_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
  FOREIGN KEY (product_option_id) REFERENCES product_options (id) ON DELETE CASCADE
);

-- migrate:down
DROP TABLE carts;
