const directions = {
    ironhackBCN: {
        coords: { lat: 41.3977381, lng: 2.190471916 }, title: 'Campus BCN'
    }
}

let map


function printMap() {

    const { Map } = google.maps

    map = new Map(
        document.querySelector('#map'),
        { center: directions.ironhackBCN.coords, zoom: 18, styles: mapStyles.retro }
    )
}

function getPosition() {

    navigator.geolocation.getCurrentPosition(           // two arguments
        position => centerMap(position),              // success callback (with position param)
        error => console.log(error)                     // error callback (with error param)
    )
}


function centerMap({ coords }) {

    const { latitude: lat, longitude: lng } = coords

    map.setCenter({ lat, lng })
}


function initMap() {
    printMap()
    getPosition()
}