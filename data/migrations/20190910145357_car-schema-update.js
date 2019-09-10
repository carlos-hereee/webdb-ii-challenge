
exports.up = function(knex, Promise) {
    // don't forget the return statement
    return knex.schema.createTable('car_dealer', tbl => {
      // creates a primary key called id
      tbl.increments();
      // creates a text field called name which is both required and unique
      tbl.text('carType').notNullable();
      // creates a numeric field called budget which is required
      tbl.decimal('year').notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    // drops the entire table
    return knex.schema.dropTableIfExists('car_dealer');
  };