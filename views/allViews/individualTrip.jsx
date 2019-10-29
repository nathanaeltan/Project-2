var React = require("react");
const Navbar = require("./navbar.jsx");
class Home extends React.Component {
  render() {
    let arr = this.props.test
 
    

    let city
    let list
    let fromDate
    let toDate
    let deletebtn;
    if(this.props.message === "NO ITIN") {
      list= <h3>No Attractions Yet</h3>
      city= this.props.otherResult.city_name
      fromDate=this.props.otherResult.from_date.toString().slice(0, 15);
      toDate = this.props.otherResult.to_date.toString().slice(0, 15);
      deletebtn =<form action={"/deleteTrip/" + this.props.otherResult.id + '?_method=delete'} method="POST"><button  className="btn btn-danger btn-lg ml-3" id="delete_btn">Delete</button></form> 

    } else {
      city = this.props.result[0].city_name;
      fromDate = this.props.result[0].from_date.toString().slice(0, 15);
      toDate = this.props.result[0].to_date.toString().slice(0, 15);
      deletebtn =<form action={"/deleteTrip/" + this.props.result[0].id + '?_method=delete'} method="POST"><button  className="btn btn-danger btn-lg ml-3" id="delete_btn">Delete</button></form> 

      list =  arr.map((item) => {
     
        return(
          <ul className=" ml-4 text-center" > 
          <div className=" d-flex justify-content-center" style={{backgroundColor:"#A0C6C6", fontSize:"1.3rem", border:"1px solid #2F4D57"}} >
          <li className=" col-2 " style={{display: "flex", flexDirection:"row", alignItems:"center", justifyContent: "center", backgroundColor:"#A0C6C6"}} ><h3 style={{}}>{item.day}</h3> </li>
          <li className="col-2 pt-2" style={{backgroundColor:"#A0C6C6", listStyleType: "none", fontSize:"1.7rem"}} > {item.event.map(el => <p className=" border-bottom">{el.time.toString().slice(0,5)}</p>)}</li>
          <li className="col-7 pt-2" style={{backgroundColor:"#A0C6C6", listStyleType: "none", fontSize:"1.7rem"}}>{item.event.map(el => <p className=" border-bottom" draggable="true">{el.attraction}</p>)}</li>
           
          </div>
        
      
        </ul>
         
        )
      })
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
        <link rel="stylesheet" href="/font.css"/>
        
          <script src="/pdf.js"></script>
        </head>
        <body>
        <Navbar/>
          <div className="container text-center mt-5" id="summary" >
            <h3 className="display-4 border-bottom " style={{color: "#354C56"}}>
              Here is your Itinenary for: <br/> {city}
            </h3>
            <h4 className="pb-3 mt-3"><strong>{fromDate} - {toDate}</strong></h4>
            <div className="col-12 mt-4" >{list}</div>
          </div>
        <div className="btn_container mt-3 pb-4 d-flex justify-content-center">
        <a href="/allTrips" className="btn btn-primary btn-lg">Back To Trips</a>
          {deletebtn}        
        </div>
        
        </body>
      </html>
    );
  }
}

module.exports = Home;
