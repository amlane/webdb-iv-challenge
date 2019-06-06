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
    return db('dishes')
    .where({ id })
    .first();
};

function addDish(dish) {
    return db('dishes')
    .insert(dish);
};

function getRecipes() {
    return db('recipes');
};

function addRecipe(recipe) {
    return db('recipe')
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