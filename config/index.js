const dotenv = require("dotenv");

dotenv.config();

const { APP_PORT, DEV_ENV } = process.env;

module.exports = {
  APP_PORT,
  DEV_ENV,
};
