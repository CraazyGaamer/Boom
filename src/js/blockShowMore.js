import {button, swiperWrapper} from './variables';

export let blockShowMore = button.addEventListener('click', function() {
        if ( button.textContent === 'Показать все' ) {
        swiperWrapper.classList.add('large');
        button.textContent = 'Скрыть';
        button.classList.add('arrows-top');
        } else {
          swiperWrapper.classList.remove('large');
          button.textContent = 'Показать все';
          button.classList.remove('arrows-top');
        }
      });

