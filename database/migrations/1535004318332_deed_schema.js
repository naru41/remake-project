'use strict'

const Schema = use('Schema')

class DeedSchema extends Schema {
  up () {
    this.create('deeds', (table) => {
      table.increments('id')
      table.string('deed_first_name')
      table.string('deed_last_name')
      table.integer('address_id_deed')
      table.timestamps()
    })
  }

  down () {
    this.drop('deeds')
  }
}

module.exports = DeedSchema
