// The Environement
const clickBtn = document.querySelector(".click-btn");
const loginModal = document.querySelector(".login-modal");
const closeBtn = document.querySelector(".close-btn");
const formBtn = document.querySelector(".form-btn");

// The Function
function openLoginModal() {
  loginModal.style.display = "flex";
}
function closeLoginModal() {
  loginModal.style.display = " none";
}
function outsideClick(e) {
  if (e.target == loginModal) {
    loginModal.style.display = "none";
  }
}

// The Event
clickBtn.addEventListener("click", openLoginModal);
closeBtn.addEventListener("click", closeLoginModal);
formBtn.addEventListener("click", closeLoginModal);
window.addEventListener("click", outsideClick);
