const mysql = require('mysql');
const mysqlconnection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'archerbank'
});
 
mysqlconnection.connect();
 
mysqlconnection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('the mysql connection is working');
});

exports.mysqlconnection = mysqlconnection;