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
