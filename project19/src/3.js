const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let DBD = require("./1.js");
let reasusall = async () => {

    const Connection = mysql.createConnection(DBD.DBC);

    await Connection.connectAsync();
    console.log("connected");

    let sql = "INSERT INTO supplier (supplierID ,supplier_firstname,supplier_lastname,supplied_items,supplied_Quantity) VALUES (?,?,?,?,?)";
    let result = Connection.queryAsync(sql, ["S005", "RA", "G", "R", "10"]);

    await Connection.endAsync();

    console.log(result);


};


reasusall();