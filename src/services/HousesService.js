import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class HousesService {

  async getHouseById(houseId) {
    const house = await dbContext.Houses.findById(houseId)
    if (house == null) {
      throw new BadRequest(`No house found with the id of ${houseId}`)
    }

    return house
  }

  async getHouses(query) {
    const sortBy = query.sort
    delete query.sort
    const houses = await dbContext.Houses.find(query).sort('year')
    return houses
  }

}

export const housesService = new HousesService