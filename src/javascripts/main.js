$(document).on('ready', function () {
    var anchors = ['home', 'who_is','our_services', 'our_tech', 'our_startups', 'hit_system', 'massajor', 'wow-foto', 'why_litslink', 'contact_us'];
    var texts = {
        home: false,
        who_is: 'Who is litslink',
        our_services: 'Our Services',
        our_tech: 'Our Core Tech',
        our_startups: 'Startups we developed',
        hit_system: 'Success stories',
        massajor: false,
        'wow-foto': false,
        why_litslink: 'reasons to choose litslink',
        contact_us: 'Contact us'
    };
    var title = $('.page-title span');
    var menu = $('#menu'),
        header = $('.header'),
        background = $('.background'),
        $window = $(window),
        $body = $('body'),
        fpage = $('#fullpage');
    fpage.fullpage({
        anchors: anchors,
        menu: '#menu',
        paddingTop: 250,
        paddingBottom: 30,
        responsiveHeight: 750,
        afterLoad: function (anchorLink) {
            var section = $(this);
            showHeader(anchorLink === 'home');
            var text = texts[anchorLink];
            if (text) {
                title.text(text);
                $body.removeClass('no-text');
               // title.removeClass('invisible');
            } else {
                $body.addClass('no-text');
                //title.addClass('invisible');
                section.css('padding-top', '150px');
            }
        },
        //scrollBar: true,
        //resize: true,
        fixedElements: '.header, .footer'
    });
    $('button.navbar-toggle').on('click', function () {
        //menu.toggleClass('menu-visible');
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