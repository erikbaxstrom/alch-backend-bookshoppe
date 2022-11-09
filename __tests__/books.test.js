const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('Books Routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET /books should return a list of books (id, title, release year)', async () => {
    const resp = await request(app).get('/books');
    expect(resp.status).toBe(200);
    expect(resp.body.length).toBe(14);
    expect(resp.body[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      released: expect.any(Number),
    });
  });
  afterAll(() => {
    pool.end();
  });
});
