const pool = require('../utils/pool.js');

class Book {
  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.released = row.released;
    this.authors = row.authors;
  }

  static async getAll() {
    const { rows } = await pool.query(`
    SELECT * FROM books`);
    return rows.map((bookRow) => new Book(bookRow));
  }

  static async getBookById(id) {
    const { rows } = await pool.query(
      `SELECT books.*, coalesce(
      json_agg(to_jsonb(authors))
      filter (WHERE authors.id IS NOT NULL), '[]') as authors
      FROM books
      LEFT JOIN authors_books on authors_books.book_id = books.id
      LEFT JOIN authors on authors.id = authors_books.author_id
      where books.id = $1
      group by books.id;`,
      [id]
    );
    console.log('getById rows:', rows[0]);
    return new Book(rows[0]);
  }
}

module.exports = Book;
