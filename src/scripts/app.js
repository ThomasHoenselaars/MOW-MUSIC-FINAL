import fullpage from "fullpage.js";
import Flickity from "flickity";

const fullPage = new fullpage("#fullpage", {
  //options here
  licenseKey: "230E284F-A2554F98-B9564237-98F6E1C4",
  autoScrolling: true,
  anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage"],
  menu: "#menu",
  scrollHorizontally: true,
  navigation: true,
  navigationTooltips: ["Home", "About", "Music", "Book A Studio", "Contact"],
  controlArrows: true,
  responsiveWidth: 900
});

// MOBILE MENU

const mobileHamburger = document.querySelector(".mobile-hamburger");
const mobileMenu = document.getElementById("mobile-menu");

mobileHamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("menu-active");
});

mobileMenu.addEventListener("click", e => {
  if (e.target.nodeName === "A") {
    mobileMenu.classList.remove("menu-active");
  }
});



var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
  pageDots: false
});
