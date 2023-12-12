 $(function () {
   $('.burger,.header__list').on('click',function () {
     $(this).toggleClass('burger--active');
     $('.header__list').toggleClass('header__list--active');
     });

  
  
   var mixer = mixitup('.works__wrapper');

});

$(".header__nav a").on("click", function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({ scrollTop: top }, 1100);
});


