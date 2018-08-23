'use strict'

const Schema = use('Schema')

class PropotyBidingSchema extends Schema {
  up () {
    this.create('propoty_bidings', (table) => {
      table.increments('id')
      table.string('biding_start_time')
      table.string('biding_end_time')
      table.string('current_winner')
      table.timestamps()
    })
  }

  down () {
    this.drop('propoty_bidings')
  }
}

module.exports = PropotyBidingSchema
