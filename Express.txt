let Promise = require("bluebird");
let mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);



const expresss = require("express");
const app = expresss();

app.get("/", async (req, res) => {
    const name = req.query.name;
    const salary = req.query.salary;
    const adress = req.query.adress;
    const num = req.query.num;





    const Connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'sharingan@111',
        database: 'practice'

    });
    await Connection.connectAsync();


    let sql =
        "INSERT INTO   students ( name,salary,adress,num) VALUES (?, ?, ?, ?)";
    const result = await Connection.queryAsync(sql, [name, salary, adress, num]);

    const json = { name: "alllokok" };
    res.json(json);
    Connection.end();
});

app.listen(3000);

