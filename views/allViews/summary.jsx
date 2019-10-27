var React = require("react");

class Home extends React.Component {
  render() {
    let arr = this.props.test
 
    
    
    let list = arr.map((item) => {
     
      return(
        <ul className="list-group-item ml-4 text-center "> <h3>{item.day}</h3> 
        <div className="d-flex justify-content-center">
        <li className="list-group-item col-2">{item.event.map(el => <p className=" border-bottom">{el.time.toString().slice(0 , 5)}</p>)}</li>
        <li className="list-group-item col-7">{item.event.map(el => <p className=" border-bottom">{el.attraction}</p>)}</li>
         
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
            <div className="col-12 text-center" >{list}</div>
          </div>

          <a href="/home" className="btn btn-primary btn-lg">Back To Home</a>
        </body>
      </html>
    );
  }
}

module.exports = Home;
