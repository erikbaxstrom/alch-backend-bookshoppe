const { Router } = require('express');
const Author = require('../models/Author.js');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const author = await Author.getAuthorById(req.params.id);
    const filtered = {
      name: author.name,
      dob: author.dob,
      pob: author.pob,
      books: author.books,
    };
    res.json(filtered);
  })
  .get('/', async (req, res) => {
    const authors = await Author.getAll();
    const filtered = authors.map(({ id, name }) => ({ id, name }));
    res.json(filtered);
  });
