let attractions = document.getElementById("attraction_list");
let wishItem = document.getElementById("wishItem");
let wishList = document.getElementById("wish_list")
var responseHandler = function() {

  // RENDERING DATA FROM THE GOOGLE API TO THE DOM 
  var responseObj = JSON.parse(this.responseText);
  console.log(responseObj);
  for (let i = 0; i < responseObj.results.length; i++) {
    let el = document.createElement("li");
    el.classList.add("list-group-item");
    el.innerHTML = `
                
                <h3>${responseObj.results[i].name}</h3>
                <input  type="hidden" class="attractioninput" name="name" value="${responseObj.results[i].name}"/>
                <p>${responseObj.results[i].formatted_address}</p>
                <button type="submit" id="addwishitem" value="${responseObj.results[i].name}" class="wishlistBtn btn btn-primary">Add To WishList</button>
             
               
                 `;

    wishItem.append(el);
  }

  // SENDS DATA TO THE CONTROLLER TO THE TABLE AND UPDATE BUTTTON STYLINGS AND MOVE THE ITEM TO THE WISHLIST SECTION
  let allAttractions = document.querySelectorAll(".attractioninput");
  for (let i = 0; i < allAttractions.length; i++) {}

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

      console.log(data);
      let url = "/wishlist";
      request.open("POST", url);
      request.setRequestHeader(
        "Content-Type",
        "application/json;charset=UTF-8"
      );

      request.send(JSON.stringify(data));
    });
  });

  // document
  //   .getElementById("wishItem")
  //   .addEventListener("submit", function(event) {
  //     event.preventDefault();

  //   });
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
