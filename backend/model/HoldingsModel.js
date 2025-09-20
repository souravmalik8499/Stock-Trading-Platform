const { model } = require("mongoose");

const { HolidingsSchema } = require("../schemas/HolidingsSchema");

const HoldingsModel = new model("Holdings", HolidingsSchema);
module.exports = { HoldingsModel };