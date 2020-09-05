const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let DBD = require("./1.js");


let reasusall = async () => {

    const Connection = mysql.createConnection(DBD.DBC);

    await Connection.connectAsync();
    console.log("connected");

    let sql = "INSERT INTO students ( name,salary,adress,num) VALUES (?,?,?,?)";
    let result = Connection.queryAsync(sql, ['shubha', 10, 'mumbaiee', 987651]);

    await Connection.endAsync();

    console.log(result);


};


reasusall();