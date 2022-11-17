document.querySelector("#burger").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".header").classList.toggle("active");
})

const swiper = new Swiper('.gallery', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    wrapperClass: 'gallery-wrapper',
    slideClass: 'gallery-slide',

    pagination: {
        el: '.office-gallery .swiper-pagination',
        type: 'progressbar'
    },

    autoplay: {
        delay: 5000
    }
  })