import {blurArea, aside} from './variables';

export let hideAll = blurArea.addEventListener('click', function() {
          aside.classList.remove('aside--visible');
          document.querySelector('.call-order').classList.remove('call-order--visible');
          document.querySelector('.message-send').classList.remove('call-order--visible');
          blurArea.classList.remove('blur-area--visible');
          });