import {blurArea} from './variables';

export let showMessageSend = document.getElementById('message').addEventListener('click', function() {
        
          document.querySelector('.message-send').classList.add('call-order--visible');
          blurArea.classList.add('blur-area--visible');
        
      });    

export let showMessageSend1 = document.getElementById('message-1').addEventListener('click', function() {
        
          document.querySelector('.message-send').classList.add('call-order--visible');
          blurArea.classList.add('blur-area--visible');
        
      });