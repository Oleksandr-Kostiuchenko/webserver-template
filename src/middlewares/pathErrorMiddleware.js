export const pathErrorMiddleWare = (req, res, next) => {
  res.status(404).json({
    error: '404 ERROR',
    message: "This path isn't found",
  });
  next();
};
