'use strict'

/**
 * Resourceful controller for interacting with promotions
 */
class PromotionController {
  /**
   * Show a list of all promotions.
   * GET promotions
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new promotion.
   * GET promotions/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new promotion.
   * POST promotions
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single promotion.
   * GET promotions/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing promotion.
   * GET promotions/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update promotion details.
   * PUT or PATCH promotions/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a promotion with id.
   * DELETE promotions/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PromotionController
