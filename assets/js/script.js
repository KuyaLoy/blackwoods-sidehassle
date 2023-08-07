AOS.init({ disable: "mobile" });

//######### menu on click #########
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

$(document).ready(function () {
  // Define specific offsets for each section (customize these as needed)
  const sectionOffsets = {
    Services: 100,
    Industries: 100,
    Company: 100,
    FAQ: 100,
    "Contact-Us": 100,
  };

  // Function to add "active" class to the menu item based on scroll position
  function setActiveMenuItem() {
    const scrollPosition = $(window).scrollTop();

    $("ul.menu li a").each(function () {
      const target = $(this).attr("href");
      if (target.startsWith("#")) {
        const targetElement = $(target);
        if (targetElement.length) {
          const sectionId = target.substring(1); // Remove the "#" to get the section ID
          const offset = sectionOffsets[sectionId] || 0; // Use the specific offset or fallback to 0

          const sectionTop = targetElement.offset().top - offset;
          const sectionBottom = sectionTop + targetElement.outerHeight();

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            $("ul.menu li").removeClass("active");
            $(this).parent().addClass("active");
          }
        }
      }
    });
  }

  // Attach scroll event handler to add "active" class to the menu item when scrolling
  $(window).on("scroll", setActiveMenuItem);
});
//######### services-wrapper #########
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

//######### services #########
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
    offerWrapper = offerWrapper.height((75 / 100) * offerWrapperHeight);
  }
});

$("#showMoreBtn2").click(function () {
  $(this).hide();
  $(".offer-wrapper").addClass("show");
  $(".offer-wrapper").height(oldHeight2);
});

//######### strategy #########
const mySwiper = new Swiper(".strat-swiper-cont", {
  effect: "fade", // Set the fade effect
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true, // Add loop option for infinite scrolling
  initialSlide: 0,
  navigation: {
    nextEl: ".swiper-button-next", // Use Swiper.js navigation arrows
    prevEl: ".swiper-button-prev", // Use Swiper.js navigation arrows
  },
  on: {
    slideChange: function () {
      activeTabIndex = this.realIndex; // Use realIndex for proper tab index
      setActiveTab();
    },
  },
});

let activeTabIndex = 0;

function setActiveTab() {
  $(".tab").removeClass("active");
  $(".tab").eq(activeTabIndex).addClass("active");
}

$(".tab").on("click", function () {
  const index = $(this).index();
  activeTabIndex = index;
  setActiveTab();
  mySwiper.slideTo(index); // Slide to the corresponding tab
});
setActiveTab();

//######### agency #########
$(document).ready(function () {
  var ulCount = 3;
  var imageCount = 16;
  var ulContainer = $(".icons-cont");

  for (var i = 0; i < ulCount; i++) {
    var ul = $("<ul></ul>");
    var imageArray = Array.from(
      { length: imageCount },
      (_, index) => index + 1
    );
    var shuffledArray = shuffleArray(imageArray);

    for (var j = 0; j < imageCount; j++) {
      var li = $("<li></li>");
      var img = $("<img>").attr(
        "src",
        "./assets/images/agency/logo/" + shuffledArray[j] + ".svg"
      );
      li.append(img);
      ul.append(li);
    }

    ulContainer.append(ul);
  }
});

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  var currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

// $(document).ready(function () {
//   const agencyContHeight = $(".agency-cont").height();
//   $(".agency-icons").height(agencyContHeight);
// });
$(document).ready(function () {
  const $accordionItems = $(".accordion-item");

  $accordionItems.each(function (index) {
    const $title = $(this).find(".accordion-title");
    const $content = $(this).find(".accordion-content");

    // Set the first accordion to be  open by default
    if (index === 0) {
      $content.slideDown();
    } else {
      $content.slideUp();
    }

    $title.on("click", function () {
      const $currentItem = $(this).parent(".accordion-item");

      if (!$currentItem.hasClass("open")) {
        $accordionItems.removeClass("open");
        $(".accordion-content").slideUp();
        $currentItem.addClass("open");
        $content.slideDown();
      }
    });
  });
});

$(document).ready(function () {
  $("#myForm").submit(function (e) {
    e.preventDefault();

    // Collect form data
    const fullName = $("input[name='full-name']").val();
    const email = $("input[name='email']").val();
    const website = $("input[name='website']").val();
    const budget = $("select[name='budget'] option:selected").text(); // Fetch the selected option's text
    const message = $("textarea[name='message']").val();

    // Create a JavaScript object with the form data
    const formData = {
      fullName: fullName,
      email: email,
      website: website,
      budget: budget,
      message: message,
    };

    // Send the form data to the PHP script using AJAX
    $.ajax({
      type: "POST",
      url: "save_form_data.php",
      data: formData,
      success: function (response) {
        // Show the confirmation message to the user
        $("#confirmationMessage").css("display", "flex");

        setTimeout(function () {
          $(".loading").hide();
          $(".load-text").show();
          setTimeout(function () {
            $("#confirmationMessage").css("display", "none");
            $(".loading").show();
            $(".load-text").hide();
          }, 2000);
        }, 3000);

        // Hide the form after showing the confirmation message
      },
      error: function (error) {
        console.error("Error saving data:", error);
        // You can handle the error and show an error message here
      },
    });

    // Clear the form fields after submission (optional)
    $("#myForm")[0].reset();
  });
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
