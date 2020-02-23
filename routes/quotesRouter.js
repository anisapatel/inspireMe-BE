const express = require("express");
const quotesRouter = express.Router();
const { getQuoteByName } = require("../controllers/quotesController");

quotesRouter.route("/:name").get(getQuoteByName);

module.exports = quotesRouter;
