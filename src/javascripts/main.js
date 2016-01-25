$(document).on('ready', function () {
    var menu = $('#menu');
    $('#fullpage').fullpage({
        anchors: ['home', 'who_is','our_services', 'our_tech', 'our_startups', 'hit_system', 'massajor', 'wow-foto', 'why_litslink', 'contact_us'],
        menu: '#menu',
        paddingTop: 50,
        paddingBottom: 30,
        fixedElements: '.header'
    });
    $('button.navbar-toggle').on('click', function () {
        menu.toggleClass('menu-visible');
    });
});