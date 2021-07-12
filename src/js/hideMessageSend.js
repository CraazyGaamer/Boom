import {blurArea} from './variables';

export let hideMessageSend = document.querySelector('.message-send__button').addEventListener('click', function() {
          document.querySelector('.message-send').classList.remove('call-order--visible');
          blurArea.classList.remove('blur-area--visible');
          });