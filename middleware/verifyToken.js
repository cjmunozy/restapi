const jwt = require('jsonwebtoken');
const secret = 'byqI7lRE9nRiKWgKNrZoAw==';

const verifyToken = (req, res, next) => {
  // Extrae el token del encabezado Token
  let token = req.headers['Token'];

  if (!token) {
    return res.status(408).json({ msg: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(408).json({ msg: 'Token expired or invalid' });
  }
};

module.exports = verifyToken;
