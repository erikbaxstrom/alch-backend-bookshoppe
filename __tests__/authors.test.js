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

    expect(resp.status).toBe(200);
    expect(resp.body.length).toBe(5);
    expect(resp.body[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String),
    });
  });
  it('GET /authors/2 should return the second author and their books', async () => {
    const resp = await request(app).get('/authors/2');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      name: 'Julie Kagawa',
      dob: '1982-10-12',
      pob: 'Sacramento, CA, United States',
      books: [
        {
          id: 10,
          title: 'Shadow of the Fox',
          released: 2018,
        },
        {
          id: 11,
          title: 'Soul of the Sword',
          released: 2019,
        },
        {
          id: 12,
          title: 'Night of the Dragon',
          released: 2020,
        },
      ],
    });
  });
  afterAll(() => {
    pool.end();
  });
});
