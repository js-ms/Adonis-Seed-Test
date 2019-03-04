/*
|--------------------------------------------------------------------------
| Database Seeder
|--------------------------------------------------------------------------
| Database Seeder can be used to seed dummy data to your application
| database. Here you can make use of Factories to create records.
|
| make use of Ace to generate a new seed
|   ./ace make:seed [name]
|
*/

const Factory = use('Factory');

class DatabaseSeeder {

  async run() {
    const user = await Factory
      .model('App/Models/User')
      .createMany(5)
  }

}

module.exports = DatabaseSeeder;
