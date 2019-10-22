const sha256 = require("js-sha256");

module.exports = db => {
  let SALT = "SuperSecreTPassWord";
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
  let landingPage = (request, response) => {
    response.render("./allViews/welcome")
  }
 
  let registerPage = (request, response) => {
    response.render("./allViews/register")
  }

  let register = (request, response) => {
    let newUser = request.body;
    db.trips.addUser(newUser, (error, user) => {
      if (error) {
        console.error("query error:", error.stack);
        const data = {
          message: "USER NAME TAKEN PLEASE USE ANOTHER NAME"
        }
        response.render("allViews/register", data);
      } else {
        
          response.redirect('/welcome')
      
      
      }
    })
  }

  let loginPage = (request, response) => {
    response.render("allViews/login")
  }

  let login = (request, response) => {
    let currentUser = request.body;
    db.trips.checkUser(currentUser, (error, user) => {
      if (error) {
        console.error("query error:", err.stack);
        response.send("query error");
      } else {
        if (user === "correct") {
          const data = {
            message: "Error: Please Try Again"
          }
          response.render('allViews/login', data)

          // response.send("WRONG PASSWORD");
        } else if (user) {
          let hashCookie = sha256(SALT + user.id);
          response.cookie("logged_in", hashCookie);
          response.cookie("user_id", user.id);
          response.cookie("user_name", user.username)
       
          response.redirect('/home')
        } else {
          const data = {
            message: "Error: Please Try Again"
          }
          response.render('allViews/login', data)
        }
      } 
    });
  }


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    landingPage: landingPage,
    registerPage: registerPage,
    register: register,
    loginPage: loginPage,
    login: login
  };
};
