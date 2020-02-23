const { fetchQuoteByName } = require("../models/quotesModel");

exports.getQuoteByName = (req, res, next) => {
  const { name } = req.params;
  console.log(name);
  fetchQuoteByName(name)
    .then(quote => {
      res.status(200).send({ quote });
    })
    .catch(next);
};
