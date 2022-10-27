import steakOnGrill from "./assets/images/steak-on-grill.png";

const home = () => {
    const homeContent = {
        title: "Marble Steakhouse",
        description:
            "Home to four of the best cuts of meat you'll ever eat. </br> </br> Have it your way! We take pride in cooking your steak the way you like it, if you're not 100% satisfied with how it's cooked, we'll cook another. No questions asked.",
            image: steakOnGrill
    };
    const homeContainer = document.createElement("div");
    const steakOnGrillImg = document.createElement("img");
    steakOnGrillImg.setAttribute("src", homeContent.image);
    steakOnGrillImg.setAttribute("alt", "steak on grill");
    homeContainer.appendChild(steakOnGrillImg);
    homeContainer.classList.add("home-container");
    const homeTextContainer = document.createElement("div")
    const homeTitle = document.createElement("h1");
    homeTitle.innerHTML = homeContent.title;
    homeTextContainer.appendChild(homeTitle);
    const homeDescription = document.createElement("h2");
    homeDescription.innerHTML = homeContent.description;
    homeTextContainer.appendChild(homeDescription)
    homeContainer.appendChild(homeTextContainer)
    return homeContainer;
};

export default home;
