-- migrate:up
CREATE TABLE reviews (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  commets VARCHAR(100) NULL,
  ratings FLOAT NULL,
  user_id INT NOT NULL,
  product_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE
);

-- migrate:down
DROP TABLE reviews;
