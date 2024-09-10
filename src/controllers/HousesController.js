import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";

export class HousesController extends BaseController {

  constructor() {
    super('api/houses')
    this.router.get('', this.getHouses)
      .get('/:houseId', this.getHouseById)
  }

  async getHouseById(request, response, next) {
    try {
      const houseId = request.params.houseId
      const house = await housesService.getHouseById(houseId)
    } catch (error) {
      next(error)
    }
  }

  async getHouses(request, response, next) {
    try {
      const query = request.query
      const houses = await housesService.getHouses(query)
      response.send(houses)
    } catch (error) {
      next(error)
    }
  }

}