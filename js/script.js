$(document).ready(function(){
    $('ul.tabs').tabs();
    $('.carousel').carousel({fullWidth:false,});
    window.setInterval(function(){$('.carousel').carousel('next')},5000);
    
  });