import { homesService } from '../services/HomesService'
import BaseController from '../utils/BaseController'

export class HomesController extends BaseController {
  constructor() {
    super('api/homes')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .put('/:id/bid', this.bid)
      .delete('/:id', this.destroy)
  }

  /**
   * Sends found values to a client by request
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */

  async getAll(req, res, next) {
    try {
      const homes = await homesService.getAll(req.query)
      res.send(homes)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Get car by id
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getById(req, res, next) {
    try {
      const home = await homesService.getById(req.params.id)
      res.send(home)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Create Car
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async create(req, res, next) {
    try {
      const home = await homesService.create(req.body)
      res.send(home)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      // remove the price from the edit
      // delete req.body.price
      const car = await homesService.edit(req.body)
      res.send(car)
    } catch (error) {
      next(error)
    }
  }

  // he put this in at the end when people were asking questions.
  async bid(req, res, next) {
    try {
      const bid = { price: req.body.price, id: req.params.id }
      const car = await homesService.bid(bid)
      res.send(car)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Delete Car
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async destroy(req, res, next) {
    try {
      await homesService.destroy(req.params.id)
      res.send({ message: 'Successfully Deleted Home' })
    } catch (error) {
      next(error)
    }
  }
}
