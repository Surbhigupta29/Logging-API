
const app = require('./app');
const logger = require("./logger/logger");

const port = 3000;

app.listen(port, () => {
  logger.info(`Server is listening on ${port}`);
});