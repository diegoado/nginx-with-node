const express = require("express");
const app = express();
const mysql = require('mysql2');

const PORT = process.env.PORT || 8080;

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

app.get("/", (req, res) => {
    connection.query({ sql: 'SELECT name FROM people', rowsAsArray: true }, function(err, results) {
      var names = []

      if (!err) {
        names = results.map(function(result) {
          return `<li>${result[0]}</li>`
        })
      }

      console.log(names)

      res.send(`
        <h1>Full Cycle Rocks!</h1>
        <ul>
          ${names.join('\n')}
        </ul>
      `);
    });
});
  
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});