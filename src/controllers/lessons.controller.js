const db = require('../models');
const logger = require('../helpers/logger');

const Lesson = db.lesson;

exports.create = (req, res) => {
  const value = req.body.topic;
  if (!value) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  const lesson = new Lesson({
    topic: req.body.topic,
    teachers: req.body.teachers,
    group: req.body.group,
    classRoom: req.body.classRoom,
    time: req.body.time,
  });
  lesson
    .save(lesson)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      logger.error(err.message);
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the lesson.',
      });
    });
};

exports.findAll = (req, res) => {
  Lesson.find()
    .populate('teachers')
    .populate({ path: 'group', populate: { path: 'students' } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      logger.error(err.message);
      res.status(500)
        .send({ message: err.message || 'Some error occurred while retrieving Lesson.' });
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;

  Lesson.findById(id)
    .populate('teachers')
    .populate({ path: 'group', populate: { path: 'students' } })
    .then((data) => {
      if (!data) { res.status(404).send({ message: `Not found Lesson with id ${id}` }); } else res.send(data);
    })
    .catch((err) => {
      logger.error(err.message);
      res
        .status(500)
        .send({ message: err.message || `Error retrieving Lesson with id=${id}` });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: 'Data to update can not be empty!' });
  }
  const { id } = req.params;

  Lesson.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Lesson with id=${id}. Maybe Lesson was not found!`,
        });
      } else res.send({ message: 'Lesson was updated successfully.' });
    })
    .catch((err) => {
      logger.error(err.message);
      res.status(500).send({
        message: err.message || `Error updating Lesson with id=${id}`,
      });
    });
};

exports.delete = (req, res) => {
  const { id } = req.params;

  Lesson.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Lesson with id=${id}. Maybe Lesson was not found!`,
        });
      } else {
        res.send({
          message: 'Lesson was deleted successfully!',
        });
      }
    })
    .catch((err) => {
      logger.error(err.message);
      res.status(500).send({
        message: err.message || `Could not delete Lesson with id=${id}`,
      });
    });
};
