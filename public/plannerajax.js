let allbtns = document.querySelectorAll(".save-btn");
console.log("HELLO");

allbtns.forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    e.target.style.backgroundColor = "grey"
    e.target.innerText="Edit"
    let day = e.target.parentNode.childNodes[0].value;
    let arr = e.target.parentNode.childNodes[2].childNodes[1].childNodes;
    let timeArr = [];
    let data = [];
   
    // loop through the hours and return array of 24 hours
    for (let j = 0; j < arr.length; j++) {
      timeArr.push(arr[j].childNodes[1].childNodes[1].value);
    }

    arr.forEach((x, i) => {
      let attraction = x.childNodes[1].childNodes[0].value;
      if (attraction !== "") {
        data.push({
            day:day,
          attraction: attraction,
          time: timeArr[i]
        });
      }
    });

/*DATA FORMAT : {
    day: day
    attraction: attraciton,
    time: time
} */
var request = new XMLHttpRequest();
request.addEventListener("load", function() {
  console.log("DONE");
  console.log(this.responseText);
});

console.log(data);
let url = "/schedule";
request.open("POST", url);
request.setRequestHeader(
  "Content-Type",
  "application/json;charset=UTF-8"
);
request.send(JSON.stringify(data));
  });
});
