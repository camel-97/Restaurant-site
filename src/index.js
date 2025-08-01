import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";




document.addEventListener("DOMContentLoaded", () => {
  loadHome();

  const homeBtn = document.getElementById("home");
  const menuBtn = document.getElementById("menu");
  console.log("homeBtn:", homeBtn); // should NOT be null
  console.log("menuBtn:", menuBtn); // should NOT be null

  if (homeBtn) {
    homeBtn.addEventListener("click", loadHome);
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", loadMenu);
  }
});


