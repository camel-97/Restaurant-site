export function loadMenu() {
    const main = document.getElementById("content")
    main.innerHTML = "";

    const menuMainHead = document.createElement("div");
    menuMainHead.textContent = "Menu";
    menuMainHead.classList.add("menu-title");
    main.appendChild(menuMainHead);

    const menuInfo = document.createElement("div");
    menuInfo.classList.add("menu-info");
    menuInfo.textContent = `Our menus are constantly changing with the seasons, guided by our local 
    farmer's and fresh produce. Our menu is designed to be ordered in it's entirety and shared between 2 people, but that
    decision is entirely up to you...`
    main.appendChild(menuInfo);


    const menu = document.createElement("div");
    menu.classList.add("menu");
    main.appendChild(menu);

    const menuHead = document.createElement("div");
    menuHead.classList.add("menu-head");
    menuHead.textContent = "Sample Menu"
    menu.appendChild(menuHead);

    const menu1 = document.createElement("div");
    menu1.classList.add("menu-content");
    menu1.textContent = "Charred Hispi Cabbage, brown butter miso, smoked almond praline, burnt lemon crème fraiche     10"
    menu.appendChild(menu1);

    const menu2 = document.createElement("div");
    menu2.classList.add("menu-content");
    menu2.textContent = "Isle of Wight Tomatoes, pickled green strawberries, whipped burrata, lovage oil, sourdough crumb     9"
    menu.appendChild(menu2);

    const menu3 = document.createElement("div");
    menu3.classList.add("menu-content");
    menu3.textContent = "Hand-Dived Scallops, grilled over the shell, fennel pollen, elderflower brown butter, crispy chicken skin     14"
    menu.appendChild(menu3);

    const menu4 = document.createElement("div");
    menu4.classList.add("menu-content");
    menu4.textContent = "Hay-Smoked Duck Breast, plum lacquer, grilled radicchio, hazelnut & cocoa nib crumb      14"
    menu.appendChild(menu4);

    const menu5 = document.createElement("div");
    menu5.classList.add("menu-content");
    menu5.textContent = "Wild Mushroom & Nduja Flatbread, truffle pecorino, lemon thyme, smoked garlic yoghurt      12"
    menu.appendChild(menu5);

    const menu6 = document.createElement("div");
    menu6.classList.add("menu-content");
    menu6.textContent = "Heritage Beets Three Ways, salt-baked, pickled & raw — with goat’s curd, black garlic, puffed wild rice     12"
    menu.appendChild(menu6);

    const menu7 = document.createElement("div");
    menu7.classList.add("menu-content");
    menu7.classList.add("menu7")
    menu7.textContent = "Aged Beef Tartare, bone marrow toast, pickled shallots, cured yolk, nasturtium     16"
    menu.appendChild(menu7);
};