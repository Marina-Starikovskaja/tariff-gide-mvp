

const openStepBtn = document.querySelector('[data-action="open-step-2"]');
const closeStepBtn = document.querySelector('[data-action="close-modal"]');



openStepBtn.addEventListener('click', onOpenStep2);
closeStepBtn.addEventListener('click', onCloseStep);


function onOpenStep2() {
  document.body.classList.add('show-step');
}


function onAddStep() {
  document.body.classList.remove('show-step');
}

function onCloseStep(event) {
  if (event.currentTarget === event.target) {
    console.log('Клик на кнопку закрыть!!!!');
    onAddStep();
  }
}



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