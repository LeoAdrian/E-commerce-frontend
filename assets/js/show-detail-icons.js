(function(trigger, target, ps){
  trigger.forEach(el => {
    var [img,p,div] = el.children;
    toggleIcons('mouseenter','none','add',el,p,div);
    toggleIcons('mouseleave','block','remove',el,p,div);
  })

function toggleIcons(event,displayType,action,el,p,div){
  el.addEventListener(event, function(){
    p.style.display = displayType;
    if(action === 'add'){
      div.classList.add('details-icons');
    } else {
      div.classList.remove('details-icons');
    }
  })
}

})(document.querySelectorAll('.details'), document.querySelector('.hide-icons'), document.querySelector('.details p'))
