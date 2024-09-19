import { createProduct, getProducts } from '@/controllers/products';
import express from 'express';

const router = express.Router();

router.get('/', getProducts);
router.post('/', createProduct);

export { router as productsRoutes };
