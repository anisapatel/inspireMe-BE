const app = require("./app");
// const { PORT = 9090 } = process.env;
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
