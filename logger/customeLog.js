const logger = require('./logger');

async function req_res_time(req, res, next) {
    try {
        const requestTime = new Date().getTime();
        logger.info(`Request: ${req.originalUrl} - ${req.method}`);
        res.on('finish', () =>{
        const responseTime = new Date().getTime();
        logger.info(`Response: ${req.originalUrl} - ${req.method}`);
        const elapsedTime = responseTime - requestTime
        logger.info(`Elapsed Time:${elapsedTime}ms - ${req.originalUrl} - ${req.method}`);
        })
        next();
    } catch (err) {
        const response = {
            success: false,
            data: err.message
        }
        res.status(400).send(response);
    }

}

module.exports = req_res_time;