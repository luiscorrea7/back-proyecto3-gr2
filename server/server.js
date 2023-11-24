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

//--- routes

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});