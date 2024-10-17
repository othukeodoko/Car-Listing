const menuBtn = document.querySelector('.menu');
const  panel = document.querySelector('.filter');
const  panelStyles=window.getComputedStyle(panel);
        // Panel is an element we place clippath property on - Filter
menuBtn.addEventListener('click',()=>{
    //  console.log('clicked')
    if(panelStyles.getPropertyValue('clip-path') ==='circle(0% at 100% 0%)'){
        panel.style.clipPath='circle(100% at 50% 50%)'
    }else{
        panel.style.clipPath='circle(0% at 100% 0%)'
    }
})
// menuBtn.addEventListener('click', () => {
//     // panel.classList.toggle('filter-open');
//     if (panelStyles.getPropertyValue('clip-path') === 'circle(0% at 100% 0%)') {
//       panel.style.clipPath = 'circle(100% at 50% 50%)';
//     } else {
//       panel.style.clipPath = 'circle(0% at 100% 0%)';
//     }
//   });
  
  
document.addEventListener('mouseup',(event)=>{
    if(panelStyles.getPropertyValue('clip-path')==='circle(100% at 50% 50%)'){
        if(!panel.contains(event.target))
            panel.style.clipPath='circle(0% at 100% 0%)'
    }
})
// document.addEventListener('mouseup', (event) => {
//     if (!panel.contains(event.target) && panelStyles.getPropertyValue('clip-path') === 'circle(100% at 50% 50%)') {
//       panel.style.clipPath = 'circle(0% at 100% 0%)';
//     }
//   });

const hearts = document.querySelectorAll('.fa');
// function changeHeart(x){
//     x.ClassList.Toggle('fa')
// }

hearts.forEach(heart => {
    heart.addEventListener('click', () => {
      heart.classList.toggle('fa-heart');
      heart.classList.toggle('fa-heart-o');
    });
  });