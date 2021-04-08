const { Router } = require('express');
const Individual = require('../models/Individual');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const individual = await Individual.insert(req.body);
      res.send(individual);
    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const individuals = await Individual.retrieve();
      res.send(individuals);
    } catch (err) {
      next(err);
    }
  })

  .get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
      const individual = await Individual.retrieveById(id);
      res.send(individual);
    } catch (err) {
      next(err);
    }
  })

  .put('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
      const individual = await Individual.updateById(req.body, id);
      res.send(individual);
    } catch (err) {
      next(err);
    }
  })

  .delete('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
      const individual = await Individual.deleteById(id);
      res.send(individual);
    } catch (err) {
      next(err);
    }
  });
