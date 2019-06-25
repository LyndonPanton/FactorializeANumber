"use strict";

window.onload = function() {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function factorialize(number) {
		
	}

	let input = document.getElementById("number");
	input.addEventListener("input", function(event) {
		factorialize(Number(event.target.value));
	});
}