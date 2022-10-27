const menu = () => {
    //Note: menuItem.photoSrc path was /src/assets.... removed to allow gh-pages to get
    const menuItem = [
        {
            name: "Chateaubriand",
            description:
                "Traditionally consists of a large front cut fillet of tenderloin grilled between two lesser pieces of meat that are discarded after cooking.",
            photoSrc: "./assets/images/chateaubriand.png",
        },
        {
            name: "Filet Mignon",
            description:
                "Thick slices taken from the tenderloin or eye fillet.",
            photoSrc: "./assets/images/filet-mignon.png",
        },
        {
            name: "Ribeye",
            description:
                "The ribeye is carved from the primal section called the beef rib.",
            photoSrc: "./assets/images/ribeye.png",
        },
        {
            name: "Striploin",
            description:
                "Boneless cut from the short loin that's highly prized for its excellent balance of flavor & tenderness.",
            photoSrc: "./assets/images/striploin.png",
        },
    ];
    const sauces = [
        {
            name: "Mushroom",
            description:
                " Mushroom sauce is a rich sauce made from sautéed mushrooms and aromatics.",
            photoSrc: "./assets/images/mushroom-sauce.png",
        },
        {
            name: "Pepper",
            description:
                "A spicy hot sauce seasoned with cayenne peppers, chile peppers or peppercorns.",
            photoSrc: "./assets/images/pepper-sauce.png",
        },
        {
            name: "Blue Cheese",
            description:
                "Blue cheese sauce is assertive and salty, with a tangy garlic kick.",
            photoSrc: "./assets/images/blue-cheese-sauce.png",
        },
    ];
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    const chooseSteakText = document.createElement("h1");
    menuContainer.appendChild(chooseSteakText);
    chooseSteakText.innerHTML = "Choose a steak.";
    const menuItemContainer = document.createElement("div");
    menuItemContainer.classList.add("menu-item-container");
    menuContainer.appendChild(menuItemContainer);

    class MenuCreator {
        constructor(item) {
            let itemCard = document.createElement("div");
            itemCard.classList.add("menu-cards");
            let itemName = document.createElement("h3");
            itemName.innerHTML = item.name;
            itemCard.appendChild(itemName);
            let itemDescription = document.createElement("h4");
            itemDescription.innerHTML = item.description;
            itemCard.appendChild(itemDescription);
            let itemImage = document.createElement("img");
            itemImage.setAttribute("src", item.photoSrc);
            itemImage.setAttribute("alt", item.name);
            itemCard.appendChild(itemImage);
            let comesWith = document.createElement("p");
            comesWith.innerHTML =
                "* All steaks are served with baked potatoes and steamed veggies";
            itemCard.appendChild(comesWith);
            menuItemContainer.appendChild(itemCard);
        }
    }
    class SauceCreator {
        constructor(item) {
            let sauceCard = document.createElement("div");
            sauceCard.classList.add("sauce-cards");
            let sauceName = document.createElement("h3");
            sauceName.innerHTML = item.name;
            sauceCard.appendChild(sauceName);
            let sauceDescription = document.createElement("h4");
            sauceDescription.innerHTML = item.description;
            sauceCard.appendChild(sauceDescription);
            let sauceImage = document.createElement("img");
            sauceImage.setAttribute("src", item.photoSrc);
            sauceImage.setAttribute("alt", `${item.name} sauce image`);
            sauceImage.classList.add("sauce-image");
            sauceCard.appendChild(sauceImage);
            sauceContainer.appendChild(sauceCard);
        }
    }
    menuItem.forEach((item) => {
        let newMenuCard = new MenuCreator(item);
    });
    const likeItCookedText = document.createElement("h1");
    likeItCookedText.innerHTML = "How you would like it cooked?";
    menuContainer.appendChild(likeItCookedText);
    const rareWellDoneImg = document.createElement("img");
    rareWellDoneImg.setAttribute("src", "./assets/images/rare-welldone.png");
    rareWellDoneImg.setAttribute("alt", "cooked steak");
    rareWellDoneImg.classList.add("rare-well-done-img");
    menuContainer.appendChild(rareWellDoneImg);
    const chooseSauceText = document.createElement("h1");
    chooseSauceText.innerHTML = "Choose a sauce.";
    menuContainer.appendChild(chooseSauceText);
    let sauceContainer = document.createElement("div");
    sauceContainer.classList.add("sauce-container");
    menuContainer.appendChild(sauceContainer);
    sauces.forEach((item) => {
        let newSauceCard = new SauceCreator(item);
    })
    const orderAtCounterText = document.createElement("h1");
    orderAtCounterText.classList.add("order-at-counter");
    orderAtCounterText.innerHTML = "Order at the counter.";
    menuContainer.appendChild(orderAtCounterText);

    return menuContainer;
};

export default menu;
