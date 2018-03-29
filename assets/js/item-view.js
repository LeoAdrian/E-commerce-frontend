(function(...values){
  let [grid, list, shoes, shoe, listDetails, ps, details,div] = values;

  grid.classList.add('active-view');

  list.addEventListener('click',function(){
    details.forEach(detail => {
      detail.classList.add('hide-icons');
    })

    grid.classList.remove('active-view');
    shoes.classList.add('list-layout');
    this.classList.add('active-view');
    changeDisplay('add');
  })

  grid.addEventListener('click',function(){
    details.forEach(detail => {
      detail.classList.remove('hide-icons');
    })

    list.classList.remove('active-view');
    shoes.classList.remove('list-layout');
    this.classList.add('active-view');
    changeDisplay('remove');
  })

  function changeDisplay(type){
    if(type === 'add'){
    listDetails.forEach(detail => {
      detail.classList.add('list-details-show');
    })
  } else if (type === 'remove') {
    listDetails.forEach(detail => {
      detail.classList.remove('list-details-show');
    })
  }
  }

})(document.querySelector('.grid-view'), document.querySelector('.list-view'), document.querySelector('.shoes'), document.querySelector('.black-gold'), document.querySelectorAll('.list-details'), document.querySelectorAll('.details p'), document.querySelectorAll('.details'), document.querySelectorAll('.details div'));
