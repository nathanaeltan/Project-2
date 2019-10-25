var React = require("react");

class Home extends React.Component {
  render() {
  let list = this.props.result.map(item => {
      return(
          <li draggable="true" className="list-group-item fill" >{item.attraction_name}</li>
      )
  })


  const n = this.props.result[0].date_part; // Or something else

  let days = [...Array(n)].map((e, i) => ( <div style={{display: "flex", width: "350px", height:"70px", border: "1px solid black"  }} ondrop="drop(event)" ondragover="allowDrop(event)" className="empty">Day {i + 1}</div>)  
  )
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
          <h3 className="display-3 border-bottom">Start Planning Your Trip</h3>
        
        <div className="row">
            <div className="col-6">
        {list}
            </div>

            <div className="col-6">
                {days}
            </div>
        </div>


        
        
          </div>
          <script src="/planner2.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Home;
