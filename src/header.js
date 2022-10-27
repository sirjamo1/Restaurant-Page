import changePage from "../src/index";

const header = () => {
    const header = document.createElement("header");
    header.classList.add("header");
    const iconContainer = document.createElement("div");
    iconContainer.classList.add("icon-container");
    header.appendChild(iconContainer);
    const steakImage = document.createElement("img");
    // steakImage.setAttribute("src", "/src/assets/images/steak-transparent.png");
    steakImage.setAttribute("src", "./assets/images/steak-transparent.png");
    steakImage.setAttribute("alt", "steak");
    iconContainer.appendChild(steakImage);
    const marbleSteakhouse = document.createElement("div");
    marbleSteakhouse.classList.add("marble-steakhouse-text-container");
    const marbleTextDiv = document.createElement("div");
    marbleTextDiv.classList.add("marble-text-div")
    const marbleSteakhouseText = ["Marble", "Steakhouse"];
    for (let i = 0; i < marbleSteakhouseText[0].length; i++) {
        let letter = document.createElement("h1");
        letter.classList.add("marble-steakhouse-text");
        letter.innerHTML = marbleSteakhouseText[0][i];
        marbleTextDiv.appendChild(letter);
        marbleSteakhouse.appendChild(marbleTextDiv);
    }
    const steakhouseTextDiv = document.createElement("div");
    steakhouseTextDiv.classList.add("steak-house-text-div");
    for (let i = 0; i < marbleSteakhouseText[1].length; i++) {
        let letter = document.createElement("h1");
        letter.classList.add("marble-steakhouse-text");
        letter.innerHTML = marbleSteakhouseText[1][i];
        steakhouseTextDiv.appendChild(letter);
        marbleSteakhouse.appendChild(steakhouseTextDiv);
    }
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
    return header;
};
export default header;
