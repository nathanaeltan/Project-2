var React = require("react");
const Navbar = require("./navbar.jsx");
class Home extends React.Component {
  render() {
    let arr = this.props.test
 
    
    
    let list = arr.map((item) => {
     
      return(
        <ul className="list-group-item ml-4 text-center"> <h3>{item.day}</h3> 
        <div className=" d-flex justify-content-center" >
        <li className="list-group-item col-2"  >{item.event.map(el => <p className=" border-bottom">{el.time.toString().slice(0,5)}</p>)}</li>
        <li className="list-group-item col-7" >{item.event.map(el => <p className=" border-bottom" draggable="true">{el.attraction}</p>)}</li>
         
        </div>
      
    
      </ul>
       
      )
    })
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
          <div className="container text-center mt-5" >
            <h3 className="display-4 border-bottom">
              Here is your Itinenary for {this.props.result[0].city_name}
            </h3>
            
            <div className="col-12 " >{list}</div>
          </div>
        <div className="btn_container mt-3 pb-4 d-flex justify-content-center">
        <a href="/allTrips" className="btn btn-primary btn-lg">Back To Trips</a>
        <a href="#" className="btn btn-secondary btn-lg ml-3" id="edit_btn">Edit</a>
        <form action={"/deleteTrip/" + this.props.result[0].id + '?_method=delete'} method="POST"><button  className="btn btn-danger btn-lg ml-3" id="delete_btn">Delete</button></form>
        
        </div>
        <script src="/edit.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Home;
