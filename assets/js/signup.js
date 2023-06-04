document.addEventListener("DOMContentLoaded", function () {
	var checkbox = document.getElementById("skipCheckbox");
	var nameInput = document.querySelector(".name-input");
	var phoneInput = document.querySelector('input[type="number"]');
	var dobInput = document.querySelector(".date-input");

	checkbox.addEventListener("change", function () {
		if (checkbox.checked) {
			nameInput.setAttribute("disabled", "disabled");
			phoneInput.setAttribute("disabled", "disabled");
			dobInput.setAttribute("disabled", "disabled");
		} else {
			nameInput.removeAttribute("disabled");
			phoneInput.removeAttribute("disabled");
			dobInput.removeAttribute("disabled");
		}
	});
});

const showPassword = document.querySelector(".show-password");
const passwordInput = document.querySelector(".password-input");

showPassword.addEventListener("click", () => {
	const type =
		passwordInput.getAttribute("type") === "password" ? "text" : "password";
	passwordInput.setAttribute("type", type);
	showPassword.textContent = type === "password" ? "Show" : "Hide";
});
