const Pool = require('pg').Pool;



const pool = new Pool({

    user: "postgres",

    password: "Anoohhya@23",

    database: "testdb",

    host: "10.192.100.128",

    port:5432

});



module.exports  = pool;