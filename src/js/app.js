import * as flsFunctions from "./modules/functions.js";
import * as swiperFunctions from "./modules/swiper.js";

flsFunctions.isWebp();

document.getElementById("scroll-image").addEventListener("click", function () {
	window.scrollTo({
		top: document.body.scrollHeight,
		behavior: "smooth",
	});
});
