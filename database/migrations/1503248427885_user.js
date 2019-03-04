const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments();
      table.string('name', 80).notNullable();
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
