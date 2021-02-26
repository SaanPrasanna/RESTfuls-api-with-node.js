const { createPool } = require("mysql");

const pool = createPool({
    port:3306,
    host:"fdb28.awardspace.net",
    user:"3548551_crud",
    password:"saanpmapa#1996",
    database:"3548551_crud",
    connectionLimit:10
});

module.exports = pool;
