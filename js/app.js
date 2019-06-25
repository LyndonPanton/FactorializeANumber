"use strict";

window.onload = function() {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function factorialize(number) {
		let factorial = 1;

		if (isNaN(number)) {
			return "NaN";
		} else if ((Number(number)) < 0) {
			return "Number must be more than 0";
		} else if (Number(number) % 1 !== 0 || number.indexOf("e") !== -1) {
			return "Number must be an integer";
		} else {
			for (let i = 1; i <= number; i++) {
				factorial = factorial * i;
			}

			return factorial;
		}
	}

	let input = document.getElementById("number");
	input.addEventListener("input", function(event) {
		factorialize(event.target.value);
	});
}