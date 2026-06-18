// sell_slider end
$(document).ready(function () {
  $(".sell_slider").slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Custom buttons for navigation
  $(".prev-slide1").click(function () {
    $(".sell_slider").slick("slickPrev"); // Go to previous slide
  });

  $(".next-slide1").click(function () {
    $(".sell_slider").slick("slickNext"); // Go to next slide
  });
});

// sell_slider end

// banner_slider start
$(".banner_slider").slick({
  dots: false,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// banner_slider end

// testi_slider Starts

$(".testi_slider").slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoPlay: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoPlay: true,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        autoPlay: true,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        autoPlay: true,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
});

// testi_slider slider Ends

// product slider  start
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: true,
  centerMode: true,
  centerPadding: "100px",
  focusOnSelect: true,
});
// product slider  end

// simple slick slider start
$(".tab_slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
});
// simple slick slider start

// simple slick slider end

// wow animation js
$(function () {
  new WOW().init();
});
// wow animation js

// Cart Plus minus
document.addEventListener("DOMContentLoaded", function () {
  const minusButton = document.getElementById("minus");
  const plusButton = document.getElementById("plus");
  const numberDisplay = document.getElementById("number");

  minusButton.addEventListener("click", function () {
    let currentValue = parseInt(numberDisplay.textContent);
    if (currentValue > 0) {
      numberDisplay.textContent = currentValue - 1;
    }
  });

  plusButton.addEventListener("click", function () {
    let currentValue = parseInt(numberDisplay.textContent);
    numberDisplay.textContent = currentValue + 1;
  });
});
// Cart Plus minus

// Responsive Menu
$(function () {
  $("#menu").slicknav();
});
// Responsive Menu

// Responsive Menu

$(function () {
  $("#menu").slicknav();
});

$(function () {
  $("#responsive-menu").slicknav({
    prependTo: ".menuSec",
  });
});

// Responsive Menu

// Header And Footer Layout
$("#Header").load("layout/header.html");
$("#Footer").load("layout/footer.html");
// Header And Footer Layout

$(window).on("load", function () {
  let path = window.location.pathname.toLowerCase();
  let current = path.split("/").pop();

  if (!current) current = "index.html";

  const isBookingPage =
    current === "booking.html" || path.includes("/booking");

  /* ===============================
     MENU ACTIVE LOGIC
  =============================== */

  $("header .menuSec a").removeClass("active");
  let matched = false;

  $("header .menuSec a").each(function () {
    const href = ($(this).attr("href") || "").toLowerCase();
    if (!href || href === "#" || href.startsWith("javascript")) return;

    const hrefPage = href.split("/").pop();

    // Exact match
    if (hrefPage === current) {
      $(this).addClass("active");
      matched = true;
    }

    // Services inner + detail pages
    if (
      hrefPage === "services.html" &&
      (path.includes("service") || path.includes("/services"))
    ) {
      $(this).addClass("active");
      matched = true;
    }
  });

  // fallback → Home (ONLY if NOT booking page)
  if (!matched && !isBookingPage) {
    $('header .menuSec a[href="index.html"]').addClass("active");
  }

  /* ===============================
     BOOKING BUTTON ACTIVE LOGIC
  =============================== */

  $(".header-btn").removeClass("booking-active");

  if (isBookingPage) {
    $(".header-btn").addClass("booking-active");
  }
});



// Password Hide
function togglePasswordVisibility(toggleButton) {
  $(toggleButton).toggleClass("fa-eye fa-eye-slash");
  var input = $($(toggleButton).attr("toggle"));
  if (input.attr("type") === "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
}
// Attach event listener
$(document).on("click", ".toggle-password", function () {
  togglePasswordVisibility(this);
});
// Password Hide

// brand_slid Starts

$(".brand_slid").slick({
  slidesToShow: 9,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  dots: false,

  autoplay: true,
  autoplaySpeed: 0,
  speed: 2000,
  cssEase: "linear",

  pauseOnHover: false,
  pauseOnFocus: false,

  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// brand_slid Ends
