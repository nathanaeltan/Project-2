var React = require("react");
const Navbar = require("./navbar.jsx");
class Home extends React.Component {
  render() {
    let arr = this.props.test
 
    
    
    let list = arr.map((item) => {
     
      return(
        <ul className="list-group-item ml-4 text-center "> 
        <div className="d-flex justify-content-center">
          <li className="list-group-item col-2 " style={{display: "flex", flexDirection:"row", alignItems:"center", justifyContent: "center"}} ><h3 style={{}}>{item.day}</h3> </li>
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
          <link rel="stylesheet" href="font.css"/>
          <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
          <script type="text/javascript" src="/jspdf.min.js"></script>
          <script type="text/javascript" src="/html2canvas.js"></script>
          <script src="/pdf.js"></script>
        </head>
        <body>
          <Navbar/>
          
          <div className="container text-center mt-5" id="summary">
            <h3 className="display-4 border-bottom">
              Here is your Itinenary for: <br/> {this.props.location}
            </h3>
            <h4 className="pb-3"><strong>{this.props.result[0].from_date.toString().slice(0, 15)} - {this.props.result[0].to_date.toString().slice(0, 15)}</strong></h4>
            <div className="col-12 text-center mt-4" >{list}</div>
            <footer className="footer mt-5">
              <div className="container-fluid">
                <p className="copyright">&copy; 2019 EZ Tripper</p>
              </div>
            </footer>
          </div>
          <div className="container text-center">
          <a href="javascript:genPDF()" className="btn btn-warning">Export As PDF</a>
          </div>
      
        </body>
      </html>
    );
  }
}

module.exports = Home;
