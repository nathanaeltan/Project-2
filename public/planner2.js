const empties = document.querySelectorAll('.empty');
const attractions = document.querySelectorAll('.fill')


attractions.forEach(item => { item.addEventListener('dragstart', dragStart)});
attractions.forEach(item => { item.addEventListener('dragend', dragEnd)});
// attractions.addEventListener('dragend', dragEnd);

function dragStart(){
    console.log('start')
}

function dragEnd(){
    console.log('end')
}