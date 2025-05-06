export const mainErrorMiddleware = (err, req, res) => {
  res.status(500).json({
    error: '500 ERROR',
    message: 'Sorry! Smth went wrong...',
  });
};
