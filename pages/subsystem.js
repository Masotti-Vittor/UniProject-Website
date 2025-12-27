const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function showSlide(index) {
	slides.forEach(slide => slide.classList.remove("active"));
	slides[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
	currentIndex++;
	if (currentIndex >= slides.length) {
		currentIndex = 0;
	}
	showSlide(currentIndex);
});

prevBtn.addEventListener("click", () => {
	currentIndex--;
	if (currentIndex < 0) {
		currentIndex = slides.length - 1;
	}
	showSlide(currentIndex);
});

