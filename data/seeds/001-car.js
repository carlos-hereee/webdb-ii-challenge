
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  //we want to remove all data before seeding
  //truncate will reset primary key each time
  return knex('car_dealer').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car_dealer').insert([
        {
          id: 1, 
          make: 'honda', 
          model: 'accord', 
          vin: 123, 
          mileage: 2006,
          transmission:' ',
          title: 'clean'
        },
        {id: 2, 
          make: 'toyota',
          model: 'civic',
          vin: 1,
          mileage: 6000,
          transmission:' ',
          title: 'salvage'
        },

      ]);
    });
};
