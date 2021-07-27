import { ProxyState } from '../AppState.js'
import { api } from './AxiosService.js'
import Home from '../Models/home.js'

class HomesService {
  constructor() {
    this.getAllHomes()
  }

  async createHome(rawHome) {
    // in my notes the following was written in the controller, but I think this is what Mark told mick to put in the service
    console.log('creating car step 2')
    const res = await api.post('homes', rawHome)
    console.log('creating car step 3')
    ProxyState.homes = [...ProxyState.homes, new Home(res.data)]
    form.reset()
  }

  async getAllHomes() {
    try {
      const res = await api.get('homes')
      console.log(res.data)
      ProxyState.homes = res.data.map(h => new Home(h))
      console.log('hello from get all homes', res.data)
    } catch (error) {
      console.error(error)
    }
  }

  async deleteHome(homeId) {
    try {
      const res = await api.delete('homes/' + homeId)
      console.log(res.data)
      ProxyState.homes = ProxyState.homes.filter(h => h.id != homeId)
    } catch (error) {
      console.error(error)
    }
  }

  async bidHome(homeId) {
    try {
      const foundHome = ProxyState.homes.find(h => h.id == homeId)
      foundHome.price += 100
      const res = await api.put('homes/' + homeId, foundHome)
      console.log('updated car', res.data)
      ProxyState.homes = ProxyState.homes
    } catch (error) {
      console.error(error)
    }
  }
}

export const homesService = new HomesService()
