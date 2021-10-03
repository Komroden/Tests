'use strict';
let addRequired = document.querySelector('.form__hidden')
let input = document.querySelector('.form__input_required')
input.addEventListener("focus", () => {
    addRequired.style.display = "block";
})

