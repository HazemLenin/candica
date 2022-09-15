const sidebar = document.getElementById("sidebar");
const sidebarBtn = document.getElementById("sidebar-btn");

sidebarBtn.onclick = () => {
	sidebar.classList.toggle("active");
	sidebarBtn.classList.toggle("active");
};

// Slick carousel
$(".flavours-slider").slick({
	infinite: true,
	slidesToShow: 1,
	prevArrow: ".prev-arrow-slider",
	nextArrow: ".next-arrow-slider",
	centerMode: true,
	mobileFirst: true,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 899,
			settings: {
				slidesToShow: 3,
			},
		},
	],
});
