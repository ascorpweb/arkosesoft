/* function jsCall() {
  alert("On click call!!!");
}

function onPageLoadCall() {
  alert("PageLoadCall");
}

var mobileMenu;
var closeMenu;
var hamburger;
var navLink;

window.onload = function load() {
  hamburger = document.querySelector(".hamburger");
  navMenu = document.querySelector(".nav-menu");
  navLink = document.querySelectorAll(".nav-link");
  hamburger.addEventListener("click", mobileMenu);
  navLink.forEach((n) => n.addEventListener("click", closeMenu));
};

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
 */
