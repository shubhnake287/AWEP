let Click = function () {

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:5700/");
    xhr.onload = () => {
        const response = xhr.responseText;
        console.log(response);
        domop(response);
    };
    xhr.send();
};


let domop = function (response) {
    // console.log(response);
    const temp = response.temp;
    const city = response.city;

    let parent = document.querySelector("#id1");
    let cloneNode = parent.children[0].cloneNode(true);
    cloneNode.innerHTML = response;
    parent.insertBefore(cloneNode, parent.firstChild);


}