'use strict';

// TODO: open the modal
// TODO: close the modal in three ways: pressing the close button, click on overlay, press esc
// TODO: refactor code: use the same function in multiple event listeners.

// store the selection into a variable for easier use later in the code.
// NOTE: we might use the same name as the class names, to make it easy to understand what they are.
const buttonsOpenModal = document.querySelectorAll('.show-modal');
const buttonCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

// we can iterate over each element in NodeList like this
for (let i = 0; i < buttonsOpenModal.length; i++) {
  console.log(buttonsOpenModal[i], buttonsOpenModal[i].textContent);
}

// working with class
// open the modal: attach the event handler to each button, then call the open modal function
const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < buttonsOpenModal.length; i++) {
  buttonsOpenModal[i].addEventListener('click', showModal);
}

// close the modal 1: by pressing the close button
buttonCloseModal.addEventListener('click', closeModal);

// close the modal 2: by clicking on an overlay
overlay.addEventListener('click', closeModal);

// close the modal 3: by pressing the esc key on the keyboard
// this is a global event so we're gonna call the function from the document object itself
// and then inspect the key in the generated event object
// which is passed into the function as an argument
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  console.log(modal.classList.contains('hidden'));
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
