'use strict'

const Schema = use('Schema')

class AddressSchema extends Schema {
  up () {
    this.create('addresses', (table) => {
      table.increments('id')
      table.string('address_no')
      table.string('address_village')
      table.string('address_city')
      table.string('address_province')
      table.string('address_postal_code')
      table.timestamps()
    })
  }

  down () {
    this.drop('addresses')
  }
}

module.exports = AddressSchema
