const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let DBD = require("./1.js");
reasusall = async () => {

    const Connection = mysql.createConnection(DBD.DBC);

    await Connection.connectAsync();
    console.log("connected");

    let sql = "select * from students WHERE  name=? AND adress=?;";
    let result = Connection.queryAsync(sql, ["shubh", "mumbai"]);

    await Connection.endAsync();

    console.log(result);


};


reasusall();