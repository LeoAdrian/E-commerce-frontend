(function(...params){
  let [trigger,target,err,succ, show] = params;
  trigger.addEventListener('click', function(ev){
    ev.preventDefault();
    let letters = target.value.split('');
    let count = 0;
    letters.map(letter => {
      if(letter === '@'){
        count++;
      }
    })
    // Error msg to show
    const ERR_MSG =  'Enter a valid mail';
    // Split input value into words to check extension
    let words = target.value.split('.');
    let ext = /com|ro/i;
    // Setting a boolean for error
    let found = false;
    // Validation returns true if extension is found
    let validation = words[words.length-1].match(ext);
    if(validation){
    validation.map (prop => {
        found = true;
    })
  }
  // If '@' is more than once or extension is false or both
  if(count !== 1 && !found || count !== 1 || !found || words[0] === '@') {
    target.style.border = '1px solid red';
    err.style.opacity = 1;
  } else {
    console.log(`Email was successfully registered: ${target.value}`)
    // Send email to server
    fetch('http://localhost:5000/emails', {
              method: 'POST',
              body: JSON.stringify([{email: target.value}]),
              headers: new Headers({
                'Content-Type': 'application/json'
              })
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log(response))

    // Styling for error msg
    target.style.border = 'none';
    err.style.opacity = 0;
    target.value = '';
    succ.style.opacity = 1;

    // Remove success msg after 2s;
    setTimeout(function() {
      succ.style.opacity = 0;
    },2000);
  };
  })
})(document.querySelector('.newsletter-input button'), document.querySelector('.newsletter-input input'), document.querySelector('.newsletter-input .error-msg'),document.querySelector('.newsletter-input .success-msg'), document.querySelector('.newsletter-input .show-msg'));
