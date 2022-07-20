$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1200,
    // adaptiveHeight:true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow_left.jpg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow_right.jpg"</button>',
    responsive: [{
      breakpoint: 530,
      settings: {
        arrows: false,
        infinite: true,
        dots: true,
        touchmove: false
      }
    }]
  });
  // ---------------------------------------------------
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  }

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');
  // ----------------------------------------------------------

  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn();
  });

  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #thanks, #order').fadeOut();
  });

  $('.button_catalog-item').on('click', function () {
    $('.modal__descr').text($('.catalog-item__subtitle', $(this).closest('.catalog-item')).text());
    $('.overlay, #order').fadeIn();
  });


  function validateForm(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: {
          required: true,
          checkMask: true
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Пожалуйста, введите минимум {0} cимвола")
        },
        phone: {
          required: "Пожалуйста, введите свой номер телефона",
          checkMask: "Введите полный номер телефона"
        },
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты"
        }
      }
    });
  }

  validateForm('#consul-form');
  validateForm('#consultation form');
  validateForm('#order form');

  jQuery.validator.addMethod("checkMask", function (value, element) {
    return /^.{4}[0-9]{3}.{2}[0-9]{3}.{1}[0-9]{2}.{1}[0-9]{2}$/.test(value);
  });

  $('input[name=phone]').mask("+7 (999) 999-99-99", {
    autoclear: false
  });
// ---------------------------------------------------


 $('form').submit(function (e) { 
    e.preventDefault();
    if (!$(this).valid()){
      return;
    }
    
    $(this).find('input').val('');
    $('#consultation, #order').fadeOut();
    $('.overlay, #thanks').fadeIn();
    
    
    $('form').trigger('reset');
  });



  // $('form').submit(function (e) { 
  //   e.preventDefault();
    

  //   if (!$(this).valid()){
  //     return;
  //   }

  //   $.ajax({
  //     type: "POST",
  //     url: "mailer/smart.php",
  //     data: $(this).serialize() 
  //   }).done(function(){
  //     $(this).find('input').val('');
  //     $('#consultation, #order').fadeOut();
  //     $('.overlay, #thanks').fadeIn();


  //     $('form').trigger('reset');
  //   });
  //   return false;
  // });

});