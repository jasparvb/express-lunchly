/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("postgresql://postgres:41361@localhost/lunchly");

db.connect();

module.exports = db;
