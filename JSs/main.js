const responsive = {
  0: {
    items: 1,
  },
  320: {
    items: 1,
  },
  520: {
    items: 2,
  },
  820: {
    items: 3,
  },
};

$(document).ready(function () {
  $nav = $(".nav");
  $mainTitle = $(".site-bg h1,h3");
  $carouselSection = $(".blog");
  $togglecollapse = $(".toggle-collapse");

  // On click the hambarger menu
  $togglecollapse.click(function () {
    $nav.toggleClass("collapse");
    $mainTitle.toggleClass("main-title");
    $carouselSection.toggleClass("carousel-margin-top");
  });

  // calling owl-carousel for blog
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: false,
    nav: true,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next"),
    ],
    responsive: responsive,
  });

  //scroll to the top
  $(".move-up span").click(() => {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      300
    );
  });

  //AOS Instances
  AOS.init();
});
