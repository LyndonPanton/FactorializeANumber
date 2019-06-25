"use strict";

window.onload = function() {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function display(result) {
		document.getElementById("result").textContent = result;
	}

	function factorialize(number) {
		let factorial = 1;
		let result;

		if (isNaN(number)) {
			result = "NaN";
		} else if ((Number(number)) < 0) {
			result = "Number must be more than 0";
		} else if (Number(number) % 1 !== 0 || number.indexOf("e") !== -1) {
			result = "Number must be an integer";
		} else {
			for (let i = 1; i <= number; i++) {
				factorial = factorial * i;
			}

			result = factorial;
		}

		if (result === Infinity) {
			result = "Very Big";
		}
		
		display(result);
	}

	let input = document.getElementById("number");
	input.addEventListener("input", function(event) {
		factorialize(event.target.value);
	});
}