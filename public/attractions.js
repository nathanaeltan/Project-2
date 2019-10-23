let attractions = document.getElementById("attraction_list");
var responseHandler = function() {
  var responseObj = JSON.parse(this.responseText);

  for (let i = 0; i < responseObj.results.length; i++) {
    console.log(responseObj.results[i].name);
    let el = document.createElement("li");
    el.classList.add("list-group-item");
    el.innerHTML = `
                <form action="/wishlist" method="POST" id="wishItem">
                <h3>${responseObj.results[i].name}</h3>
                <input  type="checkbox" name="name" value="${responseObj.results[i].name}"/>
                <p>${responseObj.results[i].formatted_address}</p>
                
                </form>
               
                 `;

    attractions.appendChild(el);
  }



};


// make a new request
var request = new XMLHttpRequest();
// listen for the request response
request.addEventListener("load", responseHandler);

let thelocation = document.cookie
  .split(";")[3]
  .slice(10, document.cookie.length);
// ready the system by calling open, and specifying the url
var url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=Attractions+in+${thelocation}&key=AIzaSyDvj3ORRNNhdf-Yv8R8AHZjqX_jHcnrxqo`;
request.open("GET", url);

// send the request
request.send();
