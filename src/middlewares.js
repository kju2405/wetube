export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn); //undefined or False 일 경우를 대비하여.
  res.locals.siteName = "Wetube";
  res.locals.loggedInUser = req.session.user;
  console.log(res.locals);
  next();
};
