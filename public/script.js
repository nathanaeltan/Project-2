console.log("About to make a request.....");
let followbtn= document.getElementById('follow')
// what to do when we recieve the request
var responseHandler = function() {

 followbtn.addEventListener('click', ()=>{
     followbtn.style.display="none"
 })
};

// make a new request
var request = new XMLHttpRequest();

// listen for the request response
request.addEventListener("load", responseHandler);

var url = "/mydatarequest";
request.open("GET", url);

// send the request
request.send();