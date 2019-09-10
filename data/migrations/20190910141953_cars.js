
exports.up = function(knex, Promise) {
    // don't forget the return statement
    return knex.schema.createTable('car_dealer', tbl => {
      // creates a primary key called id
      tbl.increments();
      // creates a text field called name which is both required and unique
      tbl.text('make').notNullable();
      tbl.text('model').notNullable();
      tbl.text('transmission');
      // creates a numeric field called budget which is required
      tbl.decimal('vin').notNullable();
      tbl.decimal('mileage').notNullable();
      tbl.text('title');
      
    });
  };
  
  exports.down = function(knex, Promise) {
    // drops the entire table
    return knex.schema.dropTableIfExists('car_dealer');
  };