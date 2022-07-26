const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(400).json({
      status: "Failed",
    });
  }

  try {
    const verified = jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      Token: "Invalid Token",
    });
  }
};
