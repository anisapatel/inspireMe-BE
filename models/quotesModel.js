const knex = require("../db/connection");

exports.fetchQuoteByName = name => {
  return knex
    .from("quotes")
    .select("*")
    .where("quotes.name", "=", name)
    .then(quote => {
      return quote;
    });
};
