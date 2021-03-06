var React = require('react');

class Navbar extends React.Component {
  render() {

   
      return(<nav class="navbar  navbar-expand-lg navbar-light " style={{backgroundColor: "#2F4D57"}}>
  <a class="navbar-brand mb-0 h1" href="#" style={{color:"#F2FCED" }}>EZ TRIPPER</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
        <a class="nav-link" href="/home" className="display-3" style={{color:"#F2FCED" }}>Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/addTrip" style={{color:"#F2FCED" }}>Add a Trip</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/allTrips" style={{color:"#F2FCED" }}>See All Trips</a>
      </li>
  
      
    </ul>
    
   
     
    <form method="GET" action="/search" class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search all Trips" aria-label="Search" name="query" required/>
      
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>


    <form action="/logout" method="POST">
     
     <button class="btn btn-outline-secondary my-2 my-sm-0 text-right ml-5" type="submit">Log Out</button>
    
     </form>
  </div>
</nav>);


  }
}


module.exports = Navbar;