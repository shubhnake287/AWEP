const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);


const readfile = async () => {

    let Connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'sharingan@111',
        database: 'practice'
    });

    await Connection.connectAsync();
    let sql = "select * from employee";
    let result = Connection.queryAsync(sql);
    await connect.endAsync();

    console.log(result);
    return (result);
};

readfile();