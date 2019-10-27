var React = require("react");

class Home extends React.Component {
  render() {
  let list = this.props.result.map(item => {
      return(
          <li className="list-group-item">
              <a href={"/allTrips/" + item.id}>{item.trip_name}</a>
              <p>City: {item.city_name}</p>
              <p>Duration: <br/> {item.from_date.toString().slice(0, 15)} <br/>
              To <br/> {item.to_date.toString().slice(0, 15)} </p>
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
        </head>
        <body>
          <div className="container text-center mt-5">
          <h3 className="display-3 border-bottom">HERE ARE YOUR TRIPS</h3>
          
        <ul className="list-group">
        {list}
        </ul>

        
        
        
          </div>
          
        </body>
      </html>
    );
  }
}

module.exports = Home;
