'use strict'

/**
 * Resourceful controller for interacting with userdetails
 */
class UserDetailController {
  /**
   * Show a list of all userdetails.
   * GET userdetails
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new userdetail.
   * GET userdetails/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new userdetail.
   * POST userdetails
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single userdetail.
   * GET userdetails/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing userdetail.
   * GET userdetails/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update userdetail details.
   * PUT or PATCH userdetails/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a userdetail with id.
   * DELETE userdetails/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = UserDetailController
