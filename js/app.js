"use strict";

window.onload = function() {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function factorialize(number) {
		let factorial = 0;

		if (isNaN(number)) {
			return "NaN";
		} else if ((Number(number)) < 1) {
			return "Number must be more than 0";
		} else if (Number(number) % 1 !== 0 || number.indexOf("e") !== -1) {
			return "Number must be an integer";
		} else {
			console.log(4);
			
		}
	}

	let input = document.getElementById("number");
	input.addEventListener("input", function(event) {
		factorialize(event.target.value);
	});
}