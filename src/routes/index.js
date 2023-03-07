const router = require('express').Router();

const productRouter = require('./productRouter');
const userRouter = require('./userRouter');
const wishlistRouter = require('./wishlistRouter');
const cartRouter = require('./cartRouter');

router.use('/products', productRouter);
router.use('/users', userRouter);
router.use('/wishlists', wishlistRouter);
router.use('/carts', cartRouter);

module.exports = router;