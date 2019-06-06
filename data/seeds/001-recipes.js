
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'Papa Luis Famous Taco', instructions: 'make the tacos and then eat the tacos', dish_id: 1 },
        { name: 'Mediterranean Pizza', instructions: 'put the olives on-a the pizza!', dish_id: 2 },
        { name: 'Amandas Famous Tiramiss-you', instructions: 'Layer the lady fingers with coffee and liquor yum!', dish_id: 3 }
      ]);
    });
};
