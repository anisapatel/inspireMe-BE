const { quotesData } = require("../data/index");

exports.seed = function(knex) {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      return knex("quotes")
        .insert(quotesData)
        .returning("*");
    })
    .then(quoteInsertions => {
      return quoteInsertions;
    });
};
