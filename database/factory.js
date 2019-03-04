const Factory = use('Factory')

Factory.blueprint('App/Models/User', (faker) => {
   return {
     name: faker.username()
   }
});
