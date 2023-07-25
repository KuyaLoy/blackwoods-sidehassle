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
let oldHeight1;
$(document).ready(function () {
  let servicesWrapper = $(".services-wrapper");
  let servicesWrapperHeight = servicesWrapper.height();
  oldHeight1 = servicesWrapperHeight;

  if ($(window).width() < 699.98) {
    servicesWrapper = servicesWrapper.height(
      (62.5 / 100) * servicesWrapperHeight
    );
  } else if ($(window).width() < 899.98) {
    servicesWrapper = servicesWrapper.height(
      (55 / 100) * servicesWrapperHeight
    );
  } else if ($(window).width() < 1139.98) {
    servicesWrapper = servicesWrapper.height(
      (60 / 100) * servicesWrapperHeight
    );
  } else {
    servicesWrapper = servicesWrapper.height(
      (75 / 100) * servicesWrapperHeight
    );
  }
});

$("#showMoreBtn").click(function () {
  $(this).hide();
  $(".services-wrapper").addClass("show");
  $(".services-wrapper").height(oldHeight1);
});

//services-wrapper
let oldHeight2;
$(document).ready(function () {
  let offerWrapper = $(".offer-wrapper");
  let offerWrapperHeight = offerWrapper.height();
  oldHeight2 = offerWrapperHeight;

  if ($(window).width() < 699.98) {
    offerWrapper = offerWrapper.height((57.7 / 100) * offerWrapperHeight);
  } else if ($(window).width() < 899.98) {
    offerWrapper = offerWrapper.height((50 / 100) * offerWrapperHeight);
  } else if ($(window).width() < 1139.98) {
    offerWrapper = offerWrapper.height((55 / 100) * offerWrapperHeight);
  } else {
    offerWrapper = offerWrapper.height((78 / 100) * offerWrapperHeight);
  }
});

$("#showMoreBtn2").click(function () {
  $(this).hide();
  $(".offer-wrapper").addClass("show");
  $(".offer-wrapper").height(oldHeight2);
});
