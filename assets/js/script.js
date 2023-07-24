//menu on click
$("#burgerMenu").click(function () {
  $(".menu").slideToggle();
});

//change nav menu color on scroll
const navbar = document.querySelector("header");
window.onscroll = () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};
