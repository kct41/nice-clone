const express = require('express');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : 'user1',
    port : 3306,
    database : 'nice_api'
});

//DB Connection TEST
connection.connect();
connection.query('SELECT * from board', function(err, rows, fields) {
    if (!err)
        console.log('The solution is: ', rows);
    else
        console.log('Error while performing Query.', err);
});

// configuration ===============================================================
const app = express();
app.set('port', process.env.PORT || 1337);
app.get('/', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.send('Hello World! Bro!');
});

// REST API (GET) ==============================================================
const courses = [
    { no: 1, title: "courses1" },
    { no: 2, title: "courses2" },
    { no: 3, title: "courses3" }
];
app.get("/api/courses", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(courses);
});

// REST API (GET, MYSQL Connection) ========================================================
app.get('/api/board', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    connection.query('SELECT * FROM board', function(err, rows) {
        if(err) throw err;

        console.log('The solution is: ', rows);
        res.send(rows);
    });
});

// REST API (POST) ==============================================================
app.get("/api/posts/:year/:month", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(req.params);
});

// SERVER PORT ================
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});