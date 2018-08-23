'use strict'

/**
 * Resourceful controller for interacting with referrers
 */
class ReferrerController {
  /**
   * Show a list of all referrers.
   * GET referrers
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new referrer.
   * GET referrers/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new referrer.
   * POST referrers
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single referrer.
   * GET referrers/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing referrer.
   * GET referrers/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update referrer details.
   * PUT or PATCH referrers/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a referrer with id.
   * DELETE referrers/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ReferrerController
