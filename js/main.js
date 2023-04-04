const swiper = new Swiper('.products__container', {
   loop: true,
   spaceBetween: 20,
   centeredSlides: true,
   slidesPerView: 1,
   // Navigation arrows
   pagination: {
      el: ".products__paagination",
      clickable: true
   },
   autoplay: {
      delay: 4000,
      disableOnInteraction: false,
   },

});

const swiper2 = new Swiper('.founder__swiper', {
   loop: true,
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: 1,
   // Navigation arrows
   pagination: {
      el: ".founder__paagination",
      clickable: true
   },
   autoplay: {
      delay: 4000,
      disableOnInteraction: false,
   },

});

const nav = document.getElementById('header')
function scrollHeader() {
   // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
   if (this.scrollY >= 80) nav.classList.add('scroll-header');
   else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
   const scrollY = window.pageYOffset

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
         sectionTop = current.offsetTop - 50,
         sectionId = current.getAttribute('id')

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         document.querySelector('.header__item a[href*=' + sectionId + ']').classList.add('active')
      } else {
         document.querySelector('.header__item a[href*=' + sectionId + ']').classList.remove('active')
      }
   })
}
window.addEventListener('scroll', scrollActive)


const number1 = document.querySelector('.babycare__item-1')
const number2 = document.querySelector('.babycare__item-2')
const number3 = document.querySelector('.babycare__item-3')
const number4 = document.querySelector('.babycare__item-4')
const numberContent1 = document.querySelector('.babycare__content-1')
const numberContent2 = document.querySelector('.babycare__content-2')
const numberContent3 = document.querySelector('.babycare__content-3')
const numberContent4 = document.querySelector('.babycare__content-4')




number1.addEventListener('click', function () {
   number1.classList.add('active')
   number2.classList.remove('active')
   number3.classList.remove('active')
   number4.classList.remove('active')
   numberContent1.classList.add('active')
   numberContent2.classList.remove('active')
   numberContent3.classList.remove('active')
   numberContent4.classList.remove('active')
})
number2.addEventListener('click', function () {
   number1.classList.remove('active')
   number2.classList.add('active')
   number3.classList.remove('active')
   number4.classList.remove('active')
   numberContent1.classList.remove('active')
   numberContent2.classList.add('active')
   numberContent3.classList.remove('active')
   numberContent4.classList.remove('active')
})
number3.addEventListener('click', function () {
   number1.classList.remove('active')
   number2.classList.remove('active')
   number3.classList.add('active')
   number4.classList.remove('active')
   numberContent1.classList.remove('active')
   numberContent2.classList.remove('active')
   numberContent3.classList.add('active')
   numberContent4.classList.remove('active')
})
number4.addEventListener('click', function () {
   number1.classList.remove('active')
   number2.classList.remove('active')
   number3.classList.remove('active')
   number4.classList.add('active')
   numberContent1.classList.remove('active')
   numberContent2.classList.remove('active')
   numberContent3.classList.remove('active')
   numberContent4.classList.add('active')
})