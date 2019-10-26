var React = require("react");

class Home extends React.Component {
  render() {
    let arr = this.props.test
 
    
    
    let list = arr.map((item) => {
     
      return(
        <ul className="list-group-item ml-4 "> <h3>{item.day}</h3> 
        <div className="row">
        <li className="list-group-item">{item.event.map(el => <p>{el.time}</p>)}</li>
        <li className="list-group-item">{item.event.map(el => <p>{el.attraction}</p>)}</li>
         
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
        </head>
        <body>
          <div className="container text-center mt-5">
            <h3 className="display-4 border-bottom">
              Here is your Itinenary for {this.props.location}
            </h3>
            <div className="col-12 d-inline-flex d-flex justify-content-center" >{list}</div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;
