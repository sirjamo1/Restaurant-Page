const home = () => {
const homeContainer = document.createElement("div");
homeContainer.classList.add("home-container");
const homeText = document.createElement("h1");
homeText.innerHTML = "HOME"
homeContainer.appendChild(homeText)
return homeContainer
}

export default home