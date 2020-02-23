// Update with your config settings.
const ENV = process.env.NODE_ENV || "development";

const baseConfig ={
  client: "pg",
  migrations: {
    directory: "./db/migrations"
  },
  seeds: {
    directory: "./db/seed"
  }
}

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
}

module.exports = {...customConfig[ENV],  ...baseConfig};
