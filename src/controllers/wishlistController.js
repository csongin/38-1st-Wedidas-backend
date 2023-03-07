const wishlistService = require('../services/wishlistService');
const { catchAsync } = require('../utils/error');

const createOrDeleteWishlistByValue = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const { productId } = req.body;

  if ( !productId ) {
    const error = new Error('KEY_ERROR');
    error.statusCode = 400;
    throw error;
  }

  await wishlistService.createOrDeleteWishlistByValue(userId, productId);
  res.status(201).json({ message: 'SUCCESS' });
});

const getWishlistByUserId = catchAsync(async (req, res) => {
  const userId = req.user.id;

  if ( !userId ) {
    const error = new Error('KEY_ERROR');
    error.statusCode = 400;
    throw error;
  }

  const wishlists = await wishlistService.getWishlistByUserId(userId);
  res.status(200).json({ wishlists });
});

const deleteWishlist = catchAsync (async (req, res) => {
  const userId = req.user.id;
  const { productId } = req.query;
  
  if ( !productId ) {
    const error = new Error('KEY_ERROR');
    error.statusCode = 400;
    throw error;
  }

  try {
    await wishlistService.deleteWishlist(userId, productId)
    res.status(204).send()
  } catch (error) {
    res.status(error.statusCode).json({ message: error.message });
  }
});

module.exports = {
  createOrDeleteWishlistByValue,
  getWishlistByUserId,
  deleteWishlist
}