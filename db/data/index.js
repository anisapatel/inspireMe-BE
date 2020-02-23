const ENV = process.env.NODE_ENV || "development";

const devData = require("../data/dev-data/index");
const testData = require("../data/test-data/index");

const data = {
  development: devData,
  test: testData
};

module.exports = data[ENV];
