
exports.up = function(knex, Promise) {
    return knex.schema.createTable('create_recipe', function(t){
        t.increments();

        t.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

        t.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

        t.float('ingredientQuantity')
        .notNullable()
        
        t.string('ingredientUnit', 128)
        .notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('create_recipe');
};
