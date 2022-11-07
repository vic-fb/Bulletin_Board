require('dotenv').config();
const mysql = require('mysql');
const fs = require('fs');

const { DB_HOST } = process.env;
const { DB_USER } = process.env;

const { DB_PASS } = process.env;
const { DB_NAME } = process.env;

const con = mysql.createConnection({
  host: DB_HOST || '127.0.0.1',
  user: DB_USER || 'root',
  password: DB_PASS,
  database: DB_NAME || 'bulletin_board',
  multipleStatements: true,
});

con.connect((err) => {
  if (err) throw err;
  console.log('Connected!');

  const sql = fs.readFileSync(`${__dirname}/init_db.sql`).toString();
  console.log(sql);
  con.query(sql, (error) => {
    if (error) throw error;
    console.log('Table creation `items` was successful!');

    console.log('Closing...');
  });

  con.end();
});
