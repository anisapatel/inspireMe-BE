exports.up = function(knex) {
  return knex.schema.createTable("quotes", quotesTable => {
    quotesTable
      .string("name")
      .primary()
      .notNullable();
    quotesTable.string("quote").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("quotes");
};
