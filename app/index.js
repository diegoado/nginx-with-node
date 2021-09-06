const express = require("express");
const app = express();
const mysql = require('mysql2');

const PORT = process.env.PORT || 8080;

const conf = {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}

const values = [
  ['Diego'],
  ['Wesley'],
  ['Maria'],
  ['Roberto'],
  ['Julia'],
  ['Karla']
];

const conn = mysql.createConnection(conf);

conn.query('INSERT INTO people (name) VALUES ?', [values], (err) => {
  if (err) throw err;
  conn.end();
});

app.get("/", (req, res) => {
    const conn = mysql.createConnection(conf);
    conn.query({ sql: 'SELECT name FROM people', rowsAsArray: true }, (err, results) => {
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

      conn.end();
    });
});
  
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});