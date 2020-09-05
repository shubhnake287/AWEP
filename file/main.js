console.log("Entry point");//entry point

const mod3 = require("./4.js");
const sss = mod3.sum(1, 3);
console.log(sss);

const aa = mod3.diff(1, 3);
console.log("Diff:", aa);




const mod2 = require("./3.js")// mod2;
console.log(mod2);


const mod1 = require("./2.js");//mod 1
console.log(mod1);
const total = mod1.sum(30, 20);
console.log(total);

