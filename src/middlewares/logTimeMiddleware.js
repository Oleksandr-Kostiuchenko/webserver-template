export const logTimeMiddleware = (req, res, next) => {
  console.log(`Time: ${new Date().toLocaleTimeString()}`);
  next();
};
