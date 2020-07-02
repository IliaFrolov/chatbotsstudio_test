require('dotenv').config({ path: './config/.env' }, { debug: true });
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./helpers/logger');

const app = express();
const PORT = process.env.HTTP_PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./models');

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info('Connected to the database!');
  })
  .catch((err) => {
    logger.error('Cannot connect to the database!', err);
    process.exit();
  });

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to school application.' });
});

require('./routes/lessons/lessons.routes')(app);

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}.`);
});
