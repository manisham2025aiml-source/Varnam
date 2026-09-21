import express, { Request, Response } from 'express';
import { db } from './database.ts';

const app = express();

// Test the exact handler
app.get('/api/products/:productId', (req: Request<{ productId: string }>, res: Response) => {
  const rawId = req.params.productId;
  const productId: string = String(Array.isArray(rawId) ? rawId[0] : (rawId || '')).trim();
  const product = db.findProduct(productId);

  if (!product) {
    res.status(404).json({
      success: false,
      verified: false,
      message: 'Product not found'
    });
    return;
  }

  res.json({
    success: true,
    product
  });
});
