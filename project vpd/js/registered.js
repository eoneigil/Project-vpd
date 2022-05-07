'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const plus = document.querySelector('.plus'),
          popUp = document.querySelector('.pop_up'),
          popUpClose = popUp.querySelector('.pop_up_close');

    plus.addEventListener('click', ()=> {
        popUp.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    popUpClose.addEventListener('click', ()=> {
        popUp.style.display = 'none';
        document.body.style.overflow = '';
    });
});