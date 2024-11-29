// api-gateway/index.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

const app = express();

app.use('/auth', createProxyMiddleware({ target: 'http://localhost:4001', changeOrigin: true }));
app.use('/products', createProxyMiddleware({ target: 'http://localhost:4002', changeOrigin: true }));
app.use('/payments', createProxyMiddleware({ target: 'http://localhost:4003', changeOrigin: true }));
app.use('/admin', createProxyMiddleware({ target: 'http://localhost:4004', changeOrigin: true }));
app.use('/recommendations', createProxyMiddleware({ target: 'http://localhost:4005', changeOrigin: true }));
app.use('/chat', createProxyMiddleware({ target: 'http://localhost:4006', changeOrigin: true }));
app.use('/orders', createProxyMiddleware({ target: 'http://localhost:4007', changeOrigin: true }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
});
