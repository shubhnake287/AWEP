const express = require("express");
const { json } = require("express");
const app = express();


app.get("/", (req, res) => {
    const json = { name: "shubham naik", id: 12345 };
    res.json(json);

})
app.listen(4000);