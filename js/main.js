
$(document).ready(function () {


    if ($(window).width() < 768) {

        $('#nav-footer h4, #nav-mobile h4').click(function () {
            var menuCol = $(this).parent('.col-nav-footer');

            $('.col-nav-footer').not(menuCol).removeClass('opened');

            if (!menuCol.hasClass('opened')) {
                menuCol.addClass('opened');
            } else {
                menuCol.removeClass('opened');
            }
        });
    }

    /*
     * MENU MOBILE
     */

    $('#mobile-menu-bt').click(function () {

        $('#nav-mobile').toggleClass('opened');
        $('body').toggleClass('mobile-opened');

    });



    /*
     * NAV SUPERIOR
     */

    $('#nav-principal .contenedor-sitio ul li a').click(function (e) {
        e.preventDefault();
        $('#sub-nav').toggleClass('opened');
    });

    $('#sub-nav-close').click(function () {
        $('#sub-nav').removeClass('opened');
    });



    /*
     * CATEGORIAS NOTICIAS
     */

    $('.categoria-noticias h4').click(function () {

        var menuCol = $(this).parent('.categoria-noticias');

        $('.categoria-noticias').not(menuCol).removeClass('opened');

        if (!menuCol.hasClass('opened')) {
            menuCol.addClass('opened');
        } else {
            menuCol.removeClass('opened');
        }

    });

});
