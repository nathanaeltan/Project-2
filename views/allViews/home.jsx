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
        <meta charset="utf-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>

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

          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = Home;
