const cartService = require('../services/cartService');
const { catchAsync } = require('../utils/error');

const createCart = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const { productId, sizeId } = req.body;

  if ( !productId || !sizeId ) {
    const error = new Error('KEY_ERROR');
    error.statusCode = 400;
    throw error;
  }
  await cartService.createCart(userId, productId, sizeId);
  res.status(201).json({ message: 'SUCCESS' });
});

const getCartByUserId = catchAsync(async (req, res) => {
  const userId = req.user.id;

  const selectCart = await cartService.getCartByUserId(userId);
  res.status(200).json({ selectCart });
})

const updateCart = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const { cartId, quantity, stock } = req.query;

  if ( !cartId || !quantity || !stock) {
    const error = new Error('KEY_ERROR');
    error.statusCode = 400;
    throw error;
  }

  await cartService.updateCart(userId, cartId, quantity, stock);
  res.status(200).json({ message: 'SUCCESS' });
})

const deleteCart = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const { cartId } = req.query;

  if ( !cartId) {
    const error = new Error('KEY_ERROR');
    error.statusCode = 400;
    throw error;
  }

  await cartService.deleteCart(userId, cartId);
  res.status(204).end();
})

module.exports = {
  createCart,
  getCartByUserId,
  updateCart,
  deleteCart
}

