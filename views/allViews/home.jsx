var React = require("react");
const Navbar = require("./navbar.jsx");

class Home extends React.Component {
  render() {

    let username;
    if (this.props.message === "NO TRIPS") {
      username = this.props.result.username.toUpperCase()
    } else if(this.props.message === "TRIPS AVAILABLE"){
      username = this.props.result.username.toUpperCase()
    }
  

    let latestTrip;
    if(this.props.message === "NO TRIPS") {
    latestTrip = ""
    } else if(this.props.message === "TRIPS AVAILABLE"){
      latestTrip = <li className="list-group-item" style={{backgroundColor:"#A0C6C6", fontSize:"1.5rem"}}>
     <h3><a href={"/allTrips/" + this.props.result.id}>
        {this.props.result.trip_name}
      </a></h3> 
      <p>City: {this.props.result.city_name}</p>
      <p>
        Duration: <br />{" "}
        {this.props.result.from_date.toString().slice(0, 15)} -
         {this.props.result.to_date
          .toString()
          .slice(0, 15)}{" "}
      </p>
    </li> 
    }
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
          <Navbar />
          <div className="container text-center mt-5">
            <h3 className="display-3 " style={{borderBottom: "2px solid #F3FAEE" }}>
              Welcome {username}
            </h3>
            <p className="lead">Start Planning Your Next Trip!</p>

            <div className="btn_container mt-5 ">
              <a href="/addtrip" className="btn btn-primary  btn-lg p-3" >
                Add A Trip
              </a>

              <a href="/allTrips" className="btn btn-secondary  btn-lg ml-4 p-3" >
                See All Trips
              </a>
            </div>
          </div>
          <div className="container text-center mt-5">
            <h1 style={{color: "#F1FBED"}}>Your Latest Trip: </h1>
          {latestTrip}
            <footer className="footer mt-5">
              <div className="container-fluid">
                <p className="copyright">&copy; 2019 EZ Tripper</p>
              </div>
            </footer>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;
