const { ValidationError } = require("joi");
const { DEV_ENV } = require("../config");

function errHandler(err, req, res, next) {
  // setting default values

  let status_code = 500;
  let data = {
    message: "Internal server error",
    ...(DEV_ENV === "true" && { original_error: err.message }),
  };

  // check
  if (err instanceof ValidationError) {
    status_code = 400;
    data = {
      message: err.message,
    };
  }
 
  return res.status(status_code).json(data);
}

module.exports = {
  errHandler,
};
