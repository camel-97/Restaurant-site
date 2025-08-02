import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadBookings } from "./booking.js";
import cookingVideo from "./assets/cooking-background.mp4";


document.addEventListener("DOMContentLoaded", () => {
  loadHome();
  const video = document.createElement("video");
  video.classList.add("background-video");
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;

  const source = document.createElement("source");
  source.src = cookingVideo;
  source.type = "video/mp4";

  video.appendChild(source);
  document.body.appendChild(video); // or wherever you want it
    

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


