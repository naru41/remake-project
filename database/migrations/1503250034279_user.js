'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {

      table.increments('id')      
      
      table.string('email', 254).notNullable().unique()
      table.string('username', 80).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('user_salt')
      table.integer('user_detail_id')
      table.integer('corporate_detail_id')
      table.timestamps('user_register_date')
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
