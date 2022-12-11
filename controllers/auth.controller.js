const Joi = require("joi");

function register(req, res, next) {
  // logic

  // [-] Validate the request
  // [-] Authorise the request
  // [-] Check if user is in the database already
  // [-] Prepare model
  // [-] Store in database
  // [-] Generate JWT token
  // [-] Send message

  // Validation
  // first create the schema

  const registerSchema = Joi.object({
    username: Joi.string().min(3).max(10).required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    repeate_password: Joi.ref("password"),
  });

  // validate the body request
  const { error } = registerSchema.validate(req.body);

  if (error) {
    return next(error);
  }

  res.json({ message: "Register" });
}

module.exports = {
  register,
};
