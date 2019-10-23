var React = require("react");

class Home extends React.Component {
  render() {
  
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
        <h1>ADD ITEMS PAGE</h1>
          <h3 className="display-3 border-bottom">YOU ARE GOING TO {this.props.result.city_name}</h3>
          <p className="lead border-bottom">Here are a list of attractions in  {this.props.result.city_name}</p>

        <ul id="attraction_list" className="list-group">
            
        </ul>


          
        
        
          </div>
          <script src="/attractions.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Home;
