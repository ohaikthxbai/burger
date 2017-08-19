// requiring the mysql package
var mysql = require("mysql");

// defining the connection variable to connect to the db
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burger_db"
});

// connecting...
connection.connect(function (error) {
    if (error) {
        console.log("ERROR, PLEASE FIX: " + error);
        return;
    }
    console.log("Connected as ID: " + connection.threadId);
});

// exporting the connection
module.exports = connection;