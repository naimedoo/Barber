let nav = document.getElementById('navigation');
let liens = document.getElementsByClassName('lienNav');
let Icon = document.getElementById('Icon');


window.onresize = colorHeader;
window.onload = colorHeader;

function colorHeader() { 
  let myWidth = window.innerWidth;
 


  window.onscroll = function() {

      if (myWidth >  768) {

  
       if (document.documentElement.scrollTop > 980) {
           nav.style.background = '#373737';
           liens[0].style.color = 'white'; 
           liens[1].style.color = 'white'; 
           liens[2].style.color = 'white'; 
           liens[3].style.color = 'white'; 


         } else {
           nav.style.background = '#f0EAd6';
           liens[0].style.color = '#373737'; 
           liens[1].style.color = '#373737'; 
           liens[2].style.color = '#373737'; 
           liens[3].style.color = '#373737'; 
         }
     

  } else  {
           nav.style.background = '#f0EAd6';
           liens[0].style.color = '#373737'; 
           liens[1].style.color = '#373737'; 
           liens[2].style.color = '#373737'; 
           liens[3].style.color = '#373737'; 
  }


  } 

}


function toggleNav()  {
  if (nav.className === "") {
    
    nav.className += "responsive";

  } else {
    nav.className = "";

  }

}

$('html').click(function () {

  if(nav.className += "responsive") {
    nav.className = "";
  }
});
  
$('#icon').click(function (event) {
  event.stopPropagation();
});

/* Smooth Scroll */

$('arrow').click(function (){
  $('html, body').animate({
    scrollTop:$('#section-about').offset().top - 50
  },
     'slow')


})



$('.lienNav:nth-child(1)').click(function (){
  $('html, body').animate({
    scrollTop: $('#Accueil').offset().top + 50
  },
     'slow')


})

$('.lienNav:nth-child(2)').click(function (){
  $('html, body').animate({
    scrollTop: $('#section-about').offset().top - 50
  },
     'slow')


})

$('.lienNav:nth-child(3)').click(function (){
  $('html, body').animate({
    scrollTop: $('#tarifs').offset().top - 50
  },
     'slow')


})

$('.lienNav:nth-child(4)').click(function (){
  $('html, body').animate({
    scrollTop: $('#contact').offset().top - 50
  },
     'slow')


})