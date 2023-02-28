/*
 * 1. Открыть и закрыть по кнопке
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */


const openStepBtn = document.querySelector('[data-action="open-step-2"]');
const closeStepBtn = document.querySelector('[data-action="close-modal"]');
// const step2 = document.querySelector('[data-action="step2"]');
  // backdrop: document.querySelector('.js-backdrop'),


openStepBtn.addEventListener('click', onOpenStep2);
closeStepBtn.addEventListener('click', onCloseStep);

// refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenStep2() {
  // window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-step');
  // document.body.classList.add('hide-box')
}


function onAddStep() {
  // window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-step');
  // document.body.classList.remove('hide-box');
}

function onCloseStep(event) {
  if (event.currentTarget === event.target) {
    console.log('Клик на кнопку закрыть!!!!');
    onAddStep();
  }
}

// function onEscKeyPress(event) {
//   const ESC_KEY_CODE = 'Escape';
//   const isEscKey = event.code === ESC_KEY_CODE;

//   if (isEscKey) {
//     onCloseModal();
//   }
// }


// setOutput();





const values = [ '5' ];
const select = document.querySelector('.drop-list-type');

select.addEventListener('change', function() {
  document.querySelector('.box-step-1').hidden = !values.includes(this.value);
  
});

select.addEventListener('change', function() {
  document.querySelector('.box-min').hidden = values.includes(this.value);
  
});

select.addEventListener('change', function() {
  document.querySelector('.box-max').hidden = values.includes(this.value);
  
});

select.addEventListener('change', function() {
  document.querySelector('.form-field-tariff').hidden = values.includes(this.value);
  
});

select.addEventListener('change', function() {
  document.querySelector('.add-step').hidden = !values.includes(this.value);
  
});


select.dispatchEvent(new Event('change'));