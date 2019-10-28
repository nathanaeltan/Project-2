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
       
      } else if(result === "NO TRIPS") {
          db.trips.noTrips(userId, (error, posteddata) => {
          const data = {
            result: posteddata,
            message: "NO TRIPS"
          }
            response.render('allViews/home', data)
          
          })
          
          } else {
          const data = {
            result: result,
            message: "TRIPS AVAILABLE"
          }
          console.log(result)
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
    let fromDate = request.body.fromDate
    let toDate = request.body.toDate
    console.log(request.body.fromDate)
  
    db.trips.addTrip(userId, city, triptitle, fromDate, toDate, (error, result) => {
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
    let attractionName = request.body.attractionname;
    console.log("THIS IS THE RREQUEST BODYSKDJNASDJKAS + ", request.body)
    let tripId = request.cookies["trip_id"]

    db.trips.insertWishList(userId, attractionName, tripId, (error, result) => {
      if (error) {
        console.error("query error:", error.stack);
       
      } else {     

        response.send("successfully updated server")

      }
    })
  }

  let plannerPage = (request, response) => {
    let userId = request.cookies["user_id"];
    let tripId = request.cookies["trip_id"];
    db.trips.planner(userId, tripId, (error, result) => {
      if (error) {
        console.error("query error:", error.stack);
       
      } else {     
    
        const data = {
          result:result
        }
     
          response.render('allViews/planner2', data)

      }
    })
  }

  let summary = (request, response) => {
    let tripId = request.cookies["trip_id"];
    let details = request.body
    db.trips.insertSummary(tripId, details,(error, result) => {
      if (error) {
        console.error("query error:", error.stack);
       
      } else {     

      }
    })
   
  }

  let itinPage = (request, response) => {
    let tripId = request.cookies["trip_id"];
    let location = request.cookies["location"]
    db.trips.getSummary(tripId, (error, result) => {
      if (error) {
        console.error("query error:", error.stack);
       
      } else {     
       
        var output = [];

        result.forEach(function(item) {
          var existing = output.filter(function(v, i) {
            return v.day == item.day;
          });
          if (existing.length) {
            var existingIndex = output.indexOf(existing[0]);
            output[existingIndex].attraction = output[existingIndex].attraction.concat(item.attraction);
            output[existingIndex].time = output[existingIndex].time.concat(item.time);
          } else {
            if (typeof item.attraction == 'string' && typeof item.time =='string')
              item.attraction = [item.attraction];
              item.time = [item.time]
            output.push(item);
          }
        });
        
      
       
        let test =[]
        output.forEach((x, i) => {
          let event = []
          
          let day = x.day;
          x.time.forEach((y, j) =>{
            event.push({
              time: x.time[j],
              attraction: x.attraction[j]
            })
          })
          test.push({
            day: day,
            event:event
        
          })

        })
      
        const data = {
        location: location,
          test: test,
          result: result
        }
       
        response.render("allViews/summary" , data)
      }
    })
  }

let getAllTrips = (request, response) => {
  let userId = request.cookies["user_id"];
  db.trips.getUsersTrips(userId,(error, result) => {
    if (error) {
      console.error("query error:", error.stack);
     
    } else if (result === "NO TRIPS TO SHOW") {
      const data = {
        message: "NO TRIPS TO SHOW"
      }
      response.render('allViews/allUserTrips', data)
    } else {     

      
      const data = {
        result: result
      }
      
      response.render('allViews/allUserTrips', data)
    }
  })

}
let getATrip = (request, response) => {
  let tripId = request.params.id;
  let userId = request.cookies["user_id"];
  db.trips.getAUserTrip(userId, tripId,(error, result) => {
    if (error) {
      console.error("query error:", error.stack);
     
    } else {     

      var output = [];

      result.forEach(function(item) {
        var existing = output.filter(function(v, i) {
          return v.day == item.day;
        });
        if (existing.length) {
          var existingIndex = output.indexOf(existing[0]);
          output[existingIndex].attraction = output[existingIndex].attraction.concat(item.attraction);
          output[existingIndex].time = output[existingIndex].time.concat(item.time);
        } else {
          if (typeof item.attraction == 'string' && typeof item.time =='string')
            item.attraction = [item.attraction];
            item.time = [item.time]
          output.push(item);
        }
      });
      
    
     
      let test =[]
      output.forEach((x, i) => {
        let event = []
        
        let day = x.day;
        x.time.forEach((y, j) =>{
          event.push({
            time: x.time[j],
            attraction: x.attraction[j]
          })
        })
        test.push({
          day: day,
          event:event
      
        })

      })
    
      const data = {
     result:result,
        test: test,
        tripId: tripId
      }
      
    
      response.render("allViews/individualTrip" , data)
    }
  })


}

let editTrip = (request, response) => {
  let tripId = request.params.id;
  let userId = request.cookies["user_id"];

  db.trips.editPage(tripId, userId, (error, result) => {
    if (error) {
      console.error("query error:", error.stack);
     
    } else {     

      const data = {
        result: result
      }
      console.log(result)
      response.render("allViews/editpage", data)
    }
  })
}

let deleteTrip = (request, response) => {
  let tripId = request.params.id;
  db.trips.deleteUserTrip(tripId,  (error, result) => {
    if (error) {
      console.error("query error:", error.stack);
     
    } else {     

      
    
      response.redirect("/allTrips")
    }
  })
}

let search = (request, response) => {
  let searchTerm = request.query.query;
  let userId = request.cookies["user_id"];

  db.trips.searchTrips(userId,  (error, result) => {
    if (error) {
      console.error("query error:", error.stack);
     
    } else if(result === null) {

      const data = {
        message: "NO RESULTS"
      }
      response.render("allViews/searchResult", data)
    } else {     
      let searchArr = []
  
    for(let i = 0; i < result.length; i++) {
      let tripName = result[i].trip_name.toLowerCase();
      let cityName = result[i].city_name.toLowerCase();
      if(tripName.includes(searchTerm.toLowerCase()) || cityName.includes(searchTerm.toLowerCase())) {
        searchArr.push(result[i])
      }
    }

    const data = {
      result: searchArr,
      searchTerm: searchTerm
    }

    console.log(searchArr)
      response.render("allViews/searchResult", data)
    }
  })
}

let logout = (request, response) => {
  response.clearCookie("user_id")
  response.clearCookie("logged_in")
  response.clearCookie("user_name")
  response.clearCookie("location")
  response.clearCookie("trip_id")
  response.redirect('/welcome')
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
    wishlist: wishlist,
    plannerPage: plannerPage,
    summary: summary,
    itinPage: itinPage,
    getAllTrips: getAllTrips,
    getATrip: getATrip,
    editTrip: editTrip,
    deleteTrip: deleteTrip,
    search: search,
    logout: logout

   
    
  };
};
