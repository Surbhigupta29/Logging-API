const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.SSS',
    
    }),
    winston.format.json(),
    winston.format.align(),
    winston.format.printf((info) => {
        let msg = `${info.timestamp}`;
        msg = `${msg}: ${info.level}`;
        msg = `${msg}: ${info.message.trim()}`;
        return msg;
      })
  ), 
  transports: [
    new winston.transports.File({
      filename: `./logs/info.log`,
      level: 'info',
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss.SSS',
        }),
        winston.format.colorize(),
        winston.format.align(),
        winston.format.printf((info) => {
          let msg = `${info.timestamp}`;
          msg = `${msg}: ${info.level}`;
          msg = `${msg}: ${info.message.trim()}`;
          return msg;
        })
      ),
    }),
  ],
  exitOnError: false, // do not exit on handled exceptions
});

module.exports = logger;
