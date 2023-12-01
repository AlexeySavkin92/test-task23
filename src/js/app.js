import * as flsFunctions from "./modules/functions.js";
import * as swiperFunctions from "./modules/swiper.js";

flsFunctions.isWebp();

document
	.getElementById("scroll-image")
	.addEventListener("click", flsFunctions.smoothScroll);

document.addEventListener("DOMContentLoaded", flsFunctions.toglePopup);

document.addEventListener("click", flsFunctions.removeClassOutsideInput);
const btnSend = document.querySelector(".formSection__button");
btnSend.addEventListener("click", flsFunctions.highlightIfInputNotValid);

const openBurger = document.querySelector(".header__burger-image");
openBurger.addEventListener("click", flsFunctions.toggleBurger);

const closeBurger = document.querySelector(".header__menu-burger-close");
closeBurger.addEventListener("click", flsFunctions.toggleBurger);

const overlay = document.querySelector(".header__menu-burger-overlay");
overlay.addEventListener("click", flsFunctions.closeBurger);
