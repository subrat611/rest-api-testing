const express = require("express");

const { APP_PORT } = require("./config");

const app = express();

// import routes
const routes = require("./routes");

// Routes
app.use("/api/auth", routes.authRoutes);

app.listen(APP_PORT, () => {
  console.log(`Listening on port ${APP_PORT}`);
});
