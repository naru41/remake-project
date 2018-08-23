'use strict'

const Schema = use('Schema')

class PromotionSchema extends Schema {
  up () {
    this.create('promotions', (table) => {
      table.increments('id')
      table.string('promotion_name')
      table.text('details')
      table.timestamps()
    })
  }

  down () {
    this.drop('promotions')
  }
}

module.exports = PromotionSchema
