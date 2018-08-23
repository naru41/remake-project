'use strict'

/**
 * Resourceful controller for interacting with deeds
 */
class DeedController {
  /**
   * Show a list of all deeds.
   * GET deeds
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new deed.
   * GET deeds/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new deed.
   * POST deeds
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single deed.
   * GET deeds/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing deed.
   * GET deeds/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update deed details.
   * PUT or PATCH deeds/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a deed with id.
   * DELETE deeds/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = DeedController
