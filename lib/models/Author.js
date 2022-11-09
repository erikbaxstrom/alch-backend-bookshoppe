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
}

module.exports = Author;
