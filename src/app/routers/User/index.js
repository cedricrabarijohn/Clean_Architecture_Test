const express = require("express");
const makeRoute = require("./user-router");
const route = makeRoute({ router: express.Router() });

module.exports = route;
