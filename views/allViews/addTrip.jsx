var React = require("react");
const Navbar = require("./navbar.jsx");
class AddTrip extends React.Component {
  render() {
   
    return (
      <html>
        <head>
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          ></link>
          <link rel="stylesheet" href="font.css"/>
        </head>
        <body>
          <Navbar/>
          <div className="container text-center mt-5  pb-4 pt-4">
          <h3 className="display-4">Add A Trip</h3>
      
          <form action="/addTrip" method="POST">
          <p><input type="text" name="tripName" placeholder="Name Your Trip" className="form-control form-control-lg" required style={{backgroundColor: "#EAE8DD"}}/></p>
          <p><input type="text" name="city" placeholder="Search City" id="search_term" className="form-control form-control-lg" required style={{backgroundColor: "#EAE8DD"}}/></p>
          <p className="lead">From</p>
          <p><input type="date" name="fromDate" placeholder="From" class="form-control" required style={{backgroundColor: "#EAE8DD"}}/></p>
          <p className="lead">To</p>
          <p><input type="date" name="toDate" placeholder="TO" class="form-control" required style={{backgroundColor: "#EAE8DD"}}/></p>

          <button className="btn btn-primary btn-lg" type="submit">Add</button>
          </form>
        
          </div>
        


          <script src="/api.js"></script>
       
          <script async defer type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDvj3ORRNNhdf-Yv8R8AHZjqX_jHcnrxqo&&libraries=places&callback=searchTerm"></script>
        </body>
      
      </html>
    );
  }
}

module.exports = AddTrip;
