import './style.css'
import 'leaflet/dist/leaflet.css'
import './mapData'
import Data from './data'

const button = document.querySelector('button')

const data = new Data()
window.addEventListener('DOMContentLoaded', data.getData)
button.addEventListener('click', data.getData)
