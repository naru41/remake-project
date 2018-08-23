'use strict'

const Schema = use('Schema')

class PropertiesSchema extends Schema {
  up () {
    this.create('properties', (table) => {
      table.increments()
      
      table.string('expected_interest')
      table.string('expected_borrow_time')

      //edit
      table.string('deed_id')


      table.string('size')
      table.string('size_unit')
      table.string('latitude')
      table.string('longitude')
      table.string('business_status')
      table.string('enable_rent')
      table.string('reporter_type')
      table.string('approval_status')

      //add
      table.integer('image_id')

      table.timestamps()
    })
  }

  down () {
    this.drop('properties')
  }
}

module.exports = PropertiesSchema
