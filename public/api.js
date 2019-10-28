console.log("HELLO")
let searchBar = document.getElementById('search_term')

function searchTerm() {

    var options = {
        types: ['(cities)'],
        
       };
    search = new google.maps.places.Autocomplete(searchBar, options)
   console.log(search)
}



