import express from 'express';
import { addToCart } from '../controllers/cart.js';
const router = express.Router();

router.put('/carts', addToCart);

export default router;
