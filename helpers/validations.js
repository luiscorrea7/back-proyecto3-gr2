const { body, param, query, validationResult } = require('express-validator');

const createUserValidations = {
  email: body('email')
    .isEmail()
    .withMessage('Please enter an valid email')
    .not()
    .isEmpty()
    .withMessage('This field is required'),
  password: body('password')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,14}$/)
    .withMessage(`This password doesn't meet the requirements `)
};

const mongoIdValidator = {
  id: param('id')
    .isMongoId()
    .withMessage('This id is not a valid MongoDB ObjectID')
};

const emailQueryValidator = {
  email: query('email')
    .isEmail()
    .withMessage('This email is not valid')
};

const productCreateValidations = {
  image: body('image')
    .isURL()
    .withMessage('Image URL not valid'),
  stock: body('stock')
    .isNumeric()
    .withMessage('This field is not valid (Supposed to be a number)'),
  price: body('price')
    .isNumeric()
    .withMessage('This field is not valid (Supposed to be a number)'),
}

const fieldsValidator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({errors: errors.array()});
  next();
}
module.exports = {
  createUserValidations,
  mongoIdValidator,
  emailQueryValidator,
  productCreateValidations,
  fieldsValidator
}