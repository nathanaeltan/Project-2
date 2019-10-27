var React = require("react");

class Home extends React.Component {
  render() {

    let list = this.props.result.map(item => {
        return(
            <li>
                {item.day}
                {item.attraction}
                {item.time}
            </li>
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
          <link rel="stylesheet" href="style.css" />
        </head>
        <body>
          <div className="container text-center mt-5">
            <h3 className="display-3 border-bottom">
              Start Planning Your Trip
            </h3>

            <div className="row">
              <div className="col-3" style={{overflow:"auto", maxHeight:"80vh"}}>
                <h4>Attractions: </h4></div>
           {list}
              <div className="col-9 d-inline-flex text-center border-bottom days-holder">
               
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
