const contact = () => {
    const businessDetails = {
        address: "123 fake street",
        phone: "+12 345 678 9101",
        email: "real_email@marbleSteakhouse.com",
        openTimes: {
            monFri: "5pm - 11pm",
            satSun: "2pm - 1am",
        },
    };

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
    const contactDetailsContainer = document.createElement("div");
    contactDetailsContainer.classList.add("contact-details-container");
    contactContainer.appendChild(contactDetailsContainer);
    const address = document.createElement("h4");
    address.innerHTML = `Address: ${businessDetails.address}`;
    contactDetailsContainer.appendChild(address);

    const contactNumber = document.createElement("h4");
    contactNumber.innerHTML = `Phone: ${businessDetails.phone}`;
    contactDetailsContainer.appendChild(contactNumber);

    const emailUs = document.createElement("h4");
    emailUs.innerHTML = `Email: ${businessDetails.email}`;
    contactDetailsContainer.appendChild(emailUs);

    const openTimes = document.createElement("h4");
    openTimes.innerHTML = `Open times: </br> Mon-Fri: ${businessDetails.openTimes.monFri} </br> Sat-Sun: ${businessDetails.openTimes.satSun}`;
    contactDetailsContainer.appendChild(openTimes);

    const iframeMap = document.createElement("iframe");
    iframeMap.classList.add("iframe-map");
    iframeMap.src =
        "https://maps.google.com/maps?q=123%20fake%20street&t=&z=13&ie=UTF8&iwloc=&output=embed";
    iframeMap.loading = "lazy";
    contactContainer.appendChild(iframeMap);
    return contactContainer;
};

export default contact;
