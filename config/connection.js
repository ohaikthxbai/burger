// requiring the mysql package
var mysql = require("mysql");

// defining the connection variable to connect to the db
var connection = mysql.createConnection({
    host: "us-cdbr-iron-east-05.cleardb.net",
    user: "bd6f144771f99c",
    password: "6d969f28",
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