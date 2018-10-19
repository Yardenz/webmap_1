'use strict' 
console.log('Loaded map.js') 
mapboxgl.accessToken = 'pk.eyJ1IjoieWFyZGVueiIsImEiOiJjam5hejlmMGkwMWV6M3BsOWJxcHNhZDJpIn0.yUUMMk4ixslNceyxLrAwzg'
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [-111.7491139,40.74704140],
    zoom: 11
})
let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})
map.addControl(navigation, 'top-left')
let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})
map.addControl(scale, 'bottom-right')
let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})

map.addControl(geolocate, 'top-left')
geolocate.on('geolocate', function(event) {
	let lng = event.coords.longitude
    let lat = event.coords.latitude
console.log('geolocated:', lng, lat)
document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)

})
map.on('click', function(event) {

    let lng = event.lngLat.lng
    let lat = event.lngLat.lat

    console.log("clicked:", lng, lat)

    document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)

})
let data = [
    {
        location: [-111.89914,40.768379],
        content: 'SLC 2002 Winter Olympics: Olympics Medals Plaza'
    },
    {
        location: [-111.8305576,40.766533],
        content: 'SLC 2002 Winter Olympics: Olympic Village'
    },
    {
        location: [-111.895377,40.7669143371],
        content: 'SLC 2002 Winter Olympics: Main Media Center'
    },
    {
        location: [-111.848920508,40.7600146417],
        content: 'SLC 2002 Winter Olympics: Rice Eccles Olympic Stadium'
    },
    {
        location: [-111.56178897,40.7120982755],
        content: 'SLC 2002 Winter Olympics: Olympic Park (Park City)'
    },
    ]
    data.forEach(function(d) {

    let marker = new mapboxgl.Marker()    
    marker.setLngLat(d.location)
    marker.addTo(map)  

    let popup = new mapboxgl.Popup()
    popup.setHTML(d.content)
    marker.setPopup(popup)

})

