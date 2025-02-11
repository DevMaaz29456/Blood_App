const testController = (req, res) => {
  res.status(200).send({
    message: "wellcome to the users",
    success: true,
  });
};

module.exports = { testController };
