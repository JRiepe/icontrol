var connection = require('../config/connection.js');

// object relational mapper (ORM)

var orm = {
    selectAll: function(tableSelected, cb) {
        var queryString = 'SELECT * FROM ' + tableSelected; 
        console.log('query selectAll: '+ queryString);
        connection.query(queryString, function(err, res) {
            cb(res);
        });
    },
    insertOne: function(tableSelected, theName, cb) {
        var queryString = 'INSERT INTO ' + tableSelected + ' (burger_name, devoured) VALUES (?,?)';
        console.log('query insert: '+ queryString);
        connection.query(queryString, [theName, false], function(err, res) { 
            cb(res);
        });
    },
    updateOne: function(tableSelected, colChosen, idChosen, cb) {
        var queryString = 'UPDATE ' + tableSelected + ' SET ' + colChosen + ' = ' + true + ' WHERE id = ' + idChosen;
        console.log('query update: '+ queryString);
        connection.query(queryString, function(err, res) {
            cb(res);      
        });
    },
    
};

module.exports = orm;