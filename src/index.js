import pageLoad from "./page-load"



const mainContainer = document.getElementById("content")
function appendDiv() {
 let redDiv = document.createElement("div");
 redDiv.classList.add("redDiv")
 mainContainer.appendChild(redDiv)
 redDiv.innerHTML = "Hello i'm redDiv"
}
appendDiv()