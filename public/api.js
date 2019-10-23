console.log("HELLO")
let searchBar = document.getElementById('search_term')

function searchTerm() {
    search = new google.maps.places.Autocomplete(searchBar)
   console.log(search)
}



