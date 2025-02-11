const jwt = require('jsonwebtoken');
require('dotenv').config();

function generateToken(user) {
  const payload = {
    id: user.id,
    username: user.username
  };

  const token = jwt.sign(payload,process.env.JWT_KEY, {
    expiresIn: '1h' // Token will expire in 1 hour
  });

  return token;
}
  


module.exports = {generateToken};