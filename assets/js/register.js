(function (...values){
  let [triggerOpen, triggerClose, targetModal, targetContent, submit, ...inputs] = values;
  triggerOpen.addEventListener('click', function(){
    targetModal.classList.add('showModal');
    targetContent.classList.add('showModalContent');
});
  triggerClose.addEventListener('click', function(){
    targetModal.classList.remove('showModal');
    targetContent.classList.remove('showModalContent');
    inputs.map(input => {
      input.style.borderColor = '#cbcbd2';
      input.value = "";
    })
});

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

})(document.querySelector('.registerBt'),document.querySelector('.register .close-modal'),document.querySelector('.modal'),document.querySelector('.register'), document.querySelector('.register .submit-form'),document.querySelector('.register .username'), document.querySelector('.register .password'), document.querySelector('.register .cpassword'), document.querySelector('.register .email'));
