let Promise = require("bluebird");
let mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);


let readfunction = async () => {
    const Connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'sharingan@111',
        database: 'practice'

    })

    await Connection.connectAsync();
    console.log("Connected");

    let sql = "select * from employee WHERE EmployeeID = 'E001' ";
    const result = await Connection.queryAsync(sql);

    Connection.end();
    console.log(result);
};

readfunction();
