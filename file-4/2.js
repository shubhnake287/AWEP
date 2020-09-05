console.log("check...........");
const js = require("js");


let reda = () => {
    try {
        let filepath = "C:/Users/shubh/Desktop/temp.txt";
        fs.readfile(filepath, { encosing: "utf-8" }, (err, data) => {
        });


    } catch (err) {
        console.log(err);
        console.log(data);
    }


};

