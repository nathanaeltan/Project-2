const sha256 = require("js-sha256");

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = dbPoolInstance => {
  // `dbPoolInstance` is accessible within this function scope
  let addUser = (newUser, callback) => {
    let name = newUser.name;
    let email = newUser.email;
    let username = newUser.username;
    let hashPassword = sha256(newUser.password);
    let input = [name, email, username , hashPassword]
  
    let query = "INSERT INTO users (name, email, username, password) VALUES ($1, $2, $3, $4) ";
    dbPoolInstance.query(query, input, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        if (result.rows.length > 0) {
         
          callback(null, result.rows);
        } else {
          callback(null, null);
        }
      }
   
    });
  }
  let checkUser = (user, callback) => {
    let input = [user.username];
    let queryString = "SELECT * FROM users WHERE users.username=$1";

    dbPoolInstance.query(queryString, input, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        if (result.rows.length > 0) {
          if (sha256(user.password) === result.rows[0].password && user.username === result.rows[0].username) {
            callback(null, result.rows[0]);
          } else {
            callback(null, "correct");
          }
        } else {
          callback(null, null);
        }
      }
    });
  };

  let userInfo = (userId, callback) => {
    let input = [userId];
    let queryString = "SELECT * FROM users WHERE users.id=$1";
    dbPoolInstance.query(queryString, input, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        if (result.rows.length > 0) {
            callback(null, result.rows[0]);
        
          
        } else {
          callback(null, null);
        }
      }
    });

  }

  let addTrip = (userId, city, tripTitle, fromDate, toDate, callback) =>{
    let input = [tripTitle, city, userId, fromDate, toDate];
    let queryString = "INSERT INTO trips (trip_name, city_name, trip_user_id, from_date, to_date) VALUES ($1, $2, $3, $4, $5)"
    dbPoolInstance.query(queryString, input, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        if (result.rows.length > 0) {
            console.log(result.rows[0])
    
        }   else {
          
          console.log(result.rows.length)
          callback(null, null);
        }
      }
    });
  }

  let addItemsPage = (triptitle, callback) =>{
    let input = [triptitle];
    let queryString = "SELECT * FROM trips WHERE trip_name = $1";
    dbPoolInstance.query(queryString, input, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        if (result.rows.length > 0) {
           callback(null, result.rows[0])
    
        }   else {
          console.log("RESULT IS NULL")
          console.log(result.rows.length)
          callback(null, null);
        }
      }
    });
  }

  let insertWishList = (userId, attractionName, tripId, callback) =>{
    let input = [userId, attractionName, tripId];
    let queryString = "INSERT INTO wishlist (user_id, attraction_name,trip_id) VALUES ($1, $2, $3)";
    dbPoolInstance.query(queryString, input, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        if (result.rows.length > 0) {
           callback(null, result.rows[0])
    
        }   else {
         
          console.log(result.rows.length)
          callback(null, null);
        }
      }
    });
  }

  let planner = (userId, tripId, callback) => {
    let input=[tripId];
    let queryString = "SELECT wishlist.user_id, wishlist.attraction_name, trips.from_date, trips.to_date, DATE_PART('day', trips.to_Date::timestamp - trips.from_date::timestamp) FROM wishlist  INNER JOIN trips  ON (wishlist.trip_id = trips.id) WHERE trips.id=$1";
      dbPoolInstance.query(queryString, input, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        if (result.rows.length > 0) {
           callback(null, result.rows)
    
        }   else {
         
          console.log(result.rows.length)
          callback(null, null);
        }
      }
    });
  }

  let insertSummary = (tripId, details, callback) => {
    for(let i = 0 ; i < details.length; i++) {
      let input = [tripId, details[i].day, details[i].time, details[i].attraction]
      let queryString = `INSERT INTO summary (trips_id, day, time, attraction) VALUES ($1, $2, $3, $4)`
      dbPoolInstance.query(queryString, input, (error, result) => {
        if (error) {
          callback(error, null);
        } else {
          if (result.rows.length > 0) {
             callback(null, result.rows)
      
          }   else {
           
            console.log(result.rows.length)
            callback(null, null);
          }
        }
      });
    }
  }

  let getSummary = (tripId, callback) => {
    let input = [tripId]
    let queryString = `SELECT * FROM summary WHERE trips_id = $1 ORDER BY day ASC`;
    dbPoolInstance.query(queryString, input, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        if (result.rows.length > 0) {
           callback(null, result.rows)
    
        }   else {
         
          console.log(result.rows.length)
          callback(null, null);
        }
      }
    });
  }


  return {
   addUser,
   checkUser,
   userInfo,
   addTrip,
   addItemsPage,
   insertWishList,
   planner,
   insertSummary,
   getSummary
  };
};
