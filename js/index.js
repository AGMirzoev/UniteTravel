const swiper = new Swiper('.swiper', {
	// 4ptional parameters
	direction: 'horizontal',
	loop: true,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		1440: {
			slidesPerView: 5,
			slideToClickedSlide: true,
		},

		1024: {
			slidesPerView: 3,
			slideToClickedSlide: true,
		},

		768: {
			slidesPerView: 2,
			slideToClickedSlide: true,
		},

		425: {
			slidesPerView: 1,
			slideToClickedSlide: true,
		},
	},
})
