const express = require('express');
const helmet = require('helmet');
const db = require('./config/db');
const videoRoutes = require('./routes/videoRoutes');
const commentRoutes = require('./routes/commentRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Import and configure dotenv
require('dotenv').config();

// Use body-parser middleware for JSON parsing
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", 'trusted-scripts.com'],
        styleSrc: ["'self'", 'styles.com'],
        imgSrc: ["'self'", 'images.com'],
        fontSrc: ["'self'", 'fonts.com'],
      },
    },
    permissionsPolicy: {
      features: {
        'ch-ua-form-factor': ['tablet'],
      },
    },
  })
);
// Enable CORS
const cors = require('cors');
app.use(cors());

app.use('/api/videos', videoRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});