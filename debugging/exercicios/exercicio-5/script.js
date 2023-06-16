const loginBtn = document.getElementById("login-link");
const modal = document.getElementById("login-modal");
loginBtn.addEventListener ('click', () => {
	modal.style.display = "block";
})
const closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
	modal.style.display = "none";
}
