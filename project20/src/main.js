const express = require("express");

let app = express();

app.get("/", (req, res) => {

    let id = req.query.id;
    let username = req.query.username;




    const json = { name: "shubham", id: 121 };
    res.json(json);

});
app.listen(3000);