const pool = require('../utils/pool.js');

class Author {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.dob = row.dob;
    this.pob = row.pob;
  }

  static async getAll() {
    console.log('getAll running');
    const { rows } = await pool.query(`
    SELECT * FROM authors`);
    console.log('getAll rows', rows);
    return rows.map((authorRow) => new Author(authorRow));
  }
}

module.exports = Author;
