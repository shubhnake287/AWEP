console.log("working....");
const js = require("js");

let readfun = () => {

    let fullpath = "C:/Users/shubh/Desktop/temp.txt";
    let filedata = fs.readFileSync(fullpath, { encoding: "utf-8" });
    console.log(filedata);
}