var height = $(window).height();

$(function () {
  var links = $("a").click(function () {
    links.removeClass("current");
    $(this).addClass("current");
  });
});

const anchor_offsets = {
  home: 0,
  reel: $("#reel-div").offset().top - height * 0.3,
  resume: $("#resume-div").offset().top - height * 0.3,
  // gallery: $("#gallery-div").offset().top - height * 0.3,
  contact: $("#contact-div").offset().top - height * 0.3
};

$(window).on("scroll", function () {
  var curr_offset = $(window).scrollTop();
  //console.log(curr_offset);

  for (var i = 0; i < Object.keys(anchor_offsets).length; i++) {
    let key = Object.keys(anchor_offsets)[i];
    console.log(curr_offset);
    console.log("gallery div" + anchor_offsets["gallery"]);
    if (curr_offset >= anchor_offsets[key]) {
      $("a").removeClass("current");
      $("." + key).addClass("current");
    }
  }

  if (curr_offset > (height - 50)) {
    document.getElementById("title-nav").style.opacity = 1;
    document.getElementById("navbar-bg").style.opacity = 1;
  }
  else {
    document.getElementById("title-nav").style.opacity = 0;
    document.getElementById("navbar-bg").style.opacity = 0;
  }

  if (curr_offset > (height / 2)) {
    document.getElementById("title-nav").style.opacity = 1;
    document.getElementById("navbar-bg").style.opacity = 1;
  }
  else {
    document.getElementById("title-nav").style.opacity = 0;
    document.getElementById("navbar-bg").style.opacity = 0;
  }

});