
$(document).ready(function () {




    /*
     * INCLUDE NAV 
     */


    $('#nav-principal-layout').load('layout/nav-principal.html', function () {
        console.log('loaded')

        /*
         * NAV SUPERIOR
         */

        $('#nav-principal .contenedor-sitio ul li a').on('click', function (e) {

            var item = $(this);

            var left = item.position().left + ((item.width() / 2) + 20);

            var itemMenu = $(this).attr('data-href-menu');
            $('#nav-principal .contenedor-sitio ul li a').removeClass('activo');
            //item.addClass('activo');

            $('#nav-principal .triangulo').removeClass().addClass('triangulo ' + itemMenu).css('left', left);

            if (itemMenu !== 'noticias') {
                e.preventDefault();
                $('#sub-nav').removeClass();
                $('#sub-nav').addClass('opened ' + itemMenu);
                $('.sub-nav-menu').removeClass('menu-visible');
                $('#sub-nav-' + itemMenu).addClass('menu-visible');
                e.stopPropagation();
            }
        });

        $('#sub-nav-close , #nav-principal').on('click', function () {
            $('#nav-principal .contenedor-sitio ul li a').removeClass('activo');
            $('#sub-nav').removeClass('opened');
            $('#nav-principal .triangulo').removeClass().addClass('triangulo')
        });


        /*
         * MENU MOBILE
         */

        $('#mobile-menu-bt').on('click', function () {
            if ($('#nav-mobile').hasClass('opened')) {

                animateMenuMobileHide();
                setTimeout(function () {
                    $('#nav-mobile').removeClass('opened');
                }, 500);

                $('body').removeClass('mobile-opened');
            } else {
                $('#nav-mobile').addClass('opened');
                animateMenuMobileShow();
                $('body').addClass('mobile-opened');

            }
//            $('#nav-mobile').toggleClass('opened');
//            $('body').toggleClass('mobile-opened');
        });


        $('#nav-mobile').click(function () {

            animateMenuMobileHide();
            setTimeout(function () {
                $('#nav-mobile').removeClass('opened');
            }, 500);

            $('body').removeClass('mobile-opened');

        })
        function animateMenuMobileShow() {
            $('#nav-mobile-bg .col-nav-footer').each(function (i) {
                var t = $(this);
                setTimeout(function () {
                    t.addClass('visible');
                }, (i + 1) * 100);
            });
        }
        function animateMenuMobileHide() {
            $($('#nav-mobile-bg .col-nav-footer').get().reverse()).each(function (i) {
                var t = $(this);
                setTimeout(function () {
                    t.removeClass('visible');
                }, (i + 1) * 100);
            });
        }
    });


    /*
     * INCLUDE FOOTER
     */


    $('#footer-layout').load('layout/footer.html', function () {

        /*
         * NAV FOOTER
         */

        if ($(window).width() < 768) {
            $('#nav-footer h4, #nav-mobile h4').click(function (e) {
                var menuCol = $(this).parent('.col-nav-footer');
                $('.col-nav-footer').not(menuCol).removeClass('opened');

                if (!menuCol.hasClass('opened')) {
                    menuCol.addClass('opened');
                } else {
                    menuCol.removeClass('opened');
                }
                e.stopPropagation();
            });
        }
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


    /*
     * SLIDER DETALLE NOTICIA
     */

    $('.contenedor-slides').slick({prevArrow: $('.anterior'), nextArrow: $('.siguiente'), dots: true});

});
