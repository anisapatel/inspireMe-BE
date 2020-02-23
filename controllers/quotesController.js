const { fetchQuoteByName, fetchAllQuotes } = require("../models/quotesModel");

exports.getQuoteByName = (req, res, next) => {
  const { name } = req.params;
  console.log(name);
  fetchQuoteByName(name)
    .then(quote => {
      res.status(200).send({ quote });
    })
    .catch(next);
};

exports.getAllQuotes = (req, res, next) => {
  fetchAllQuotes()
    .then(quotes => {
      res.status(200).send({ quotes });
    })
    .catch(next);
};
