import github from './assets/icons/github.svg'
const footer = () => {
    const footerContainer = document.createElement("footer");
    const footerText = document.createElement("h4");
    footerText.innerHTML = "Built by James Howells";

    footerContainer.appendChild(footerText);
    const linkToGithub = document.createElement("a");
    linkToGithub.setAttribute(
        "href",
        "https://github.com/sirjamo1/Restaurant-Page"
    );
    const githubIcon = document.createElement("img");
    githubIcon.setAttribute("src", github);
    githubIcon.setAttribute("alt", "github icon");
    linkToGithub.appendChild(githubIcon);
    footerText.appendChild(linkToGithub);
    return footerContainer;
};

export default footer;
