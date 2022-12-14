const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const containerFluid = document.querySelector(".container-fluid");
const dropbtn = document.querySelector(".dropbtn");
const dropdown = document.querySelector(".dropdown-content");

const chevron = document.querySelector("#chevron");
const socialIcons = document.querySelector("#social-icons");

function menu_toggle() {
  nav.classList.toggle("active");
  containerFluid.classList.toggle("toggle-hide");
}

function dropbtn_toggle() {
  dropdown.classList.toggle("active");
}

function chevron_toggle() {
  if (chevron.className === "fa-solid fa-chevron-right") {
    chevron.className = "fa-solid fa-chevron-left";
    chevron.classList.toggle("active");
    socialIcons.classList.toggle("active");
  } else {
    chevron.className = "fa-solid fa-chevron-right";
    socialIcons.classList.toggle("active");
  }
}

menu.addEventListener("click", menu_toggle);
dropbtn.addEventListener("click", dropbtn_toggle);
chevron.addEventListener("click", chevron_toggle);

