const pool = require('../utils/pool');
// const individuals = require('../controllers/individuals');

module.exports = class Individual {
  id;
  alias;
  human;

  constructor(row) {
    this.id = row.id;
    this.alias = row.alias;
    this.human = row.human;
  }

  static async insert(individual) {
    const {
      rows,
    } = await pool.query(
      'INSERT INTO individuals (alias, human) VALUES ($1, $2) RETURNING *',
      [individual.alias, individual.human]
    );
    return new Individual(rows[0]);
  }
};
