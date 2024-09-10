import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class CarsService {
  async getCarById(carId) {
    // NOTE findById will find a single document by its _id property
    const car = await dbContext.Cars.findById(carId)

    if (car == null) {
      throw new BadRequest(`No car found with the id of ${carId}`)
    }

    return car
  }

  async getCars(query) {
    const sortBy = query.sort
    delete query.sort

    const pageNumber = parseInt(query.page) || 1
    const limitAmount = 10
    const skipAmount = (pageNumber - 1) * limitAmount
    delete query.page

    const cars = await dbContext.Cars.find(query)
      .sort(sortBy + ' createdAt')
      .skip(skipAmount)
      .limit(limitAmount)

    const carCount = await dbContext.Cars.countDocuments()

    return {
      results: cars,
      count: carCount,
      currentPage: pageNumber,
      totalPages: Math.ceil(carCount / limitAmount)
    }
  }
}

export const carsService = new CarsService()