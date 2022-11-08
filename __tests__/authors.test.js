const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('Authors Routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET /authors should return the list of authors (id and name)', async () => {
    const resp = await request(app).get('/authors');
    console.log('authors resp', resp.body);

    expect(resp.status).toBe(200);
    expect(resp.body.length).toBe(5);
    expect(resp.body[0]).toEqual({
      id: expect.any(Number),
      name: expect.any(String),
    });
  });
  afterAll(() => {
    pool.end();
  });
});
