const checkAuth = (req, res, next) => {
  if (!req.session.user) {
    console.log('ttt', req.session.user);
    return res.sendStatus(401);
  }
  return next();
};

module.exports = checkAuth;
