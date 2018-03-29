// class Slider {
//   constructor(identifier, options){
//     this.childArray = []
//     this.className = identifier;
//     this.children = document.querySelector(identifier).childNodes;
//     this.length = this.getChildren().length;
//     this.current = 0;
// }
//   getChildren() {
//     for(var i = 0; i<this.children.length-1; i++){
//       if(this.children[i].nodeName.toLowerCase() === 'div'){
//         this.childArray.push(this.children[i]);
//     }
//   }
//   return this.childArray;
// }
//
//   getLength() {
//     console.log(this.length);
//   }
// }
//
// const all = new Slider('.slider');
// all.getChildren();
// all.getLength();

let array = [];
let textArr = [];
let first = true;
const elem = document.querySelector('.slider-footer').childNodes;
for (let i = 0; i<elem.length-1; i++){
  if(elem[i].nodeName.toLowerCase() === 'div'){
    array.push(elem[i]);
  }
}

const text = document.querySelector('.slide-text').childNodes;
for (let j = 0; j<text.length-1; j++){
  if(text[j].nodeName.toLowerCase() === 'div'){
    textArr.push(text[j]);
  }
}

console.log(textArr);
$('.slider').slick({
  autoplay:true,
  dots: false,
  speed: 500,
  swipe: false
});

array.forEach(div => {
  div.classList.add('notransition');
})

textArr.forEach(div => {
  div.classList.add('notransition');
})

array[0].classList.add('toGreen');
textArr[0].classList.add('toWhite');

$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      array[nextSlide].classList.add('toGreen');
      textArr[nextSlide].classList.add('toWhite');
      array[currentSlide].classList.remove('toGreen');
      textArr[currentSlide].classList.remove('toWhite');
   });
