const appDataSource = require('./dataSource');

const getProductOptionIdUsedInCart = async (productId, sizeId) => {
  const [result] = await appDataSource.query(`
    SELECT
      id
    FROM product_options
    WHERE product_id = ? AND size_id = ?
  `, [productId, sizeId]);

  return result.id;
}

const createCart = async (userId, productOptionId) => {
  const insertCart = await appDataSource.query(`
    INSERT INTO carts(
      user_id,
      product_option_id
    ) 
    SELECT ${userId}, ${productOptionId}
    WHERE NOT EXISTS(
      SELECT *
      FROM carts AS c
      WHERE c.user_id=${userId} AND c.product_option_id=${productOptionId} 
    )
  `)

  if (!insertCart.affectedRows) {
    const error = new Error('FAILED');
    error.statusCode = 400;
    throw error;
  }
  return insertCart;
}

const getCartByUserId = async (userId) => {
  const result = await appDataSource.query(`
    SELECT
      c.id AS cartId,
      c.user_id AS userId,
      c.product_option_id AS productOptionId,
      c.quantity,
      po.product_id AS productId,
      po.size_id AS sizeId,
      p.thumbnail_image_url AS thumbnailUrl,
      p.name,
      p.price,
      s.foot_size AS footSize,
      po.stock
    FROM carts AS c
    JOIN users AS u ON c.user_id = u.id
    JOIN product_options AS po ON c.product_option_id = po.id
    JOIN products p ON po.product_id = p.id
    JOIN sizes AS s ON po.size_id = s.id
    WHERE c.user_id=?`,
    [userId]
  );
  return result;
}

const updateCart = async (userId, cartId, quantity, stock) => {
  const result = await appDataSource.query(`
    UPDATE carts
    SET quantity=${quantity}
    WHERE id=${cartId} AND user_id=${userId} AND ${quantity} <= ${stock}
  `);

  if (!result.affectedRows) {
    const error = new Error('FAILED');
    error.statusCode = 400;
    throw error;
  }
  return result;
}

const deleteCart = async (userId, cartId) => {
  const result = await appDataSource.query(`
    DELETE
    FROM carts
    WHERE user_id=? AND id=?`,
  [userId, cartId]
  );
  return result;
}

module.exports = {
  getProductOptionIdUsedInCart,
  createCart,
  getCartByUserId,
  updateCart,
  deleteCart
}