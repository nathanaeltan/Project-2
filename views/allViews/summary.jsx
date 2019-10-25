var React = require("react");

class Home extends React.Component {
  render() {
    let list = this.props.result.map(item => {
      return(

           
        <h1>  {item.hour}: {item.attraction}</h1>
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
          <h3 className="display-3 border-bottom">Here is your Itenary for {this.props.location}</h3> 
          {/* <h1>{this.props.result[0].day}</h1>       
        <h2>{this.props.result[0].hour}: {this.props.result[0].attraction}</h2> */}
        {list}
          </div>
          
        </body>
      </html>
    );
  }
}

module.exports = Home;
