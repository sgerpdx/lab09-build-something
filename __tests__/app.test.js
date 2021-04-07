const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('lab09-build-something routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates and add an individual to the database', () => {
    return request(app)
      .post('/api/v1/individuals')
      .send({
        alias: 'The Other George Bloom the Lepidopterist',
        human: true,
      })
      .then((res) => {
        expect(res.body).toEqual({
          id: 3,
          alias: 'The Other George Bloom the Lepidopterist',
          human: true,
        });
      });
  });
});
