export var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          768: {
            allowSlideNext: false,
            allowSlidePrev: false
          }
        }
      });