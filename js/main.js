/* Calc Slider Height */


let upper  = document.querySelector('.upper-bar'),
    nav    = document.querySelector('.navbar'),
    slider = document.querySelector('.slider'),
    winH   = window.innerHeight,
    getH   = (winH-(upper.offsetHeight+nav.offsetHeight)),
    carousel1 = document.querySelector('.carousel-one'),
    carousel2 = document.querySelector('.carousel-two'),
    carousel3 = document.querySelector('.carousel-three');
slider.style.height =`${getH}px`;
carousel1.style.height=`${getH}px`;
carousel2.style.height=`${getH}px`;
carousel3.style.height=`${getH}px`;

/* Calc Slider Height */

/* Featured Work Shuffle */
/*let shuffle = document.querySelectorAll('.featured-work ul li');

shuffle.forEach(li =>{
                
    li.addEventListener('click',function(){
        
        shuffle.forEach(liac => liac.classList.remove('active'));
        this.classList.add('active');
     
    });
                
});*/

let ul = document.querySelector('.featured-work ul');
let li = document.querySelectorAll('.featured-work ul li');

li.forEach(el =>{
    
   el.addEventListener('click',()=>{
                       
      ul.querySelector('.active').classList.remove('active');    
    el.classList.add('active');
  });
    
});



/* Featured Work Shuffle */