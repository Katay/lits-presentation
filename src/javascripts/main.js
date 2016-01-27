$(document).on('ready', function () {
    var menu = $('#menu'),
        header = $('.header'),
        $window = $(window);
    $('#fullpage').fullpage({
        anchors: ['home', 'who_is','our_services', 'our_tech', 'our_startups', 'hit_system', 'massajor', 'wow-foto', 'why_litslink', 'contact_us'],
        menu: '#menu',
        paddingTop: 100,
        paddingBottom: 30,
        responsiveHeight: 750,
        afterLoad: function (anchorLink) {
            showHeader(anchorLink !== 'home')
        },
        //scrollBar: true,
        //resize: true,
        fixedElements: '.header, .footer'
    });
    $('button.navbar-toggle').on('click', function () {
        menu.toggleClass('menu-visible');
    });
    function showHeader (show) {
        if (show) {
            header.addClass('expanded');
        } else {
            header.removeClass('expanded');
        }
    }
    $window.on('scroll', function () {
        var y = window.scrollY || window.pageYOffset;
        showHeader(!y);
    });
});