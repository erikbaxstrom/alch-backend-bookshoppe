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
  it('GET /books/1 should return the first book and associated info', async () => {
    const resp = await request(app).get('/books/13');
    const expectedResponseBody = {
      title: 'Six of Crows',
      released: 2015,
      authors: [{ id: 1, name: 'Leigh Bardugo' }],
    };
    //expectations
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual(expectedResponseBody);
  });
  afterAll(() => {
    pool.end();
  });
});
