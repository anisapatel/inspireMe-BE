exports.up = function(knex) {
  console.log("creating quotes table...");
  return knex.schema.createTable("quotes", quotesTable => {
    quotesTable
      .string("name")
      .primary()
      .notNullable();
    quotesTable.string("quote").notNullable();
  });
};

exports.down = function(knex) {
  console.log("dropping quotes table...");
  return knex.schema.dropTable("quotes");
};
