(function (window, $, undefined) {
"use strict";

$('#damuro-goes-here').damuro({
    background:  'images/crane_squared_by_mudimba_and_draweverywhere.png',
    sandbox:     'html/deviantart_muro_sandbox.html',
    loadingText: 'This is a customized loading message...',
    splashCss: {
        color: '#33a'
        },
    autoload: false
    })
    .one('click', function () { $(this).damuro().open(); })
    .damuro()
    .done(function (data) {
            if (data.image && !/\'/.test(data.image)) {
                $('.inner').css('backgroundImage', "url('" + data.image + "')");
                $('html, body').animate({
                    scrollTop: $('.inner').offset().top
                    }, 200);
            }
            $(this).hide().damuro().remove();
        })
    .fail(function (data) {
            $(this).hide().damuro().remove();
            if (data.error) {
                $('body').append('<p>All aboard the fail whale: ' + data.error + '.</p>');
            } else {
                $('body').append("<p>Be that way then, don't edit anything.</p>");
            }
        });

})(window, jQuery);
