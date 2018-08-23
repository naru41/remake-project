'use strict'

/**
 * Resourceful controller for interacting with images
 */
class ImageController {
  /**
   * Show a list of all images.
   * GET images
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new image.
   * GET images/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new image.
   * POST images
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single image.
   * GET images/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing image.
   * GET images/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update image details.
   * PUT or PATCH images/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a image with id.
   * DELETE images/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ImageController
