document.addEventListener('DOMContentLoaded', () => {
	const track = document.querySelector('.imgslide');
	const slides = Array.from(track.children);
	const slideWidth = slides[0].getBoundingClientRect().width + 16; // includes gap

	// Duplicate slides for seamless looping
	track.innerHTML += track.innerHTML;

	let position = 0;
	let speed = 1; // pixels per frame, adjust for faster/slower scroll

	function animate() {
		position -= speed;
		// when half of the total width is scrolled, reset instantly
		if (Math.abs(position) >= slideWidth * slides.length) {
			position = 0;
		}
		track.style.transform = `translateX(${position}px)`;
		requestAnimationFrame(animate);
	}

	track.style.display = 'flex';
	track.style.transition = 'none';
	track.style.willChange = 'transform';

	animate();
});

