module.exports = (app) => {
  const indexRoutes = require("./index.routes");
  app.use("/api", indexRoutes);
};
