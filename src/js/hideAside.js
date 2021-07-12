import {buttonClose, aside, blurArea} from './variables';

export let hideAside = buttonClose.addEventListener('click', function() {
          aside.classList.remove('aside--visible');
          blurArea.classList.remove('blur-area--visible');
          });