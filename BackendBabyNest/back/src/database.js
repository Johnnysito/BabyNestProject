const mysql = require("promise-mysql");

const connection = mysql.createConnection({
    host: 'localhost' ,
    database: 'babynest' ,
    user: 'root' ,
    password: 'tu_contraseña'
});

const getConnection = async ()=> await connection;

module.exports = {
    getConnection
}