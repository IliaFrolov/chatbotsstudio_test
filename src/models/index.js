const mongoose = require('mongoose');
const dbConfig = require('../db/db.config.js');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.student = require('./student.model.js')(mongoose);
db.group = require('./group.model.js')(mongoose);
db.lesson = require('./lesson.model.js')(mongoose);

module.exports = db;
