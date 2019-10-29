var React = require("react");
const Navbar = require("./navbar.jsx");
class Home extends React.Component {
  render() {
    let list = this.props.result.map(item => {
      return (
        <li
          draggable="true"
          className="list-group-item items"
          value={item.attraction_name} style={{backgroundColor:"#A7C5C5"}}
        >
          {item.attraction_name}
        </li>
      );
    });
    const time = 24;
    let hours = [...Array(time)].map((e, i) => (
      <div
      id={"0"+(i + 1) + ": 00"}
        className="hours days list-group-item"
        style={{backgroundColor:"#A0C6C6"}}
      >
     
      <p className="border-bottom lead"> {i + 1}:00</p>
       
      </div>
    ));

    const n = this.props.result[0].date_part; 

    let days = [...Array(n)].map((e, i) => (
      <div
     
        className=" ml-1 border row"
      >
      <div className="col-12">
      <h4 className="border-bottom dayText" > Day {i + 1}</h4>
      {hours}
      </div>
      
    
       
      </div>
    ));
    
  

     
    return (
      <html>
        <head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          ></link>
          <link rel="stylesheet" href="style.css" />
          <link rel="stylesheet" href="font.css"/>
        </head>
        <body>
        <Navbar/>
          <div className="container text-center mt-5">
            <h3 className="display-3 border-bottom">
              Start Planning Your Trip
            </h3>

            <div className="row">
              <div className="col-3" style={{overflow:"auto", maxHeight:"80vh"}}>
                <h4>Attractions: </h4>{list}</div>
           
              <div className="col-9 d-inline-flex text-center border-bottom days-holder">
                 {days}
              </div>
            </div>
            <a href="/yourItinerary" className="btn btn-success btn-block mt-3" id="submit_btn">Submit</a>
          </div>
          <script src="/planner2.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Home;
