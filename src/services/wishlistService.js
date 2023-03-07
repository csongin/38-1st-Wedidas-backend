const wishlistDao = require('../models/wishlistDao');

const createOrDeleteWishlistByValue = async (userId, productId) => {
  return await wishlistDao.createOrDeleteWishlistByValue(userId, productId);
}

const getWishlistByUserId = async (userId) => {
  return await wishlistDao.getWishlistByUserId(userId);
}

const deleteWishlist = async (userId, productId) => {
  return await wishlistDao.deleteWishlist(userId, productId);
}

module.exports = {
  createOrDeleteWishlistByValue,
  getWishlistByUserId,
  deleteWishlist
}