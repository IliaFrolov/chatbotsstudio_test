const router = require('express').Router();
const lessons = require('../../controllers/lessons.controller.js');

module.exports = (app) => {
  router.post('/', lessons.create);

  router.get('/', lessons.findAll);

  router.get('/:id', lessons.findOne);

  router.put('/:id', lessons.update);

  router.delete('/:id', lessons.delete);

  app.use('/api/lessons', router);
};
