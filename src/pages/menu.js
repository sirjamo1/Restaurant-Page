const menu = () => {
 const menuContainer = document.createElement("div");
 menuContainer.classList.add("menu-container");
 const menuText = document.createElement("h1");
 menuText.innerHTML = "MENU";
 menuContainer.appendChild(menuText);
 return menuContainer
};

export default menu;
