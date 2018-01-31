// {\rtf1}

$(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    
    if (scrollTop >= 100) {
      // $('#navbar').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('#navbar').removeClass('scrolled-nav');
    } 
    
  }); 

  $('#navBtn').click(function(){
  	$('.hero-head').addClass('showNav');
  	$(this).removeClass('showNav');

  });

  $(window).scroll(function(){
    var y = $(window).scrollTop();

    if (y <= 200) {
      $('body').addClass('.scrollTop');
    } else {
      $('body').removeClass('scrollTop');
    }
  });
});


$(function() {
  var slider = $(".slider"),
    slides = slider.find('li'),
    nav = slider.find('nav');

  slides.eq(0).addClass('current');

  nav.children('a').eq(0).addClass('current_dot');

  nav.on('click', 'a', function(event) {
    event.preventDefault();
    $(this).addClass('current_dot').siblings().removeClass('current_dot');
    slides.eq($(this).index()).addClass('current').removeClass('prev').siblings().removeClass('current');
    slides.eq($(this).index()).prevAll().addClass('prev');
    slides.eq($(this).index()).nextAll().removeClass('prev');
  });
});