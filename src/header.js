import changePage from "../src/index"



const header = () => {
    //const mainContainer = document.getElementById("content");
    const header = document.createElement("header");
    header.classList.add("header");
    const iconContainer = document.createElement("div");
    iconContainer.classList.add("icon-container");
    header.appendChild(iconContainer);
    const steakImage = document.createElement("img");
    steakImage.setAttribute("src", "/src/images/steak-transparent.png");
    steakImage.setAttribute("alt", "steak");
    iconContainer.appendChild(steakImage);
    const marbleSteakhouse = document.createElement("h1");
    marbleSteakhouse.innerHTML = "Marble Steakhouse";
    iconContainer.appendChild(marbleSteakhouse);
    const navbar = document.createElement("nav");
    navbar.classList.add("navbar");
    header.appendChild(navbar);
    const homeLink = document.createElement("h4");
    homeLink.classList.add("home-link");
    homeLink.addEventListener("click", (e) => {
        changePage(e.target.innerHTML.toLowerCase());
        
    });
    homeLink.innerHTML = "Home";
    const menuLink = document.createElement("h4");
    menuLink.classList.add("menu-link");
    menuLink.addEventListener("click", (e) => {
        changePage(e.target.innerHTML.toLowerCase());
    });
    menuLink.innerHTML = "Menu";
    const contactLink = document.createElement("h4");
    contactLink.classList.add("contact-link");
    contactLink.addEventListener("click", (e) => {
        changePage(e.target.innerHTML.toLowerCase());
    });
    contactLink.innerHTML = "Contact";
    navbar.appendChild(homeLink);
    navbar.appendChild(menuLink);
    navbar.appendChild(contactLink);
    //mainContainer.appendChild(header);
    return header
};
export default header;
