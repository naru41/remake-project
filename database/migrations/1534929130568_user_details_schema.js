'use strict'

const Schema = use('Schema')

class UserDetailsSchema extends Schema {
  up () {
    this.create('user_details', (table) => {

      table.increments('id')
      
      table.string('first_name')
      table.string('last_name')
      table.string('profession')
      table.string('profession_position')
      table.string('profession_years')
      table.string('organization')
      table.string('monthly_salary')

      //edit
      table.integer('address_id').null
      table.integer('address_id_contect').nullable()
      //done

      table.string('cell_phone_no')
      table.string('email')
      
      //edit
      table.integer('referrer_id').nullable()
      //done

      table.string('date_of_birth')
      table.string('maritial_status')
      table.string('number_of_children')

      //edit type
      table.text('objective')


      table.string('borrow_expected_income')
      table.string('invest_amount')

      //edit
      table.integer('promotion_id')
      
      table.timestamps()
    })
  }

  down () {
    this.drop('user_details')
  }
}

module.exports = UserDetailsSchema
