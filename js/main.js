$(document).ready(function(){
    $('.carousel__inner').slick({
        speed:1200,
        adaptiveHeight:true,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow_left.jpg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow_right.jpg"</button>',
        responsive: [
            {
              breakpoint: 530,
              settings: {
                slidesToShow: 1,
		        slidesToScroll: 1,
                arrows: false,
                infinite: true,
                // dots: true,
                touchmove:false
              }
            }
        ]
    });

  });