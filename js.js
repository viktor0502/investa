const accord = document.querySelectorAll('.faq-accord-item');

for(item of accord){
    item.addEventListener('click', function(){
        this.classList.toggle('active')
    })
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: true,
    delay: 3000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
// services

