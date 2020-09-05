const js = require("js");
let promise = require("bluebird");
promise.promisifyAll(fs);//promisefilr


let readdemo = () => {

    let filepath = "C:/Users/shubh/Desktop/temp.txt";
    const mpromise = fs.readfileAsync(filepath, { encoding: "utf-8" });
    console.log(mpromise);

    promise.then((data) => {
        console.log(data);
    });
    promise.catch((err) => {
        console.log(err);
    });
};


module.exports = { readdemo };