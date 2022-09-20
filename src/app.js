const express = require("express");
const app = express();
const connectDB = require("./config/db/connection");
connectDB();
app.use(express.json({ extended: false }));

const globalRouter = require('./app/routers')
app.use("/", globalRouter());

module.exports = app