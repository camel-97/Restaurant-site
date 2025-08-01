//function to load the homepage

import restImg from "./assets/louis-hansel-wVoP_Q2Bg_A-unsplash.jpg"

export function loadHome() {
    const main = document.getElementById("content")
    main.innerHTML = "";
    const header = document.createElement("div");
    header.classList.add("about")
    header.textContent = "Our Story..."
    main.appendChild(header);
    
    const info = document.createElement("div")
    info.classList.add("info")
    info.textContent = `Our menu changes regularly, guided by what’s 
    fresh, what’s local, and what inspires us. We work closely with 
    regional producers and growers, building dishes around ingredients 
    at their peak — not just in flavour, but in story. The name is a 
    quiet nod to the unpredictable nature of creativity. Behind every 
    dish is a process of experimentation, refinement, and a willingness 
    to be surprised by what works. What reaches your table has been 
    through countless versions, each one a step closer to something 
    quietly extraordinary. Whether you're joining us for a midweek 
    tasting or a long evening among friends, we hope each meal brings 
    warmth, depth, and a small sense of discovery.`
    main.appendChild(info);

    const mainImg = document.createElement("img");
    mainImg.classList.add("home-img")
    mainImg.src = restImg;
    main.appendChild(mainImg);

    const locationHeader = document.createElement("div");
    locationHeader.classList.add("where-to-find");
    locationHeader.textContent = "Where to find us..."
    main.appendChild(locationHeader);

    const location = document.createElement("div")
    const locationDetails = document.createElement("div")
    location.classList.add("location");
    locationDetails.classList.add("location");
    locationDetails.classList.add("location-details")
    location.textContent = "5 Kiln Heights, Clifton Dykes, CA10 2FS"
    locationDetails.textContent = "From Picadilly station, head south on bubba road for a 5 minute walk before you find us on your right."
    main.appendChild(location);
    main.appendChild(locationDetails);
};