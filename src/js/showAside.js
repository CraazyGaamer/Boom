import {buttonBurger, aside, blurArea} from './variables';

export let showAside = buttonBurger.addEventListener('click', function() {
        
          aside.classList.add('aside--visible');
          blurArea.classList.add('blur-area--visible');
        
      });