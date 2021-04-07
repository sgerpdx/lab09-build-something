const { Router } = require('express');
const Individual = require('../models/Individual');

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const individual = await Individual.insert(req.body);
    res.send(individual);
  } catch (err) {
    next(err);
  }
});
