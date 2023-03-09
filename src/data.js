import changeView from "./mapData"

export default class Data {
    constructor () {
        this.ipAddress = document.querySelector('#ip-address')
        this.country = document.querySelector('#country')
        this.timezone = document.querySelector('#timezone')
        this.geonameId = document.querySelector('#geonameid')
        this.isp = document.querySelector('#isp') 
        this.input = document.querySelector('input')
    }
    
    getData = async() => {
        fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_zInYozPmI3GhSyrrEpCGi32ecbICm&ipAddress=${this.input.value}`)
            .then((response) => {
               return response.json()
            })
            .then(response =>  {
                this.ipAddress.textContent = response.ip
                this.country.textContent = `${response.location.country}, `
                this.geonameId.textContent = response.location.geonameId
                this.timezone.textContent = response.location.timezone
                this.isp.textContent = response.isp
                
                changeView(response.location.lat, response.location.lng)
            })
    }
}