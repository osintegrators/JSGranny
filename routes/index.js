/*
 * GET home page.
 */

var pg = require('pg');
var conString = "postgres://granny:granny@localhost:5432/granny"
// if you have connection issues.. setup trusted authentication for postgres for localhost and uncomment the line below.
// var conString = "tcp://postgres:5432@localhost/granny";

exports.index = function (req, res) {
    res.render('index');
};

exports.list = function (req, res) {
    console.log("Express server " + req.method + " REQUEST on url " + req.path);

    var client = new pg.Client(conString);
    client.connect(function (err) {
        var query = client.query("SELECT * FROM phonebook", function (err, result) {
            res.send(result);
        });

        query.on('row', function(row) {
            console.log(row);
        });

        //fired after last row is emitted
        query.on('end', function() {
            client.end();
        });
    });
};

exports.create = function (req, res) {
    console.log("Express server " + req.method + " REQUEST on url " + req.path);

    var client = new pg.Client(conString);
    client.connect(function (err) {

        var body = req.body;

        client.query("INSERT INTO phonebook(name, address, phone, email) values($1, $2, $3, $4)", [body.name, body.address, body.phone, body.email]);

        // Code to test connection
        /* client.query('SELECT NOW() AS "theTime"', function(err, result) {
         console.log("The time is : "  + result.rows[0].theTime);
         //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
         })*/
    });

    res.send(req.body);
};

exports.update = function (req, res) {
    console.log("Express server " + req.method + " REQUEST on url " + req.path);

    var client = new pg.Client(conString);
    client.connect(function (err) {

        var body = req.body;

        client.query("UPDATE phonebook SET name = $1, address = $2, phone = $3, email = $4 WHERE _id = $5", [body.name, body.address, body.phone, body.email, body._id]);

    });
    res.send(req.body);
};

exports.delete = function (req, res) {
    console.log("Express server " + req.method + " REQUEST on url " + req.path);

    var client = new pg.Client(conString);
    client.connect(function (err) {

        var body = req.body;

        client.query("DELETE FROM phonebook WHERE _id = $1", [body._id]);

        res.send(req.body);
    });
};

exports.get = function(req, res, id){
    console.log("Express server " + req.method + " REQUEST on url " + req.path + " id is :  " + id);

    var client = new pg.Client(conString);
    client.connect(function (err) {
        var query = client.query("SELECT * FROM phonebook WHERE _id = $1", [id] , function (err, result) {
        });

        query.on('row', function(row) {
            res.send(row);
            console.log(row);
        });

        //fired after last row is emitted
        query.on('end', function() {
            client.end();
        });
    });
}


