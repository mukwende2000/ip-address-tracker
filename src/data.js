import changeView from "./mapData"

export default class Data {
    constructor () {
        this.ipAddress = document.querySelector('#ip-address')
        this.country = document.querySelector('#country')
        this.timezone = document.querySelector('#timezone')
        this.geonameId = document.querySelector('#geonameid')
        this.isp = document.querySelector('#isp') 
    }
    
    getData = async () => {
        const input = document.querySelector('input')
        fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_zInYozPmI3GhSyrrEpCGi32ecbICm&ipAddress=${input.value}`)
            .then((res) => {
               return res.json()
            })
            .then(res =>  {
                this.ipAddress.textContent = res.ip
                this.country.textContent = `${res.location.country}, `
                this.geonameId.textContent = res.location.geonameId
                this.timezone.textContent = res.location.timezone
                this.isp.textContent = res.isp
                
                changeView(res.location.lat, res.location.lng)
            })
    }
}