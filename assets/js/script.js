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

//services-wrapper
let oldHeight;
$(document).ready(function () {
  let servicesWrapper = $(".services-wrapper");
  let servicesWrapperHeight = servicesWrapper.height();
  oldHeight = servicesWrapperHeight;

  if ($(window).width() < 699.98) {
    servicesWrapper = servicesWrapper.height(
      (46 / 100) * servicesWrapperHeight
    );
  } else if ($(window).width() < 899.98) {
    servicesWrapper = servicesWrapper.height(
      (40 / 100) * servicesWrapperHeight
    );
  } else {
    servicesWrapper = servicesWrapper.height(
      (55 / 100) * servicesWrapperHeight
    );
  }
});

$("#showMoreBtn").click(function () {
  $(this).hide();
  $(".services-wrapper").addClass("show");
  $(".services-wrapper").height(oldHeight);
});
