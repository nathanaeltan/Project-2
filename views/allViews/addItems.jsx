var React = require("react");
const Navbar = require("./navbar.jsx");

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
         
          <script
            type="text/javascript"
            src="http://code.jquery.com/jquery-1.7.1.min.js"
          ></script>
          <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"></link>
          <link rel="stylesheet" href="font.css" />
        </head>
        <body>
          <Navbar />
          <div className="container text-center" style={{paddingTop:"50px"}}>
          <div class="spinner-border text-center" role="status" id="loader" style={{width: "10rem", height: "10rem"}}>
  <span class="sr-only" style={{fontSize:"3rem"}}>Loading...</span>
</div>
          </div>
          
          <div className="container" id="wishlistItems" style={{display:"none"}}>
            <div className="container text-center mt-5">
              <h3
                className="display-4 border-bottom mb-4"
                style={{ color: "#354C56" }}
              >
                YOU ARE GOING TO: <br /> {this.props.result.city_name}
              </h3>
             

              <div className="row"   >
                <div className="col-6">
                  <h3 className=" border-bottom">
                    Here are a list of attractions in{" "}
                    {this.props.result.city_name}
                  </h3>

                  <ul id="attraction_list" className="list-group">
                    <ul id="wishItem"></ul>
                  </ul>
                </div>

                <div className="col-6">
                  <h3 id="wishlist_title">YOUR WISHLIST: </h3>
                  <ul id="wish_list" className="list-group"></ul>
                </div>
              </div>
            </div>

            <a
              href="/planner"
              className="btn btn-success btn-block btn-lg mt-3"
            >
              Confirm WishList
            </a>
          </div>
        
          <script src="/attractions.js"></script>
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>

        </body>
      </html>
    );
  }
}

module.exports = Home;
