$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  $('.btn-andriod').click(function () {
      var ua = window.navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == 'micromessenger'){
          var shade = document.getElementById('shade')
          shade.style.display = 'block'
      }else {
         // location.href='https://gitee.com/daidaijie/Syllabus-2.0.0/raw/master/syllabus%202.0.2.apk'
         //  $(location).attr('href', 'http://www.jb51.net');
          window.location='https://gitee.com/daidaijie/Syllabus-2.0.0/raw/master/syllabus%202.0.2.apk'
      }
  })
});