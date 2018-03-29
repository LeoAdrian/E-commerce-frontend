(function(){
  let input = document.querySelector('.ll input');
  let hiddenContent = document.querySelector('.hidden');
  input.addEventListener('click',function(){
    hiddenContent.classList.toggle('contact');
  })

    document.querySelector('body').addEventListener('click',function(ev){
      if(ev.target.nodeName.toLowerCase() !== 'input'){
        hiddenContent.classList.remove('contact');
      }
    })
})();
