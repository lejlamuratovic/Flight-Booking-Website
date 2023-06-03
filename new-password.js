document.addEventListener("DOMContentLoaded", function () {
	let passwordInput = document.querySelector(".password-input");
	let showPasswordButton = document.querySelector(".show-password");

	showPasswordButton.addEventListener("click", function () {
		if (passwordInput.type === "password") {
			passwordInput.type = "text";
			showPasswordButton.textContent = "Hide";
		} else {
			passwordInput.type = "password";
			showPasswordButton.textContent = "Show";
		}
	});
});
