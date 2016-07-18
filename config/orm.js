var connection = require('../config/connection.js');

// object relational mapper (ORM)

var orm = {
    selectOne: function(tableSelected, cb) {
        var queryString = 'SELECT * FROM ' + tableSelected + 'WHERE ownerID = ' + userID; 
        console.log('query selectAll: '+ queryString);
        connection.query(queryString, function(err, res) {
            cb(res);
        });
    },

    selectAll: function(tableSelected, cb) {
        var queryString = 'SELECT * FROM ' + tableSelected + 'WHERE ownerID = ' + userID; 
        console.log('query selectAll: '+ queryString);
        connection.query(queryString, function(err, res) {
            cb(res);
        });
    },
    insertOne: function(tableSelected, itemName, itemDesc, itemGroup, itemWholeSale, itemRetailPrice, itemInStock, itemMRP, cb) {
        var queryString = 'INSERT INTO ' + tableSelected + ' (invName, invDesc, invGroup, invWholeSale, invRetailPrice, invInStock, invMRP) VALUES (?,?,?,?,?,?,?)';
        console.log('query insert: '+ queryString);
        connection.query(queryString, [itemName, itemDesc, itemGroup, itemWholeSale, itemRetailPrice, itemInStock, itemMRP], function(err, res) { 
            cb(res);
        });
    },
    updateOne: function(tableSelected, itemName, idChosen, cb) {
        var queryString = 'UPDATE ' + tableSelected + ' SET ' + colChosen + ' = ' + true + ' WHERE invName = ' + itemName + ' AND ownerID = ' + userID;
        console.log('query update: '+ queryString);
        connection.query(queryString, function(err, res) {
            cb(res);      
        });
    },
    
};

module.exports = orm;