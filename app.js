const express = require('express');
const authService = require('./auth-service');
const productService = require('./product-service');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authService);
app.use('/products', productService);


app.get('/', (req, res) => {
    res.send('Render Deployment Project');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
