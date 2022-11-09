const pool = require('../utils/pool.js');

class Author {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.dob = row.dob;
    this.pob = row.pob;
  }

  static async getAll() {
    const { rows } = await pool.query(`
    SELECT * FROM authors`);
    return rows.map((authorRow) => new Author(authorRow));
  }

  static async getAuthorById(id) {
    const { rows } = await pool.query(
      `SELECT authors.*, coalesce(
      json_agg(to_jsonb(books))
      filter (WHERE books.id IS NOT NULL), '[]') as books
      FROM authors
      LEFT JOIN authors_books on authors.id = authors_books.id
      LEFT JOIN books on authors_books.book_id = books.id
      WHERE authors.id = $1
      GROUP BY authors.id;`,
      [id]
    );
    console.log('getAuthById rows:', rows);
    return rows[0];
  }
}

module.exports = Author;
