const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key';

const authenticateToken = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Token not provided' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }

    req.user = decoded.user; 
    next();
  });

};

module.exports = authenticateToken;
