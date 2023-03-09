import L from 'leaflet'
import markerIcon from 'leaflet/dist/images/marker-icon.png'


const map = L.map('map').setView([-13.312656, 25.237033], 3.5);
const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

const Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});

const OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

const Thunderforest_SpinalMap = L.tileLayer('https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey={apikey}', {
    attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    apikey: '47e49132bba5402698bd35dada52bb5b',
    maxZoom: 22
});
osm.addTo(map);

const myIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [20, 30],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});
L.marker([-13.312656, 25.237033], {
    icon: myIcon,
    draggable: true
}).addTo(map).bindPopup('A pretty CSS3 popup.<br> Easily customizable.');

const baseLayers  = {
    "osm": osm,
    "stadia": Stadia_AlidadeSmoothDark,
    "otm": OpenTopoMap,
    "thunderForest": Thunderforest_SpinalMap
}
L.control.layers(baseLayers).addTo(map)

export default function changeView(lat, lng) {
    map.flyTo([lat, lng], 3.5)

}