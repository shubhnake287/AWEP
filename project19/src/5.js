const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let DBD = require("./1.js");


let reasusallll = async (user) => {

    const Connection = mysql.createConnection(DBD.DBC);

    await Connection.connectAsync();
    console.log("connected");

    let sql = "INSERT INTO students ( name,salary,adress,num) VALUES (?,?,?,?)";
    let result = Connection.queryAsync(sql, [
        user.name,
        user.salary,
        user.adress,
        user.num
    ]);

    await Connection.endAsync();

    console.log(result);


};


module.exports = { reasusallll };