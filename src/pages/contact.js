const contact = () => {
 const contactContainer = document.createElement("div");
 contactContainer.classList.add("contact-container");
 const contactText = document.createElement("h1");
 contactText.innerHTML = "CONTACT";
 contactContainer.appendChild(contactText);
 return contactContainer
};

export default contact;
