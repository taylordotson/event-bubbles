let header = document.getElementById("page-header");
let saywhat = document.getElementById("output");

console.log("header", header);

function handleHeaderMouseEvent(event) {
    // console.log("event", event);
    saywhat.innerHTML = "The force is strong with this one.";
}

function handleHeaderMouseOut(event) {
    saywhat.innerHTML = "Remember... the Force will be with you always.";
}

let listItems = document.getElementsByClassName("list-item");
// console.log("list-items", listItems);

for (let i = 0; i < listItems.length; i++){
    listItems.item(i).addEventListener("click", handleClick);
}

function handleClick(MouseEvent) {
    let elementText = MouseEvent.target.innerHTML;
    saywhat.innerHTML = "hummm, " + elementText + " clicked you have";
}

header.addEventListener("mouseover", handleHeaderMouseEvent);
header.addEventListener("mouseout", handleHeaderMouseOut);

var yodaImage = document.getElementById("theYoda");

document.getElementById("change-color").addEventListener("click", toggle);

function toggle(event) {
    yodaImage.classList.toggle("flashy");
}















