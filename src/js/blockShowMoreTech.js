import {buttonTech, swiperWrapperTech} from './variables';

export let blockShowMoreTech = buttonTech.addEventListener('click', function() {
        if ( buttonTech.textContent === 'Показать все' ) {
        swiperWrapperTech.classList.add('swiper-wrapper--large');
        buttonTech.textContent = 'Скрыть';
        buttonTech.classList.add('arrows-top');
        } else {
          swiperWrapperTech.classList.remove('swiper-wrapper--large');
          buttonTech.textContent = 'Показать все';
          buttonTech.classList.remove('arrows-top');
        }
      });