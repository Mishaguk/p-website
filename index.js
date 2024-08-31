const navBarContainer = document.querySelector(".navbar-container");
const backToTopBtn = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  let scrollHeight = window.scrollY || window.pageYOffset;
  if (scrollHeight > 45) {
    navBarContainer.classList.add("sticky-top");
    backToTopBtn.style.display = "flex ";
  } else {
    navBarContainer.classList.remove("sticky-top");
    backToTopBtn.style.display = "none";
  }
});

$(document).ready(function () {
  backToTopBtn.style.display = "none";
  $("#tab-1").load("tabs/tab1.html");
  $("#tab-2").load("tabs/tab2.html");
  $("#tab-3").load("tabs/tab3.html");
});

$(document).ready(function () {
  $(".header-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const aboutImg = document.querySelector(".about-img");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        aboutImg.classList.add("animateFrame");
        observer.unobserve(aboutImg);
      }
    });
  });

  observer.observe(aboutImg);
});
$(document).ready(function () {
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,

    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },

    dots: false,
    margin: 24,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });
});
