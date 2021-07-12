import {blurArea} from './variables';

export let showCallOrder = document.getElementById('phone').addEventListener('click', function() {
        
          document.querySelector('.call-order').classList.add('call-order--visible');
          blurArea.classList.add('blur-area--visible');
        
      });

export let showCallOrder1 = document.getElementById('phone-1').addEventListener('click', function() {
        
          document.querySelector('.call-order').classList.add('call-order--visible');
          blurArea.classList.add('blur-area--visible');
        
      });