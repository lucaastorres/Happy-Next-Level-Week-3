const map = L.map('mapid').setView([-27.2216835,-49.649508], 16)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker

map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng
    document.querySelector('[name="lat"')

    marker && map.removeLayer(marker)

    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})