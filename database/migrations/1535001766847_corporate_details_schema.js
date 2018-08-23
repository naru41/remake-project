'use strict'

const Schema = use('Schema')

class CorporateDetailsSchema extends Schema {
  up () {
    this.create('corporate_details', (table) => {
      
      table.increments('id')

      table.string('registered_id')
      table.string('name')
      table.string('registered_date')
      table.string('number_of_committees')
      table.string('signing_conditions')
      table.string('business_duration')
      table.string('business_duration_unit')
      
      //edit
      table.integer('address_id_contect')
      //done

      table.string('objective')
      table.string('borrow_expected_income')
      table.string('invest_amount')

      //edit
      table.integer('promotion_id')


      table.timestamps()
    })
  }

  down () {
    this.drop('corporate_details')
  }
}

module.exports = CorporateDetailsSchema
