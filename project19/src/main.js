const Promise = require("bluebird");
const mysql = require("mysql");


Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DBC = require("./1.js");

let readall = async () => {
    try {
        const Connection = mysql.createConnection(DBC.DBC);

        await Connection.connectAsync();
        console.log("connected");

        let sql = " select * from employee WHERE  Employee_Firstname = 'nilesh'";
        let result = await Connection.queryAsync(sql);

        await Connection.endAsync();
        console.log(result);
    } catch (err) {
        console.log("exception handale");
    }

};

readall();
