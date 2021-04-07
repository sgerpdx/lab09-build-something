const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Individual = require('../lib/models/Individual');

describe('lab09-build-something routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  let indOne;
  let indTwo;
  beforeEach(async () => {
    indOne = await Individual.insert({
      alias: 'A Boring But Dependable Test Person',
      human: true,
    });
    indTwo = await Individual.insert({
      alias: 'Someone Sweeping Up Red Glitter Next Door',
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
          id: '5',
          alias: 'The Other George Bloom the Lepidopterist',
          human: true,
        });
      });
  });

  it('gets all individuals from the database', () => {
    return request(app)
      .get('/api/v1/individuals')
      .then((res) => {
        expect(res.body).toEqual(
          expect.arrayContaining([
            {
              id: '1',
              alias: 'Clyde the Transparent Aluminum Salesman',
              human: false,
            },
            {
              id: '2',
              alias: 'Nina Lately of Misty Hills Farm',
              human: true,
            },
            {
              id: '3',
              alias: 'A Boring But Dependable Test Person',
              human: true,
            },
          ])
        );
      });
  });

  it('gets an individual by id', () => {
    return request(app)
      .get('/api/v1/individuals/3')
      .then((res) => {
        expect(res.body).toEqual({
          id: '3',
          alias: 'A Boring But Dependable Test Person',
          human: true,
        });
      });
  });

  it('updates an individual by id', () => {
    return request(app)
      .put('/api/v1/individuals/3')
      .send({
        alias: 'A Boring But Dependable Test Bot',
        human: false,
      })
      .then((res) => {
        expect(res.body).toEqual({
          id: '3',
          alias: 'A Boring But Dependable Test Bot',
          human: false,
        });
      });
  });

  it('deletes an individual by id', () => {
    return request(app)
      .delete('/api/v1/individuals/4')
      .then((res) => {
        expect(res.body).toEqual({
          id: '4',
          alias: 'Someone Sweeping Up Red Glitter Next Door',
          human: true,
        });
      });
  });
});
