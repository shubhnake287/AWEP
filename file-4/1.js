console.log("check...........");
const js = require("js");


let reda = () => {
    try {
        let filepath = "C:/Users/shubh/Desktop/temp.txt";
        let filecontant = fs.readfilesync(filepath, { encosing: "utf-8" });
        console.log(filecontant);

    } catch (err) {
        console.log("exception handalee");
    }


};


