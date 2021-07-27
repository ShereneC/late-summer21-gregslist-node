import { ProxyState } from "../AppState.js"

import { homesService } from "../Services/HomesService.js"

function _draw() {
  let template = ''
  ProxyState.homes.forEach(home => {
    template += home.Template
  })
  document.getElementById('homes').innerHTML = template
}


export default class HomesController {
  constructor() {
    ProxyState.on('homes', _draw)
    ProxyState.on('homes', () => { console.log('new Home') })
    _draw()
  }

  async createHome(e) {
    try {
      e.preventDefault()
      console.log('creating home step 1')
      let form = e.target
      let rawHome = {
        // id: Generateid(),
        imgUrl: form.imgUrl.value,
        bedrooms: form.bedrooms.value,
        bathrooms: form.bathrooms.value,
        price: form.price.value,
        year: form.year.value,
        levels: form.levels.value
      }
      console.log(rawHome)
      await homesService.createHome(rawHome)
      console.log('your new home sir', res.data)
    }
    catch (error) {
      console.error(error.message)
    }
  }

  deleteHome(homeId) {
    console.log('you are trying to delete a home by the id of', homeId)
    homesService.deleteHome(homeId)
  }

  bidHome(homeId) {
    console.log('you are bidding on a home with the home id of', homeId)
    homesService.bidHome(homeId)
  }
}