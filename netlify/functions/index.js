const { appWithRoutes } = require("../../app");
const serverless = require("serverless-http");

module.exports = {
    handler: serverless(appWithRoutes),
};

