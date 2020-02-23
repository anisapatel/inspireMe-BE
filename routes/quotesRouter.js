const express = require("express");
const quotesRouter = express.Router();
const {
  getQuoteByName,
  getAllQuotes
} = require("../controllers/quotesController");

quotesRouter.route("/:name").get(getQuoteByName);
quotesRouter.route("/").get(getAllQuotes);

module.exports = quotesRouter;
