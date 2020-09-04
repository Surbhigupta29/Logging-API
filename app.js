const express = require('express');
const createError = require('http-errors');
const sales = require('./routes/salesTeam');
const req_res_time =  require('./logger/customeLog');
const app = express();

//custom logger middleware
app.use(req_res_time);

//route saleseam
app.use('/salesTeam', sales);

// error handling middleware
app.use(function (req, res, next) {
    next(createError(404));
  });
  
  // error handler
app.use(function (err, req, res) {
    logger.info(
      `${err.statusCode || 500} - ${err.status} - ${err.message} - ${
        req.originalUrl
      } - ${req.method} - ${req.ip}`
    );
  
    // render the error page
    res.status(err.statusCode || 500);
    res.send({
      status: err.status,
      message: err.message,
    });
  });
  

module.exports = app;