console.log("About to make a request.....");



// what to do when we recieve the request
var responseHandler = function() {
    
new google.maps.places.Autocomplete(document.getElementById('search_term'))
};

// make a new request
var request = new XMLHttpRequest();

// listen for the request response
request.addEventListener("load", responseHandler);

var url = "";
request.open("GET", url);

// send the request
request.send();