$(window).scroll(function() {
    var $height = $(window).scrollTop();
    if ($height > 250) {
        $('.navbar').addClass('bg-white navbar-light');
        $('.navbar').removeClass('bg-transparent navbar-dark');
        $('.logoimg').css("filter","none");

    } else {
        $('.navbar').removeClass('bg-white navbar-light');
        $('.navbar').addClass('bg-transparent navbar-dark');
        $('.logoimg').css("filter","drop-shadow(2px 4px 10px black)");
    
} 
});