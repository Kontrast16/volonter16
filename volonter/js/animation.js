function slowScroll(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 500); 
    }
    $(document).on("scroll", function() {
    if($(window).scrollTop() === 0)
    $("header").removeClass("fixed");
    else
    $("header").attr("class", "fixed");
    });
    var element = document.getElementById('phone');
    var maskOptions = {
        mask: '+7(000)000-00-00',
        lazy: false
    } 
    