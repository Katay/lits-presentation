$(document).on('ready', function() {
  var scrollingTime = 1000;
  var anchors = ['home', 'who_is', 'our_services', 'our_tech', 'our_startups', 'hit_system', 'massajor', 'wow-foto', 'why_litslink', 'contact_us'];
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
    afterLoad: function(anchorLink) {
      var text = texts[anchorLink];
      text && title.text(text);
      if (anchorLink === 'home') {
        $('.chevron').css({opacity: 0});
      } else {
        $('.chevron').css({opacity: 'initial'});
      };
    },
    onLeave: function(index, nextIndex, direction) {
      var time,
        anchorLink = anchors[nextIndex - 1],
        text = texts[anchorLink],
        selector = '.slide' + nextIndex,
        nextSlide = fpage.find(selector);
      if (text) {
        $body.removeClass('no-text');
      } else {
        $body.addClass('no-text');
        var str = title.text().replace(/./g, '&nbsp;');
        title.html(str);
        nextSlide.css('padding-top', '15vh');
      }
      if (selector === '.slide5') {
        if (direction === 'down') {
          time = scrollingTime * 0.85;
        } else {
          time = scrollingTime
        }
        setTimeout(function() {
          header.addClass('below');
        }, time);
      } else {
        header.removeClass('below');
      }
      showHeader(anchorLink === 'home');
    },
    fixedElements: '.header, .footer'
  });
  $('button.navbar-toggle').on('click', function() {
    //menu.toggleClass('menu-visible');
  });

  function showHeader(show) {
    if (show) {
      header.addClass('expanded');
    } else {
      header.removeClass('expanded');
    }
  }

  $('.header-logo, .chevron').mouseover(function() {
    $('.chevron').animate({
        top: '40px',
        opacity: 0
    },
    500);
  });
  $('.header-logo').mouseleave(function() {
    if (true) {} else{};
    $('.chevron').css({top: '2px'});
    $('.chevron').animate({
        opacity: 1
    },
    2000);
  });

  return;
  $window.on('scroll', function() {
    var y = window.scrollY || window.pageYOffset;
    showHeader(!y);
  });
});
