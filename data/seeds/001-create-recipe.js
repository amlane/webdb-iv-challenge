
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('create_recipe').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('create_recipe').insert([
        { recipe_id: 1, ingredient_id: 1, ingredientQuantity: 1.0, ingredientUnit: 'lb'  },
        { recipe_id: 1, ingredient_id: 2, ingredientQuantity: 1.0, ingredientUnit: 'cup'  },
        { recipe_id: 1, ingredient_id: 3, ingredientQuantity: 6.0, ingredientUnit: 'shells'  }
      ]);
    });
};
