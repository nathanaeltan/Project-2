// const empties = document.querySelectorAll('.empty');
// const attractions = document.querySelectorAll('.fill')


// attractions.forEach(item => { item.addEventListener('dragstart', dragStart)});
// attractions.forEach(item => { item.addEventListener('dragend', dragEnd)});
// // attractions.addEventListener('dragend', dragEnd);

// empties.forEach(item => {
//     item.addEventListener('dragover', dragOver);
//     item.addEventListener('dragenter', dragEnter);
//     item.addEventListener('dragleave', dragLeave);
//     item.addEventListener('drop', dragDrop);
// })


// function dragStart(){
//     console.log('start')
//     setTimeout(()=> this.className += 'invisible', 0) 
// }

// function dragEnd(){
//     console.log('end')
//     this.className = 'fill'
// }

// function dragOver (e) {
//   e.preventDefault();
// }
// function dragEnter (e) {
//     e.preventDefault()
    
// }
// function dragLeave () {
// this.className = 'empty'
// }
// function dragDrop () {
// this.className='empty';
// this.append(attractions)




// }


const list_items = document.querySelectorAll('.items');
const days = document.querySelectorAll('.days')

for(let i = 0; i < list_items.length; i++){
    const item = list_items[i];

    item.addEventListener('dragstart', function() {
     
        draggedItem = this;
        setTimeout(() => {
            this.style.display = "none"

        }, 0);
    })

    item.addEventListener('dragend', function(){
    
        setTimeout(() => {
            draggedItem.style.display='block'
            draggedItem=null
        }, 0);
    })

    for (let j = 0; j < days.length; j++) {
        const day = days[j]
        day.addEventListener('dragover', function(e){
            e.preventDefault()
        })
        day.addEventListener('dragenter', function(e) {
            e.preventDefault()
            this.style.backgroundColor = 'rgba(0,0,0,0.2)'
        })
        day.addEventListener('dragleave', function(e){
            this.style.backgroundColor = 'rgba(0,0,0,0)'

        })
        day.addEventListener('drop', function(e){
            this.append(draggedItem)
            this.style.backgroundColor = 'rgba(0,0,0,0)'

        })
    }
}

let dayHolder = document.querySelector('.days-holder')

let submit = document.getElementById('submit_btn')

submit.addEventListener('click', () => {
//    let data = []


// for(let i = 1; i <days[0].childNodes.length; i++) {
//     console.log(days[0].childNodes[i].innerText)
// }
//   days.forEach((x, i) => {
//     let day = x.childNodes[0].innerText;
//     let att = ""
//     for(let i = 1; i < x.childNodes.length; i++) {
//         att += x.childNodes[i].innerText + ", "
//     }
//     data.push({
//         day: day,
//         attraction: att
//     })

//   })
//   var request = new XMLHttpRequest();
//   request.addEventListener("load", function() {
//     console.log("DONE");
//     console.log(this.responseText);
//   });
  
//   console.log(data);
//   let url = "/summary";
//   request.open("POST", url);
//   request.setRequestHeader(
//     "Content-Type",
//     "application/json;charset=UTF-8"
//   );
//   request.send(JSON.stringify(data));
// console.log(dayHolder.childNodes[0].childNodes[0])
// let arr = dayHolder.childNodes[0].childNodes;
// for( let i = 0; i < dayHolder.childNodes[0].childNodes.length; i ++) {
//     console.log(dayHolder.childNodes[0].childNodes[i])

//     for(let j = 1; j <dayHolder.childNodes[0].childNodes[i].childNodes.length; j++) {
//         if(dayHolder.childNodes[0].childNodes[i].childNodes[j].childNodes[1] !== undefined) {
//             console.log(dayHolder.childNodes[1].childNodes[0].childNodes[0].innerText, dayHolder.childNodes[0].childNodes[i].childNodes[j].childNodes[1].innerText,  dayHolder.childNodes[0].childNodes[i].childNodes[j].childNodes[1].parentElement.id)

//         }
            
        
       
//     }
// }

// Loop through the days
let dayArr = dayHolder.childNodes
for(let i = 0; i < dayArr.length; i++) {
    // loop through the hours in the day 

}
let data = []
dayArr.forEach((x,i)=>{
    let day = x.childNodes[0].childNodes[0].innerText
   dayArr[i].childNodes[0].childNodes.forEach((y, j)=>{
       if(x.childNodes[0].childNodes[j].childNodes[1] !== undefined) {
           let time = x.childNodes[0].childNodes[j].childNodes[0].innerText
        let attraction = x.childNodes[0].childNodes[j].childNodes[1].innerText
        data.push({
            day: day,
            time: time,
            attraction: attraction
        })
       }
   })
})

  var request = new XMLHttpRequest();
  request.addEventListener("load", function() {
    console.log("DONE");
    console.log(this.responseText);
  });
  
  console.log(data);
  let url = "/summary";
  request.open("POST", url);
  request.setRequestHeader(
    "Content-Type",
    "application/json;charset=UTF-8"
  );
  request.send(JSON.stringify(data));
})