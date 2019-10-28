console.log("HELLO")

let editBtn = document.getElementById('edit_btn');

editBtn.addEventListener('click', ()=> {
    console.log('clicked')
    editBtn.style.backgroundColor="red"
    editBtn.innerText = "Save"
    
})