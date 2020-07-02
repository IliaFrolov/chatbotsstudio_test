const jwt = require('jsonwebtoken');
const logger = require('../helpers/logger');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  // const newToken = jwt.sign('ilia', process.env.SECRET);

  if (!token) {
    return res.status(403).json({
      status: 403,
      message: 'FORBIDDEN',
    });
  }

  try {
    jwt.verify(token, process.env.SECRET);
  } catch (err) {
    logger.error(err);

    return res.status(401).json({
      status: 401,
      message: 'UNAUTHORIZED',
    });
  }

  return next();
};
