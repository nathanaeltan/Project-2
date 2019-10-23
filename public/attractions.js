// what to do when we recieve the request

// let likebtn = document.querySelector(".like-btn");
// likebtn.addEventListener('click', ()=>{
//     console.log("CLICKED")
// })

var responseHandler = function() {
    var responseObj = JSON.parse( this.responseText );
    console.log(responseObj)
    var el = document.createElement('h2');
    // el.innerText = responseObj.wow;
    el.innerText = responseObj[0].username ;
    document.body.appendChild( el);

  };
  
  // make a new request
  var request = new XMLHttpRequest();
  
  // listen for the request response
  request.addEventListener("load", responseHandler);
  
  // ready the system by calling open, and specifying the url
  var url = "http://localhost:3000/mydata";
  request.open("GET", url);
  
  // send the request
  request.send();