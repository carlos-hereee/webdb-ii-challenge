
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  //we want to remove all data before seeding
  //truncate will reset primary key each time
  return knex('car_dealer').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car_dealer').insert([
        {id: 1, carType: 'honda', year: 2006},
        {id: 2, carType: 'toyota', year: 2013},
      ]);
    });
};
