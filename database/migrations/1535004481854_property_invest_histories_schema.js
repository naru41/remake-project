'use strict'

const Schema = use('Schema')

class PropertyInvestHistoriesSchema extends Schema {
  up () {
    this.create('property_invest_histories', (table) => {
      table.increments('id')
      table.string('signing_date')
      table.string('invest_date')
      table.string('end_siging_date')
      table.timestamps()
    })
  }

  down () {
    this.drop('property_invest_histories')
  }
}

module.exports = PropertyInvestHistoriesSchema
