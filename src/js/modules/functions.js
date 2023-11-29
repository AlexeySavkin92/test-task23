export function isWebp() {
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src =
			"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {
		let className = support === true ? "webp" : "no-webp";
		document.documentElement.classList.add(className);
	});
}

export function smoothScroll() {
	window.scrollTo({
		top: window.innerHeight,
		behavior: "smooth",
	});
}

export function toglePopup() {
	const customButton = document.querySelector(".videoSection__custom-button");
	const videoPopup = document.querySelector(".videoSection__video-popup");
	const iframePopup = document.querySelector(".video-popup__iframe");

	customButton.addEventListener("click", function () {
		videoPopup.style.display = "block";
		iframePopup.src =
			"https://www.youtube.com/embed/__-vp0g_BhA?si=wr9g0o6PIxE_bUTf&amp;controls=0&autoplay=1";
	});

	videoPopup.addEventListener("click", function () {
		videoPopup.style.display = "none";
		iframePopup.src = "";
	});
}

export function highlightIfInputNotValid(idForm) {
	let elChild = document.querySelector("#formSection__form").children;
	for (var i = 0; i < elChild.length; i++) {
		elChild[i].classList.add("chek-valid"); //second console output
	}
}

export function removeClassOutsideInput(event) {
	let elChild = document.querySelector("#formSection__form").children;
	const isClickedOutsideInputs = !Array.from(elChild).some((elChild) =>
		elChild.contains(event.target)
	);

	if (isClickedOutsideInputs) {
		for (var i = 0; i < elChild.length; i++) {
			elChild[i].classList.remove("chek-valid");
		}
	}
}
