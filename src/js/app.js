import * as flsFunctions from "./modules/functions.js";
import * as swiperFunctions from "./modules/swiper.js";

flsFunctions.isWebp();

document.getElementById("scroll-image").addEventListener("click", function () {
	window.scrollTo({
		top: window.innerHeight,
		behavior: "smooth",
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const customButton = document.querySelector(".videoSection__custom-button");
	const videoPopup = document.querySelector(".videoSection__video-popup");
	const iframe = document.querySelector(".videoSection__iframe");
	const iframePopup = document.querySelector(".video-popup__iframe");

	customButton.addEventListener("click", function () {
		// Открыть попап с видео
		videoPopup.style.display = "block";
		// Задать src для видео, чтобы начать воспроизведение
		iframePopup.src =
			"https://www.youtube.com/embed/__-vp0g_BhA?si=wr9g0o6PIxE_bUTf&amp;controls=0&autoplay=1";
		// iframe.src =
		// 	"https://www.youtube.com/embed/__-vp0g_BhA?si=WRDJbBR8YQqSaxan&autoplay=1";
	});

	// Закрыть попап с видео
	videoPopup.addEventListener("click", function () {
		videoPopup.style.display = "none";
		// Остановить видео и сбросить src
		iframePopup.src = "";
		//iframe.src = "";
	});
});

function highlightIfInputNotValid(idForm) {
	let elChild = document.querySelector("#formSection__form").children;
	for (var i = 0; i < elChild.length; i++) {
		elChild[i].classList.add("chek-valid"); //second console output
	}
}

function removeClassOutsideInput(event) {
	let elChild = document.querySelector("#formSection__form").children;
	const isClickedOutsideInputs = !Array.from(elChild).some((elChild) =>
		elChild.contains(event.target)
	);

	if (isClickedOutsideInputs) {
		for (var i = 0; i < elChild.length; i++) {
			elChild[i].classList.remove("chek-valid"); //second console output
		}
	}
}
// Добавляем обработчик события клика к document
document.addEventListener("click", removeClassOutsideInput);
const btnSend = document.querySelector(".formSection__button");
btnSend.addEventListener("click", highlightIfInputNotValid);
