import BaseController from "../utils/BaseController.js";

export class CarsController extends BaseController {
  constructor() {
    super('api/cars')
    this.router
      .get('', this.getCars)
  }

  getCars(request, response, next) {
    try {
      response.send('Cars Controller works!')
    } catch (error) {
      next(error)
    }
  }
}
