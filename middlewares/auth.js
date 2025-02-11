const jwt = require('jsonwebtoken');
require('dotenv').config();

function authenticateToken(req, res, next) {
  // Get token from the Authorization header
  const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
  console.log(token);
  if (token == null) {
    return res.sendStatus(401); // Unauthorized
  }

  jwt.verify(token,process.env.JWT_KEY, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Forbidden
    }
    req.user = user;
    next();
  });
}

module.exports = { authenticateToken };