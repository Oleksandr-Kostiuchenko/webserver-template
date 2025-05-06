export const responseMiddleware = (req, res) => {
  console.log(req.body);
  res.json({
    message: `Hello Webservices!👋🏻 `,
    data: req.body,
  });
};
