'use strict'

const Schema = use('Schema')

class PropotyBidOffersSchema extends Schema {
  up () {
    this.create('propoty_bid_offers', (table) => {
      table.increments('id')
      table.string('bid_amount')
      table.string('invest_month')
      table.string('invest_interest')
      table.string('conditions')
      table.timestamps()
    })
  }

  down () {
    this.drop('propoty_bid_offers')
  }
}

module.exports = PropotyBidOffersSchema
