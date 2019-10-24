const sha256 = require("js-sha256");
module.exports = (app, allModels) => {
  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR CONTROLLER
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
  // Render the add trip and country selector page
  app.get("/addtrip", mainController.addTripPage);
  // Push the results to the database
  app.post("/addtrip", mainController.addTrips);
  // Renders the list of attractions for the city selected in /addtrip
  app.get("/attractions", mainController.attractions);
  // posts the results of users chosen attractions to a wishlist
  app.post("/wishlist", mainController.wishlist);
 
  // app.get("/planner", mainController.plannerPage);
};