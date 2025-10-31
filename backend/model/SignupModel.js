const { model } = require("mongoose");

const { SignupSchema } = require("../schemas/SignupSchema");
const { default: Signup } = require("../../frontend/src/landing_page/signup/Signup");

const SignupModel = new model("signup", SignupSchema);

module.exports = { SignupModel };