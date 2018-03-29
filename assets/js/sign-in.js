(function (...values){
  let [triggerOpen, triggerClose, targetModal, targetContent,submit, ...inputs] = values;

// Slide down modal
  triggerOpen.addEventListener('click', function(){
    targetModal.classList.add('showModal');
    targetContent.classList.add('showModalContent');
});
// Close modal when icon is clicked
  triggerClose.addEventListener('click', function(){
    targetModal.classList.remove('showModal');
    targetContent.classList.remove('showModalContent');
    inputs.map(input => {
      input.style.borderColor = '#cbcbd2';
      input.value = "";
    })
  });

// Input validation
  inputs.map(input => {
    input.addEventListener('keypress', function(){
      input.style.borderColor = '#cbcbd2';
    })
  });

  submit.addEventListener('click', function(){
    inputs.map(input =>{
      if (input.value === '') {
        input.style.borderColor = 'red';
      } else {
        input.style.borderColor = '#cbcbd2';
      }
    })
});

})(document.querySelector('.loginBt'),document.querySelector('.modal-content .close-modal'),document.querySelector('.modal'),document.querySelector('.modal-content'), document.querySelector('.modal-content .submit-form'),document.querySelector('.modal-content .username'), document.querySelector('.modal-content .password'));
