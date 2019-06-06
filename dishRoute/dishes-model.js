const knex = require('knex');

const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

module.exports = {
    find, 
    insert,
    findById,
    update,
    remove
};

function find() {
    return db('dishes');
};

function findById(id){
    return db('dishes')
    .where({ id })
    .first();
};

function insert(dish) {
    return db('dishes')
    .insert(dish);
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