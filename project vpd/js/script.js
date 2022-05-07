'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const modalOpen = document.querySelectorAll('[data-modal-open]'),
          modalOpenRegister = document.querySelectorAll('[data-modal-register]'),
          modal = document.querySelectorAll('.pop_up'),
          modalClose = document.querySelectorAll('.pop_up_close'),
          track = document.querySelector('.button_red');

    
    // Открытие модального окна 
    function openModal (index) {
        modal[index].style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    modalOpen.forEach(index =>  {
        index.addEventListener('click', () => {
            openModal(1);
            modal[0].style.display = 'none';
        });
    });

    modalOpenRegister.forEach(index =>  {
        index.addEventListener('click', () => {
            openModal(0);
            modal[1].style.display = 'none';
        });
    });

    // Закрытие модального окна
    modalClose.forEach(btn => {
        btn.addEventListener('click', () => {
            modal[0].style.display = 'none';
            modal[1].style.display = 'none';
            document.body.style.overflow = '';
        });
    });

    // Отслеживание
    track.addEventListener('click', ()=>{
        track.classList.toggle("show");
    });
});