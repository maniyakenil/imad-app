console.log('Loaded!');

//change the text of the main-text div
var element = document.getElementById('main-text');
   
element.innerHTML=('New value');

 //move the image
 var element = document.getElementById('madi');
 var marginleft = 0;
 function moveRight() {
     marginleft = marginleft + 1;
     img.style.marginLeft = marginLeft + 'px';
     
 }
 img.onclick = function () {
     var interval = setInterval(moveRight, 50);
     
 };
 