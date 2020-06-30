const mongoose = require('mongoose');
const dbConfig = require('../db/db.config.js');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.ingredient = require('./student.model.js')(mongoose);
db.prepack = require('./group.model.js')(mongoose);
db.decor = require('./lesson.model.js')(mongoose);

module.exports = db;
