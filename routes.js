const sha256 = require("js-sha256");
module.exports = (app, allModels) => {
  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR TWEET CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller

  const mainController = require("./controllers/mainController")(allModels);

  app.get("/welcome", mainController.landingPage);
  app.get("/register", mainController.registerPage);
  app.post("/register", mainController.register);
  app.get("/login", mainController.loginPage);
  app.post("/login", mainController.login);
  app.get("/home", mainController.homePage);
  app.get("/addtrip", mainController.addTripPage);
  app.post("/addtrip", mainController.addTrip);
};
