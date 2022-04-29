'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const redact = document.querySelector('.button_red'),
        popUp = document.querySelector('.pop_up'),
        profile = document.querySelector('.profile'),
        save = popUp.querySelector('.button_save'),
        nameProfile = profile.querySelector('[data-modal-name]'),
        emailProfile = profile.querySelector('[data-modal-email]'),
        numberProfile = profile.querySelector('[data-modal-number]'),
        closePopUp = document.querySelector('.pop_up_close');

    // Открытие окна для редактирования
    redact.addEventListener('click', () => {
        popUp.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    function redactClick () {
        let nameProfileRedact = popUp.querySelector('[data-modal-name]').value,
            emailProfileRedact = popUp.querySelector('[data-modal-email]').value,
            numberProfileRedact = popUp.querySelector('[data-modal-number]').value;

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
            close();
            testName = false;
            testEmail =false;
            testNumber =false;
        }
    }

    save.addEventListener('click', () => {
        redactClick ();
    });

    // Закрытие окна для редактирования
    function close () {
        popUp.style.display = 'none';
        document.body.style.overflow = '';
    }
    closePopUp.addEventListener('click', close);
});