// requiring the connecetion.js file
var connection = require("./connection.js");

// defining the methods for ORM
var orm = {
    // method creation
    // displaying all the data from the table
    selectAll: function (tableInput, callback) {
        // sql commands
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (error, result) {
            if (error) {
                throw error;
            }
            callback(result);
        });
    },
    // inserting the burger into the table
    insertOne: function (table, column, value, callback) {
        var queryString = "INSERT INTO " + table + " (" + column + ", devoured, date) VALUES ( '" + value + "' , 0 , curdate() );";
        connection.query(queryString, value, function (error, result) {
            if (error) {
                throw error;
            }
            callback(result);
        });
    },
    // update the table when the user devours the burger
    updateOne: function (table, columnValue, condition, callback) {
        var queryString = "UPDATE  " + table + " SET devoured =  1 WHERE " + condition + ";";
        connection.query(queryString, function (error, result) {
            if (error) {
                throw error;
            }
            callback(result);
        });
    }
};

//exporting the orm
module.exports = orm;