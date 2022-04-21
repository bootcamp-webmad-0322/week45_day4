function calculateRoute() {

    const { DirectionsService } = google.maps

    const routeSpecs = {
        origin: 'Ironhack Madrid',
        destination: 'Fabrik Madrid',
        travelMode: 'DRIVING'
    }

    const service = new DirectionsService

    service.route(
        routeSpecs,
        (routeInfo, error) => {
            printRouteInfo(routeInfo)
            renderRoute(routeInfo)
        }
    )
}

function printRouteInfo({ routes }) {

    const { legs } = routes[0]
    const { distance, duration, steps } = legs[0]

    const details = document.querySelector('#routeDetails')
    details.innerHTML += `<h5>Ruta de ${duration.text} (${distance.text})</h5><hr>`
    steps.forEach(elm => details.innerHTML += `<p>${elm.instructions}</p>`)
}


function renderRoute(routeInfo) {

    const { Map, DirectionsRenderer } = google.maps

    const map = new Map(
        document.getElementById('map'),
        { zoom: 10, center: { lat: 41.3977381, lng: 2.190471916 }, styles: mapStyles.retro }
    )

    const renderer = new DirectionsRenderer()

    renderer.setDirections(routeInfo)
    renderer.setMap(map)
}