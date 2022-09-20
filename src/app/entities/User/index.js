const mongoose = require("mongoose");
const buildMakeUser = require("./User");
const makeUser = buildMakeUser({ mongoose });
module.exports = makeUser