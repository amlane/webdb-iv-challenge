
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'ground beef' },
        { name: 'shredded cheese' },
        { name: 'taco shells' }
      ]);
    });
};
