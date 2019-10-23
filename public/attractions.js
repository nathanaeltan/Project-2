// what to do when we recieve the request

// let likebtn = document.querySelector(".like-btn");
// likebtn.addEventListener('click', ()=>{
//     console.log("CLICKED")
// })

let attractions = document.getElementById('attraction_list')
var responseHandler = function() {
    var responseObj = JSON.parse( this.responseText );
    console.log(responseObj.results)

for (let i = 0 ; i<responseObj.results.length; i ++) {
    let el = document.createElement('li');
    el.classList.add("list-group-item")
    el.innerText=responseObj.results[i].name
   
   attractions.appendChild(el)
}
   

  };
  
  // make a new request
  var request = new XMLHttpRequest();
  console.log(document.cookie.split(';')[3].slice(10, document.cookie.length))
  // listen for the request response
  request.addEventListener("load", responseHandler);
  let thelocation = document.cookie.split(';')[3].slice(10, document.cookie.length)
  // ready the system by calling open, and specifying the url
  var url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=Attractions+in+${thelocation}&key=AIzaSyDvj3ORRNNhdf-Yv8R8AHZjqX_jHcnrxqo`;
  request.open("GET", url);
  
  // send the request
  request.send();