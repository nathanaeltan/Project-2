var React = require("react");
const Login = require("./login.jsx");
const Register = require("./register.jsx");
class Home extends React.Component {
  render() {
    let message = ""
    if(this.props.message === "Thank you For registering, Please Log in"){
     message = <div class="alert alert-success" role="alert">
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
          <link rel="stylesheet" href="landing.css"/>
        </head>
        <body>
       <header id="showcase">
       <div className="container text-center showcasetext">
           
           <h3 className="display-1 border-bottom pt-5 text-white">Welcome to EZ TRIPPER</h3>
         {message}
         <div className="container mt-4">
         {/* <a href="/register" className="btn btn-primary btn btn-lg ">Register</a> */}
         <button href="#" className="btn btn-primary btn btn-lg " data-toggle="modal" data-target="#register_modal">Register</button>
         {/* <a href="/logIn" className="btn btn-warning ml-5 btn-lg">Login</a> */}
         <button href="#" className="btn btn-warning ml-5 btn-lg" data-toggle="modal" data-target="#login_modal">Login</button>
         </div>
       
         <div class="modal fade" id="login_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
      <Login/>
    </div>
  </div>
</div>
         <div class="modal fade" id="register_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
      <Register/>
    </div>
  </div>
</div>
         </div>
       </header>
        
         
         
          
         
    








       <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = Home;
