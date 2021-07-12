import {blurArea} from './variables';

export let hideCallOrder = document.querySelector('.call-order__button').addEventListener('click', function() {
          document.querySelector('.call-order').classList.remove('call-order--visible');
          blurArea.classList.remove('blur-area--visible');
          });