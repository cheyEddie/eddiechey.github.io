$(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky')
        } else{
            $('.navbar').removeClass('sticky')
        }
    })
    // Toggle menu
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active')
        $('.menu-btn i').css('color','red')
    })
})