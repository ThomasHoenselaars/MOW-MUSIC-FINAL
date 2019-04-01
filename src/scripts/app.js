import fullpage from "fullpage.js";
import Flickity from "flickity";

const fullPage = new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage"],
  menu: "#menu",
  scrollHorizontally: true,
  // sectionsColor: ['#ffffff', '#1BBC9B', '#7E8F7C','#C63D0F', ''],
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

// POPUP

// const bookNow = document.querySelector('.booknow');
// const popupScreen = document.querySelector('.popup');
// const closePopup = document.querySelector('.closebutton')

// const openModal = () => {
//     popupScreen.style.display = 'block';
// };

// const closeModal = () => {
//     popupScreen.style.display = 'none';
// };

// // Close if outside click
// const clickOutside = (e) => {
//     if(e.target === popupScreen) {
//     popupScreen.style.display = 'none';
//     }
// };

// bookNow.addEventListener('click', openModal);
// closePopup.addEventListener('click', closeModal);
// // Listen outsideclick
// window.addEventListener('click', clickOutside);

// const bookNow = document.querySelector('.booknow');
// const openAgenda = () => {
//     window.open(
//     'https://www.supersaas.nl/schedule/Thomashoenselaars/MOW_Studio?m=1',
//     '_blank'
// )};
// bookNow.addEventListener('click', openAgenda);

var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
  pageDots: false
});
