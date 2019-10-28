var React = require('react');
const Nav = require("./navbar.jsx")
class Results extends React.Component {
  render() {

    let list = this.props.result.map( item => {
        return(
            <div className="card">
                <div className="card-body">

                <h2 className="card-title"><a href={"/allTrips/" + item.id}>{item.trip_name}</a> </h2>
                <p>{item.city_name}</p>
                <p>Duration: <br/> {item.from_date.toString().slice(0, 15)} <br/>
              To <br/> {item.to_date.toString().slice(0, 15)} </p>
                </div>
               
            </div>
        )
    })
    
    
      
    return (
      <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        </head>
       <body>
         <Nav/>
         <div className="container text-center pt-4">
         <h1 className="display-3">Results</h1>
      {list}
           
         </div>
     
       </body>
      </html>
    );
  }
}

module.exports = Results;