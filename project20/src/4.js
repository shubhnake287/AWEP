//data pass through server with using get dunction

const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const express = require("express");
let app = express();

app.get("/", async (req, res) => {

    let name = req.query.name;
    let salary = req.query.salary;
    let adress = req.query.adress;
    let num = req.query.num;



    const Connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'sharingan@111',
        database: 'practice'
    })/////////connection

    await Connection.connectAsync();////conected
    //console.log("connected....");

    let sql = "insert into students (name,salary,adress,num) values(?,?,?,?)";
    let result = Connection.queryAsync(sql, [name, salary, adress, num]);


    const json = { name: "alllokok" };
    res.json(json);
    await Connection.endAsync();///end
    //console.log(result);
    //return result;

});
app.listen(3200);
