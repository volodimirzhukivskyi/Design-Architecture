$(document).ready(function f() {
    $('a[href^="#"]').click(function () {
      let target = $(this).attr('href')  ;
      $('html,body').animate({
          scrollTop:$(target).offset().top
      },2000);
      return false

    })
    $('.hide-news-btn').click(function () {
        $('.header-news').slideToggle();
        $('.hot-news').slideToggle();
        $('.span-btn').toggle();


    })

})
function backTop() {
    let button=$('.top-button');
    $(window).on('scroll',()=>{
        if($(this).scrollTop()> window.screen.height){
            button.show()
        }else {
            button.hide();
        }
    } )
}
backTop();

console.log(window.screen.height);


