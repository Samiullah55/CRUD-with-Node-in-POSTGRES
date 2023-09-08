// creating random key for jwt
// node -p "require('crypto').randomBytes(48).toString('hex')";
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("./config.json");

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const accessTokenSecret = jwtSecret.secretKey;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
module.exports = authenticateJWT;
