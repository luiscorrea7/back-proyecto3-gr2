const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
require('../dataBaseConnect/dbConnect');
const PORT = process.env.PORT || 8000;

//--- middlewares

app.use(express.json());
app.use(morgan('dev'));
app.use(cors({}));


//--- useRoutes

const userRoutes = require('../routes/users.routes');
const producRoutes = require('../routes/product.routes');
const loginRoutes = require('../routes/login.routes')

//--- routes

app.use('/API/users', userRoutes);
app.use('/api/products', producRoutes);
app.use('/api/login', loginRoutes);


app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});