const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.HOSTDB,
    user: process.env.USERDB,
    password: process.env.PASSDB,
    port: process.env.PORTDB,
    database: process.env.DBNAME
});

const connection  = mysql.createConnection({
    host: 'db4free.net',
    user: 'lidia888',
    password: 'dcec6ac3',
    port: 3306,
    database: 'dbdetimehub'
});

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to db4free:', err);
      return;
    }
    console.log('Connected to db4free database!');
  });



global.db = pool.promise();