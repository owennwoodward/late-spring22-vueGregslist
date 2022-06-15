import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"



class HousesService {
    async getHouses() {
        const res = await api.get('api/houses')
        logger.log('getting houses', res.data)
        AppState.houses = res.data
    }

    async createHouse(houseData) {
        logger.log('made it to service')
        const res = await api.post('api/houses', houseData)
        logger.log('creating house', res.data)
        AppState.houses.push(res.data)
    }
}


export const housesService = new HousesService