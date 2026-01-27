document.addEventListener('DOMContentLoaded', () => {
	const elementosCarruosel = document.querySelectorAll('.carrousel');
	M.carrousel.init(elementosCarruosel, {
		duration: 150,
		dist : -80,
		shift: 5,
		padding:5,
		numVisible: 3,
		indicators:true,
		noWrap:true
	});
});