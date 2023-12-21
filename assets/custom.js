$(document).ready(function () {
    $(".logo-list").slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
    })
   
    $(".case_minus").click(function() {
      if(parseInt($(this).closest(".case-quantity").find(".case_val").val()) == 1){
        $(this).closest(".cart-item__quantity").find(".remove").click()
      }
      else {
        $(this).closest(".case-quantity").find(".case_val").val(parseInt($(this).closest(".case-quantity").find(".case_val").val()) - 1)
        $(this).closest(".cart-item__quantity").find(".quantity-down").click()
      }      
    })

    $(".case_plus").click(function() {
      console.log("up")
      $(this).closest(".case-quantity").find(".case_val").val(parseInt($(this).closest(".case-quantity").find(".case_val").val()) + 1)
      $(this).closest(".cart-item__quantity").find(".quantity-up").click()
    })
});