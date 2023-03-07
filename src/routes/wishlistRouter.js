const express = require('express');
const wishlistController = require('../controllers/wishlistController');
const { loginRequired } = require('../utils/auth');

const router = express.Router();

router.post('', loginRequired, wishlistController.createOrDeleteWishlistByValue);
router.get('', loginRequired, wishlistController.getWishlistByUserId);
router.delete('', loginRequired, wishlistController.deleteWishlist);

module.exports = router;