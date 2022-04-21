const directions = {
    ironhackBCN: {
        coords: { lat: 41.3977381, lng: 2.190471916 }, title: 'Campus BCN'
    },
    ironhackMAD: {
        coords: { lat: 40.392499, lng: -3.698214 }, title: 'Campus MAD (the best)'
    }
}


function initMap() {

    const { Map, Marker } = google.maps

    const map = new Map(
        document.querySelector('#map'),
        {
            center: directions.ironhackBCN.coords,
            zoom: 10,
            styles: mapStyles.retro
        }
    )

    new Marker({
        position: directions.ironhackBCN.coords,
        title: directions.ironhackBCN.title,
        map
    })
}