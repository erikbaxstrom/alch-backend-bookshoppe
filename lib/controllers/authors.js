const { Router } = require('express');
const { Author } = require('../models/Author.js');

module.exports = Router().get('/', async (req, res) => {
  console.log('controller trying to get authors');
  const authors = await Author.getAll();
  console.log('authors:', authors);
  const filtered = authors.map(({ id, name }) => ({ id, name }));
  res.json(filtered);
});
