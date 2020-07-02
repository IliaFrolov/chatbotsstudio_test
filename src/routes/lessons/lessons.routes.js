const router = require('express').Router();
const lessons = require('../../controllers/lessons.controller.js');
const auth = require('../../middlewares/auth');

module.exports = (app) => {
  router.post('/', auth, lessons.create);

  router.get('/', auth, lessons.findAll);

  router.get('/:id', auth, lessons.findOne);

  router.put('/:id', auth, lessons.update);

  router.delete('/:id', auth, lessons.delete);

  app.use('/api/lessons', router);
};
