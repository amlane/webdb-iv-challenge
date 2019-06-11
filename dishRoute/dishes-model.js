const knex = require('knex');

const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

module.exports = {
    getDishes, 
    addDish,
    getDish,
    update,
    remove,
    getRecipes,
    addRecipe
};

function getDishes() {
    return db('dishes');
};

function getDish(id){
    return db('recipes')
    .join('dishes', 'dishes.id', 'recipes.dish_id')
    .select('recipes.id', 'recipes.name as Recipe Names', 'dishes.name as Dish Name')
    .where('recipes.dish_id', id)
};

function addDish(dish) {
    return db('dishes')
    .insert(dish);
};

function getRecipes() {
    return db('recipes');
};

function addRecipe(recipe) {
    return db('recipes')
    .insert(recipe);
};

function update(id, changes) {
    return db('dishes')
    .where({ id })
    .update(changes)
};

function remove(id) {
    return db('dishes')
    .where({ id })
    .delete();
};