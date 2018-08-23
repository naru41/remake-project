'use strict'

const Schema = use('Schema')

class ReferrerSchema extends Schema {
  up () {
    this.create('referrers', (table) => {
      table.increments('id')
      table.string('first_name')
      table.string('last_name')
      table.text('referrer_details')
      table.timestamps()
    })
  }

  down () {
    this.drop('referrers')
  }
}

module.exports = ReferrerSchema
