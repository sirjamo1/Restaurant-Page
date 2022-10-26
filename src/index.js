import header from "./header";
import footer from "./footer";
import home from "./pages/home";
import menu from "./pages/menu";
import contact from "./pages/contact";

document.body.style.background =
    "url('/src/assets/images/marble-background.png') center center/cover fixed no-repeat";
const mainContainer = document.getElementById("content");
const linkClasses = ["home-link", "menu-link", "contact-link"];
const changePage = (page) => {
    linkClasses.forEach((link) => {
        document.getElementsByClassName(link)[0].style.textDecoration = "none";
        document.getElementsByClassName(link)[0].style.color = "white";
    });
    let underLineLink = document.getElementsByClassName(`${page}-link`)[0];
    let oldChild = mainContainer.childNodes[1];
    underLineLink.style.textDecoration = "underline";
    underLineLink.style.color = "red";
    if (page === "menu") {
        mainContainer.replaceChild(menu(), oldChild);
    } else if (page === "contact") {
        mainContainer.replaceChild(contact(), oldChild);
    } else {
        mainContainer.replaceChild(home(), oldChild);
    }
};
mainContainer.appendChild(header());

mainContainer.appendChild(home());

mainContainer.appendChild(footer());

export default changePage;
