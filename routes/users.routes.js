const { Router } = require('express');
const route = Router();

route.get('/', (req, res) => {
  try {
    res.status(200).json('test')
  } catch (error) {
    console.log(error)
  }
});

route.get('/find/:id', () => {
  console.log('test')
});

route.post('/create', () => {
  console.log('test')
});

route.patch('/edit/id', () => {
  console.log('test')
});

route.delete('/delete/id', () => {
  console.log(test)
});

module.exports = route;

