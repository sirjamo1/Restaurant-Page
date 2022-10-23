import header from "./header";
import footer from "./footer";
import home from "./pages/home";
import menu from "./pages/menu";
import contact from "./pages/contact";

document.body.style.background =
    "url('/src/images/marble-background.png') center center/cover fixed no-repeat";
const mainContainer = document.getElementById("content");
const changePage = (page) => {
    let oldChild = mainContainer.childNodes[1];
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
