var height = $(window).height();

$(function() {
  var links = $("a").click(function() {
    links.removeClass("current");
    $(this).addClass("current");
  });
});

const anchor_offsets = {
  home: 0,
  reel: $("#reel-div").offset().top - height * 0.3,
  contact: $("#contact-div").offset().top - height * 0.3
};

$(window).on("scroll", function() {
  var curr_offset = $(window).scrollTop();
  console.log(curr_offset);
  console.log("reel: " + anchor_offsets["reel"]);

  for (var i = 0; i < Object.keys(anchor_offsets).length; i++) {
    let key = Object.keys(anchor_offsets)[i];
    console.log(window.location.hash);
    if (curr_offset >= anchor_offsets[key]) {
      $("a").removeClass("current");
      $("." + key).addClass("current");
    }
  }
});
