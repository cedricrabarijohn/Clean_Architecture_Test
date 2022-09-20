const express = require("express");
const userRouter = require("./User");
const makeGlobalRouter = require("./global-router");

const globalRouter = makeGlobalRouter({ router: express.Router() });
module.exports = globalRouter;
