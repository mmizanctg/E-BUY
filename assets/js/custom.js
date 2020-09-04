$(function(){
   'use strict'
   //Menu JS Start
   var menuTopOffset = $('#myNav').offset().top
   $(window).on('scroll',function(){
      var scrollSize =$(window).scrollTop()
      if(scrollSize >menuTopOffset){
         $('#myNav').addClass('stickymenu')
      }else{
         $('#myNav').removeClass('stickymenu')
      }

    //scroll button js start
      if(scrollSize < 1000){
         $('.bottomTop').hide(600)
      }else{
         $('.bottomTop').show(600) 
      }
   })
   //scroll button js end

   //scroll click button js start
   $('.bottomTop').on('click',function(){
      $('html,body').animate({
         scrollTop:0
      },1000)
   })
   //scroll click button js end
   //Menu JS End
   
   //Banner Slick js start
   $('.banner_slider').slick({
      infinite: true,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
      prevArrow:'<i class="fas fa-angle-left banner_slider_left"></i>',
      nextArrow:'<i class="fas fa-angle-right banner_slider_right"></i>'
   });
   //Banner Slick js end

   

   //Featured filterizer

   $('.featured_menu ul li').click(function () {
      $('.featured_menu ul li').removeClass('active');
      $(this).addClass('active');

      var selector = $(this).attr('data-filter');
      $('.featured_item_container').isotope({
          filter: selector
      });
      return false;
  });
   
   //Wow Js Code Start
   new WOW().init();
   //Wow Js Code End

   //Testimonial Slick js start
   $('.testimonial_slick').slick({
      infinite: true,
      slidesToShow: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
      prevArrow:'<i class="fas fa-angle-left testimonial_slider_left"></i>',
      nextArrow:'<i class="fas fa-angle-right testimonial_slider_right"></i>'
   });
   //Testimonial Slick js end

   //Venobox for work section
   $('.venobox').venobox({
      spinner:'wandering-cubes',
      spinColor:'#DE4644',
      titleattr: 'data-title',
   });
})