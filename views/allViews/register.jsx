var React = require("react");

class Register extends React.Component {
  render() {
    let message = ""
    if(this.props.message === "USER NAME TAKEN PLEASE USE ANOTHER NAME"){
     message = <div class="alert alert-danger" role="alert">
  {this.props.message}
</div>
    }
    return (
      <html>
        <head>
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          ></link>
          <link rel="stylesheet" href="/font.css"/>
        </head>
        <body>
          <div className="container text-center" style={{padding: "50px 90px;"}}>
          <h3 className="display-5">Please Register</h3>
          {message}
          <form action="/register" method="POST">
          <p><input type="text" name="name" placeholder="Name" className="form-control form-control-lg" required/></p>
          <p><input type="email" name="email" placeholder="Email" className="form-control form-control-lg" required/></p>
          <p><input type="text" name="username" placeholder="User Name" className="form-control form-control-lg" required/></p>
          <p> <input type="password" name="password" placeholder="Password" className="form-control form-control-lg" required/></p>
          <button className="btn btn-primary btn-lg" type="submit">Register</button>
          </form>
          </div>
         
        </body>
      </html>
    );
  }
}

module.exports = Register;
