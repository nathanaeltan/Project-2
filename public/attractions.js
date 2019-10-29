let attractions = document.getElementById("attraction_list");
let wishItem = document.getElementById("wishItem");
let wishList = document.getElementById("wish_list")
let API_KEY = "AIzaSyDvj3ORRNNhdf-Yv8R8AHZjqX_jHcnrxqo"
let WLI = document.getElementById('wishlistItems')
let wishlistTitle = document.getElementById('wishlist_title')
let loader = document.getElementById('loader')



var responseHandler = function() {
if(this.readyState == 4 && this.status == 200) {

  console.log(this.readyState)
// RENDERING DATA FROM THE GOOGLE API TO THE DOM 
var responseObj = JSON.parse(this.responseText);
for (let i = 0; i < responseObj.results.length; i++) {
  let photoUrl = responseObj.results[i].photos[0].photo_reference
  let placeId = responseObj.results[i].place_id

  loader.style.display="none"
  let el = document.createElement("li");
  el.classList.add("list-group-item");
  el.innerHTML = `

              <h3>${responseObj.results[i].name}</h3>
              <img src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=200&photoreference=${photoUrl}&key=${API_KEY}" alt="" height: auto width: 200px class="img-fluid"/>

              <input  type="hidden" class="attractioninput" name="name" value="${responseObj.results[i].name}"/>
              <p class="mt-4">${responseObj.results[i].formatted_address} </br>
            <i> Rating: ${responseObj.results[i].rating}</i></p>
              <button type="submit" id="addwishitem" value="${responseObj.results[i].name}" class="wishlistBtn btn btn-primary">Add To WishList</button>
          
             
               `;
  el.style.backgroundColor = "#2F4D57"
  el.style.marginTop ="5px"
  wishItem.append(el);
  WLI.style.display="block"
  
}
  
  }
// var responseHandler = function() {

//   // RENDERING DATA FROM THE GOOGLE API TO THE DOM 
//   var responseObj = JSON.parse(this.responseText);
//   for (let i = 0; i < responseObj.results.length; i++) {
//     let photoUrl = responseObj.results[i].photos[0].photo_reference
//     let placeId = responseObj.results[i].place_id

    
//     let el = document.createElement("li");
//     el.classList.add("list-group-item");
//     el.innerHTML = `

//                 <h3>${responseObj.results[i].name}</h3>
//                 <img src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=200&photoreference=${photoUrl}&key=${API_KEY}" alt="" height: auto width: 200px class="img-fluid"/>

//                 <input  type="hidden" class="attractioninput" name="name" value="${responseObj.results[i].name}"/>
//                 <p class="mt-4">${responseObj.results[i].formatted_address} </br>
//               <i> Rating: ${responseObj.results[i].rating}</i></p>
//                 <button type="submit" id="addwishitem" value="${responseObj.results[i].name}" class="wishlistBtn btn btn-primary">Add To WishList</button>
            
               
//                  `;
//     el.style.backgroundColor = "#2F4D57"
//     el.style.marginTop ="5px"
//     wishItem.append(el);

//   }

  // SENDS DATA TO THE CONTROLLER TO THE TABLE AND UPDATE BUTTTON STYLINGS AND MOVE THE ITEM TO THE WISHLIST SECTION
  let allAttractions = document.querySelectorAll(".attractioninput");
  

  let allBtns = document.querySelectorAll(".wishlistBtn");
  allBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      console.log("CLICKED", e.target);
      const data = {
        attractionname: e.target.value
      };
      e.target.style.backgroundColor = "red";
      e.target.innerText = "Added";
      // e.target.parentNode.remove()
      wishList.append(e.target.parentNode)
     

      var request = new XMLHttpRequest();
      request.addEventListener("load", function() {
        console.log("DONE");
        console.log(this.responseText);
      });

    
      let url = "/wishlist";
      request.open("POST", url);
      request.setRequestHeader(
        "Content-Type",
        "application/json;charset=UTF-8"
      );

      request.send(JSON.stringify(data));
    });
  });


};


function updateProgress(evt){
  if (evt.lengthComputable){
     var percentComplete = (evt.loaded / evt.total)*100;  
      console.log(percentComplete+"% completed");
   } 
}
// make a new request
var request = new XMLHttpRequest();





let thelocation = document.cookie
  .split(";")[3]
  .slice(10, document.cookie.length);
// ready the system by calling open, and specifying the url
var url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=Attractions+in+${thelocation}&key=${API_KEY}`;
request.open("GET", url );


// send the request
// request.addEventListener("load", responseHandler);

request.onreadystatechange = responseHandler

request.send();

