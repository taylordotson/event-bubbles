let header = document.getElementById("page-header");

console.log("header", header);

function handleHeaderMouseEvent(event) {
    console.log("event", event);
}

function handleHeaderMouseout(event) {

}

header.addEventListener("mouseover", handleHeaderMouseEvent);
header.addEventListener("mouseOut", handleHeaderMousOout);