
var orm = require("../config/orm.js");

var burger = {
    // selects all the burgers fro the database
    selectAll: function (callback) {
        orm.selectAll("burgers", function (results) {
            callback(results);
        });
    },
    // inserting the burger into the database
    insertOne: function (column, value, callback) {
        orm.insertOne("burgers", column, value, function (results) {
            callback(results);
        });
    },
    // update the database after being eaten
    burgerEaten: function (columnValue, condition, callback) {
        orm.burgerEaten("burgers", columnValue, condition, function (results) {
            callback(results);
        });
    }
};

module.exports = burger;