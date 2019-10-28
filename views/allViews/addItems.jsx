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
        </head>
        <body>
          <Navbar/>
          <div className="container">
            <div className="container text-center mt-5">
              <h3 className="display-3 border-bottom mb-4">
                YOU ARE GOING TO {this.props.result.city_name}
              </h3>

              <div className="row">
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
                  <h3>YOUR WISHLIST: </h3>
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
        </body>
      </html>
    );
  }
}

module.exports = Home;
