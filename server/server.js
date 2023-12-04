const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 8000;

//--- middlewares

app.use(express.json());
app.use(morgan('dev'));
app.use(cors({}));


//--- useRoutes

const userRoutes = require('../routes/users.routes');
const producRoutes = require('../routes/product.routes');

//--- routes

app.use('/API/users', userRoutes);
app.use('/api/products', producRoutes);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});