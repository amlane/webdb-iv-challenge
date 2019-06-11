
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(t){
        t.increments();
  
        t.string('name', 255)
        .notNullable();

        t.string('instructions', 4000)
        .notNullable();

        t.integer('dish_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};
