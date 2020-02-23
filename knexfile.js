// Update with your config settings.
const { DB_URL } = process.env;
const ENV = process.env.NODE_ENV || "development";

const baseConfig = {
  client: "pg",
  migrations: {
    directory: "./db/migrations"
  },
  seeds: {
    directory: "./db/seed"
  }
};

const customConfig = {
  development: {
    connection: {
      database: "inspire_quotes"
    }
  },
  test: {
    connection: {
      database: "inspire_quotes_test"
    }
  },
  production: {
    connection: `${DB_URL}?ssl=true`
  }
};

module.exports = { ...customConfig[ENV], ...baseConfig };
