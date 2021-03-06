import express from 'express';
import products from './data/data.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.get('/', (req, res) => {
  res.send('API is running');
});
app.get('/api/products', (req, res) => {
  res.json(products);
});
app.get('/api/products/:slug', (req, res) => {
    const product = products.find(p => p.slug === req.params.slug);
    res.json(product);
});

const PORT = process.env.PORT || 5000 ;
app.listen(5000, console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`));
