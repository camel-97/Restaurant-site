import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadBookings } from "./booking.js";

document.addEventListener("DOMContentLoaded", () => {
  loadHome();

  const homeBtn = document.getElementById("home");
  const menuBtn = document.getElementById("menu");
  const bookingsBtn = document.getElementById("bookings")
  console.log(bookingsBtn);
  console.log(menuBtn);

  if (homeBtn) {
    homeBtn.addEventListener("click", loadHome);
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", loadMenu);
  }

  if (bookingsBtn) {
    bookingsBtn.addEventListener("click", loadBookings);
  }
});


