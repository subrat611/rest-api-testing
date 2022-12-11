const express = require("express");
const bodyParser = require("body-parser");

const { APP_PORT } = require("./config");
const { errHandler } = require("./middlewares/error.handler");

const app = express();

// parse application/json
app.use(bodyParser.json());

// import routes
const routes = require("./routes");

// Routes
app.use("/api/auth", routes.authRoutes);

app.use(errHandler);

app.listen(APP_PORT, () => {
  console.log(`Listening on port ${APP_PORT}`);
});
