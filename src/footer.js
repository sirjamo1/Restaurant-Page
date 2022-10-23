const footer = () => {
const footerContainer = document.createElement("footer");
const footerText = document.createElement("h4")
footerText.innerHTML = "Built by James Howells"
footerContainer.appendChild(footerText)
return footerContainer
}


export default footer