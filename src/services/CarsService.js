import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"



class CarsService{
  async getAll(){
    const res = await api.get('api/cars')
    logger.log('-getCars-', res.data)
    AppState.cars = res.data
  }

  async createCar(carData){
    const res = await api.post('api/cars', carData)
    logger.log('-createCar-', res.data)
    AppState.cars.push(res.data)
  }

  async editCar(carData){
    const res = await api.put('api/cars/'+carData.id, carData)
    logger.log('-editedCar-', res.data)
  }

  async deleteCar(id){
    const res = await api.delete('api/cars/'+id)
    logger.log('-deleteCar-', res.data)
    AppState.cars = AppState.cars.filter(c => c.id != id)
  }


}

export const carsService = new CarsService()
