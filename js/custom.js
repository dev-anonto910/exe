$(function(){

/*======venobox js=======*/
$('.venobox').venobox(); 



/*=========slick.slide*/

$('.comment-main1').slick({
    slidesToShow: 1,
    slidesToUp: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade:true,
    arrows:false,
  });

$('.comment-main2').slick({
    slidesToShow: 1,
    slidesToUp: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade:true,
    arrows:false,
    dots:true,
  });
$('.blog-main').slick({
    slidesToShow: 2,
    slidesToScroll:2,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows:false,
    dots:true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 5,
          
        }
      },
      
  
    ]
  });

$('.logo-slide').slick({
    slidesToShow: 5,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows:true,
    prevArrow:".ll",
    nextArrow:".rl",
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      },
      
      
  
    ]
  });


});