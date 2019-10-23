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

  let homePage = (request, response) =>{

    let userId = request.cookies["user_id"];
    db.trips.userInfo(userId, (error, result) => {
      if (error) {
        console.error("query error:", error.stack);
       
      } else {
        const data = {
          result: result
        }
          response.render('allViews/home', data)
      
      
      }
    })
   
  }

  let addTripPage = (request, response) => {
    response.render("allViews/addTrip")
  }

  let addTrips = (request, response) => {
    let userId = request.cookies["user_id"];
    let city = request.body.city;
    let triptitle = request.body.tripName;
  
    db.trips.addTrip(userId, city, triptitle, (error, result) => {
      if (error) {
        console.error("query error:", error.stack);
       
      } else {
        
        db.trips.addItemsPage(triptitle, (error, result) => {
          if (error) {
            console.error("query error:", error.stack);
           
          } else {
          const data = {
            result: result
          }
          response.cookie("location", result.city_name)
          response.cookie("trip_id", result.id)
          response.render("allViews/addItems", data)
          }
        }

        )}
    })
  }

  let attractions = (request, response) => {
    let location = request.cookies["location"]
    response.send(location)
  }

  let wishlist = (request, response) => {
    let userId = request.cookies["user_id"];
    let attractionName = request.body.name;
    let tripId = request.cookies["trip_id"]

    db.trips.insertWishList(userId, attractionName, tripId, (error, result) => {
      if (error) {
        console.error("query error:", error.stack);
       
      } else {     
          response.send('SEND')

      }
    })
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
    login: login,
    homePage: homePage,
    addTripPage: addTripPage,
    addTrips: addTrips,
    attractions: attractions,
    wishlist: wishlist
   
    
  };
};
