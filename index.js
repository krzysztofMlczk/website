const { appWithRoutes } = require("./app");

const port = process.env.PORT || 3000;

appWithRoutes.listen(port, () => {
  console.log("Server is running on port " + port);
});
