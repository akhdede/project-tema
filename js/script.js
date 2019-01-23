var sc = $.noConflict(); // scroll animation

sc(document).ready(function() {
  sc(".page-scroll").click(function(e) {
    var tujuan = sc(this).attr("href");

    var elemenTujuan = sc(tujuan);

    sc("#home").animate({
        scrollTop: elemenTujuan.offset().top - 60
      }, 1250, "swing");

    e.preventDefault();
  });

  sc(window).scroll(function() {
    var y = sc(this).scrollTop();

    if(y > sc('#blog').offset().top - 100) {
      sc("header nav").fadeIn(function() {
        sc(this).addClass('navbar navbar-expand-lg navbar-dark bg-dark fixed-top');
      });
    }
    else {
      sc("header nav").fadeIn(function() {
        sc(this).removeClass('bg-dark fixed-top');
      });
    }
  });
});
