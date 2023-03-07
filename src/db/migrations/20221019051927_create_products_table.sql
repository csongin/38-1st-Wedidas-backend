-- migrate:up
CREATE TABLE products (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  price DECIMAL(8,2) NOT NULL,
  thumbnail_image_url VARCHAR(500),
  description TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  sub_category_id INT NOT NULL,
  FOREIGN KEY (sub_category_id) REFERENCES sub_categories (id)
);

-- migrate:down
DROP TABLE products;
