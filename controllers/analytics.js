module.exports.overview = function (req, res) {
  res.status(200).json({
    login: 'controller'
  })
};

module.exports.analytics = function (req, res) {
  res.status(200).json({
    login: 'dcd controller'
  })
};
