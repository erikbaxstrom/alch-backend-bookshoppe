const { Router } = require('express');
const Book = require('../models/Book.js');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const book = await Book.getBookById(req.params.id);
    const filtered = {
      title: book.title,
      released: book.released,
      authors: book.authors.map(({ id, name }) => ({ id, name })),
    };
    res.json(filtered);
  })
  .get('/', async (req, res) => {
    const books = await Book.getAll();
    const filtered = books.map(({ id, title, released }) => ({
      id,
      title,
      released,
    }));
    res.json(filtered);
  });
