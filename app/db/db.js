const Pool = require("pg").Pool;
const pool = new Pool ({
    user: "ciokqzqkocpjwl",
    password: "c3bf486d8b485258c56dee26367130f10b7f9aee74911ef90d546418c1481053",
    host: "ec2-107-22-83-3.compute-1.amazonaws.com",
    database: "d20vgophf83cu7",
    port: "5432"
});
console.log(pool.query('select*from person;'));
module.exports = pool;