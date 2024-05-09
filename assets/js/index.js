var swiper = new Swiper(".promo__swiper", {
	pagination: {
		el: ".promo .swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".promo .arrow__next",
		prevEl: ".promo .arrow__prev",
	},
});

var swiper = new Swiper(".clients__swiper", {
	slidesPerView: 4,
	spaceBetween: 30,
	pagination: {
		el: ".clients .swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".clients .arrow__next",
		prevEl: ".clients .arrow__prev",
	},
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		1010: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
});

var swiper = new Swiper(".reviews__swiper", {
	pagination: {
		el: ".reviews .swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".reviews .arrow__next",
		prevEl: ".reviews .arrow__prev",
	},
});