$(document).on('ready', function () {
    var scrollingTime = 700;
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
        paddingTop: '30vh',
        paddingBottom: 30,
        scrollingSpeed: scrollingTime,
        responsiveHeight: 580,
        afterLoad: function (anchorLink) {
//            showHeader(anchorLink === 'home');
            var text = texts[anchorLink];
            text && title.text(text);
        },
        onLeave: function (index, nextIndex, direction) {
            var time,
                text = texts[anchors[nextIndex - 1]],
                selector = '.slide' + nextIndex,
                nextSlide = fpage.find(selector);
            if (text) {
                $body.removeClass('no-text');
            } else {
                $body.addClass('no-text');
                var str = title.text().replace(/./g,'&nbsp;');
                title.html(str);
                nextSlide.css('padding-top', '15vh');
            }
            if (selector === '.slide5') {
                if (direction === 'down') {
                    time = scrollingTime*0.85;
                } else {
                    time = scrollingTime
                }
                setTimeout(function () {
                    header.addClass('below');
                }, time);
            } else {
                header.removeClass('below');
            }
        },
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
    return;
    $window.on('scroll', function () {
        var y = window.scrollY || window.pageYOffset;
        showHeader(!y);
    });
});