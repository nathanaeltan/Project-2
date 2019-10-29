var React = require("react");
const Navbar = require("./navbar.jsx");
class Home extends React.Component {
  render() {

  let list;
  let title;
  if(this.props.message === "NO TRIPS TO SHOW") {
    title = "No Trips To Show"
    list= ""
  } else {
    title= "Here Are Your Trips: "
    list =  this.props.result.map(item => {
      return(
          <div className="card mt-1" style={{backgroundColor:"#A0C6C6", border:"1px solid #2F4D57"}}>
            <div className="card-body">
            <h3 className="card-title"> <a href={"/allTrips/" + item.id}>{item.trip_name}</a></h3>
              <p>City: {item.city_name}</p>
              <p>Duration: <br/> {item.from_date.toString().slice(0, 15)} - {item.to_date.toString().slice(0, 15)} </p>
            </div>
            
          </div>
      )
  })
  }
  
 
  let half = Math.ceil(list.length / 2);
  let leftSide = list.slice(0, half);
  let rightSide = list.slice(half, list.length);

    return (
      <html>
        <head>
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          ></link>
          <link rel="stylesheet" href="/font.css"/>
        </head>
        <body>
        <Navbar/>
          <div className="container text-center mt-5">
          <h3 className="display-3 border-bottom">{title}</h3>
         
          
     
          <div className="row">
              <div className="col">{leftSide}</div>
              <div className="col">{rightSide}</div>
            </div>
        
        
        
          </div>
          
        </body>
      </html>
    );
  }
}

module.exports = Home;
