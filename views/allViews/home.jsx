var React = require("react");
const Navbar = require("./navbar.jsx");
class Home extends React.Component {
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
        </head>
        <body>
        <Navbar/>
          <div className="container text-center mt-5">
         
          <h3 className="display-3 border-bottom">Welcome to EZ Tripper {this.props.result.name}</h3>
         
         <div className="btn_container mt-5">
         <a href="/addtrip" className="btn btn-primary btn-lg">Add A Trip</a>


        <a href="/allTrips" className="btn btn-primary btn-lg ml-4">See All Trips</a>
         </div>
          
        
        
          </div>
          <div className="container text-center mt-4">
            <h1>Your Latest Trip: </h1>
            <li className="list-group-item">
              <a href={"/allTrips/" + this.props.result.id}>{this.props.result.trip_name}</a>
              <p>City: {this.props.result.city_name}</p>
              <p>Duration: <br/> {this.props.result.from_date.toString().slice(0, 15)} <br/>
              To <br/> {this.props.result.to_date.toString().slice(0, 15)} </p>
            </li>
          </div>
          
        </body>
      </html>
    );
  }
}

module.exports = Home;
