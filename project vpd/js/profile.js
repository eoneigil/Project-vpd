'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const redact = document.querySelector('.button_red'),
        popUpRedact = document.querySelector('[data-redact]'),
        profile = document.querySelector('.profile'),
        save = popUpRedact.querySelector('.button_save'),
        nameProfile = profile.querySelector('[data-modal-name]'),
        emailProfile = profile.querySelector('[data-modal-email]'),
        numberProfile = profile.querySelector('[data-modal-number]'),
        closePopUp = popUpRedact.querySelector('.pop_up_close');

    // Открытие модального окна
    function openModal (selector) {
        selector.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    redact.addEventListener('click', () => {
        openModal(popUpRedact);
    });

    function redactClick () {
        let nameProfileRedact = popUpRedact.querySelector('[data-modal-name]').value,
            emailProfileRedact = popUpRedact.querySelector('[data-modal-email]').value,
            numberProfileRedact = popUpRedact.querySelector('[data-modal-number]').value;

        let testName = false,
            testEmail =false,
            testNumber =false;
        // Проверка имени
        if (nameProfileRedact != "") {
            if (nameProfileRedact == null || nameProfileRedact == " ") {
                alert('Введите имя');
            } else {
                nameProfile.textContent = nameProfileRedact;
                testName = true;
            }
        } else {
            testName=true;
        }
        // Проверка email
        let regexEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (emailProfileRedact != "") {
            if (regexEmail.test(emailProfileRedact)) {
                emailProfile.innerHTML = `${emailProfileRedact}<hr size=3px width=300px align="left">`;
                testEmail = true;
            } else {
                alert('Некорректный email');
            }
        } else {
            testEmail=true;
        }
        //  проверка номера телефона
        let regexNumber = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        if (numberProfileRedact != "") {
            if (regexNumber.test(numberProfileRedact)) {
                numberProfile.innerHTML = `${numberProfileRedact}<hr size=3px width=300px align="left">`;
                testNumber = true;
            } else {
                alert('Номер телефона введен некорректно');
            }
        } else {
            testNumber=true;
        }
        if (testName, testEmail, testNumber == true) {
            close(popUpRedact);
            testName = false;
            testEmail =false;
            testNumber =false;
        }
    }

    save.addEventListener('click', () => {
        redactClick ();
    });

    // Закрытие модального окна
    function close (selector) {
        selector.style.display = 'none';
        document.body.style.overflow = '';
    }
    closePopUp.addEventListener('click', ()=>{
        close(popUpRedact);
    });

    //Создание нового поста
    const popUpNewPost = document.querySelector('[data-new-post-popUp]'),
          newPopUpClose = popUpNewPost.querySelector('.pop_up_close'),
          btnNewPost = document.querySelectorAll('[data-new-post]');
    
    btnNewPost.forEach(btn=>{
        btn.addEventListener('click', ()=> {
            openModal(popUpNewPost);
        });
    });

    newPopUpClose.addEventListener('click', ()=> {
        close(popUpNewPost);
    });
});