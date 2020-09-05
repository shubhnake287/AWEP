console.log("Entry point");
//const mod1 = require("./1.js");
//console.log(mod1);


const http = require("http");//by default 
const mod1 = require("./1.js");

http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const myrespo = JSON.stringify(mod1.list);
    res.end(myrespo);
})

    .listen(5700);