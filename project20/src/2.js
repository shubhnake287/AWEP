let Promise = require("bluebird");
let mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let database = require("./3.js");


let readall = async () => {
    const Connection = mysql.createConnection(database.database)/////////connection

    await Connection.connectAsync();////conected
    console.log("connected....");

    let sql = "insert into students (name,salary,adress,num) values(?,?,?,?)";
    let result = Connection.queryAsync(sql, ["akshita", 12, "jamshepur", 345]);

    await Connection.endAsync();///end
    console.log(result);
    return result;

};


readall();