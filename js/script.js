window.addEventListener('DOMContentLoaded' , () =>{
  'use strict';

  //бургер меню
  const burger = () =>{
    const menuToggle = document.querySelector('#menu-togle'),
          html = document.querySelector('html'),
          headerMenu = document.querySelector('.header-wrapper-contacts');

    document.addEventListener('click', (elem) =>{
      if(elem.target.closest('#menu-togle')){
        menuToggle.classList.toggle('menu-icon-active');
        headerMenu.classList.toggle('header-wrapper-contacts-active');
        html.classList.toggle('compensate-for-scrollbar');
      }else if(!target.closest('#menu-togle')){
        menuToggle.classList.remove('menu-icon-active');
        headerMenu.classList.remove('header-wrapper-contacts-active');
        html.classList.remove('compensate-for-scrollbar');
      }else if(!target.closest('.header-wrapper-contacts')){
        menuToggle.classList.remove('menu-icon-active');
        headerMenu.classList.remove('header-wrapper-contacts-active');
        html.classList.remove('compensate-for-scrollbar');
      }
    });
  };
  burger();

  // Скролл header 
  const scrollHeader = () =>{
    let lastScroll = 0,
        defaultOffset = 50;
    const header  = document.querySelector('.header'),
          scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
      window.addEventListener('scroll', () => {
        if(scrollPosition() < lastScroll) {
          header.classList.add('header-active');
          header.classList.remove('header-active2');
        }else if(scrollPosition() > lastScroll && scrollPosition() > defaultOffset){
          header.classList.add('header-active2');
        }
        if(scrollPosition() <= defaultOffset) {
          header.classList.remove('header-active');
        }
        lastScroll = scrollPosition();
      });
  };
  scrollHeader();
  window.addEventListener("resize", scrollHeader);

  var wow = new WOW(
    {
      boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
      animateClass: 'animated', // класс для анимации элемента (для новой версии анимации, animate__fadeInLeft)
      offset:       0,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
      mobile:       true,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
      live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
      callback:     function(box) {
        // функция срабатывает каждый раз при старте анимации
        // аргумент box — элемент, для которого была запущена анимация
      },
      scrollContainer: null // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
    }
  );
  wow.init();

  //Слайдер № 1
  let slide1 = () =>{
    const width = window.innerWidth
      if (width < 1200){
      let materialSwiper= new Swiper('.material-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        slidesPerGroup: 1,  
        autoHeight: false, 
        loop: false,
        pagination: {
          el: ".swiper-pagination-material",
          clickable: true,
        },
        breakpoints: {
          320: {
            autoHeight: true, 
          },
          767: {
            autoHeight: false,
          },
        }
      });
      materialSwiper.mousewheel.disable();
    }
  };
  slide1();

});




