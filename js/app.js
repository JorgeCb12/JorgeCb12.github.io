const menuBtn = document.querySelector(".open-menu");
const navbar = document.querySelector(".navbar");
const modal = document.getElementById("welcome-modal");
const closeBtn = document.getElementById("close-modal");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("modal-hidden");

  console.log("El usuario ha entrado al portafolio.");
});
