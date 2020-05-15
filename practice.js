console.log("the page title: ", document.title);
console.log("the protocol: ", window.location.protocol);
let change = document.getElementById("umm").innerHTML;
let element = document.getElementById("demo-text");
console.log(element);
console.log("Original H1 said:", change);
document.getElementById("umm").innerHTML = 'Hello There!';
//let question = window.confirm("Want me to tell you something cool?");
//if (question) {
//    window.alert("I changed the text on this page. View source to see what it really says");
//} else {
//    window.alert("How boring. You don't want to know. :(");
//}

console.log(window.location, "is what is printed by window.location");
window.console.log("how does this work");
let colorful = document.querySelector(".purple");
console.log(colorful.getAttribute("class"));
colorful.setAttribute("style", "background-color: skyblue;");
colorful.style.padding = '25px';
