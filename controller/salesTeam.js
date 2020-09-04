
exports.getAllTeam = async (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      data: 'data info',
    });
  } catch (error) {
    next(error);
  }
};

exports.createSalesTeam = async (req, res, next) => {
  try {
    res.status(201).json({
      status: 'success',
      data: "new Data added",
    });
  } catch (error) {
    next(error);
  }
};

