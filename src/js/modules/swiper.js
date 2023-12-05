import Swiper from "swiper";

const swiper = new Swiper(".swiper-container", {
	direction: "vertical",
	loop: false,
	slidesPerView: 1,
	allowTouchMove: false,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

const slideButtons = document.querySelectorAll(".slide-button");

slideButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const slideIndex = parseInt(button.getAttribute("data-slide"));
		swiper.slideTo(slideIndex);
	});
});

function setActiveButton(index) {
	slideButtons.forEach((button) => {
		button.classList.remove("active");
	});
	slideButtons[index].classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
	setActiveButton(0);
});

slideButtons.forEach((button, index) => {
	button.addEventListener("click", () => {
		setActiveButton(index);
		const slideIndex = parseInt(button.getAttribute("data-slide"));
		swiper.slideTo(slideIndex);
	});
});

export function updateSwiperDirection() {
	if (window.innerWidth <= 768) {
		swiper.allowTouchMove = true;
		swiper.params.direction = "horizontal";
	} else {
		swiper.allowTouchMove = false;
		swiper.params.direction = "vertical";
	}
	swiper.update();
}

window.addEventListener("resize", () => {
	updateSwiperDirection();
});

updateSwiperDirection();
