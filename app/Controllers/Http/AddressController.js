'use strict'

/**
 * Resourceful controller for interacting with addresses
 */
class AddressController {
  /**
   * Show a list of all addresses.
   * GET addresses
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new address.
   * GET addresses/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new address.
   * POST addresses
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single address.
   * GET addresses/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing address.
   * GET addresses/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update address details.
   * PUT or PATCH addresses/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a address with id.
   * DELETE addresses/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = AddressController
