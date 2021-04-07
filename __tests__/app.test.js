const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Individual = require('../lib/models/Individual');

describe('lab09-build-something routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  beforeEach(async () => {
    await Individual.insert({
      alias: 'A Boring But Dependable Test Person',
      human: true,
    });
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
          id: '4',
          alias: 'The Other George Bloom the Lepidopterist',
          human: true,
        });
      });
  });
});
