/*========================================================================
  Author: Christopher C. Huber
  Date:   02/13/2018
==========================================================================*/  

$(document).ready(function() {


  var relTop =
  "<nav role='Related Articles' class='table-of-contents'>" +
  "<p>RELATED ARTICLES</p>" +
  "<ul>";
var newLine4, el4, title4, link4;

$("body .rel-topic").each(function() {
  el4 = $(this);
  title4 = el4.text();
  link4 = el4.attr("href");
  newLine4 = "<li>" + "<a href='" + link4 + "'>" + title4 + "</a>" + "</li>";
  relTop += newLine4;
});

relTop += "</ul>" + "</nav>";

if ($(".rel-topic")[0]) {
  $(".rel-articles-container").prepend(relTop);
}

  //  var vid =
  //   "<nav role='Videos' class='table-of-contents'>" +
  //   "<p>Videos:</p>" +
  //   "<ul>";
  // var newLine3, el3, title3, link3;

  // $(".video").each(function() {
  //   el3 = $(this);
  //   title3 = el3.attr("name");
  //   link3 = el3.attr("src");
  //   newLine3 = "<li>" + "<a href='" + link3 + "'>" + title3 + "</a>" + "</li>";
  //   vid += newLine3;
  // });

  // vid += "</ul>" + "</nav>";

  // if ($(".video")[0]) {
  //   $(".table-of-contents-container").prepend(vid);
  // }
 


  var dl =
    "<nav role='downloads' class='table-of-contents'>" +
    "<p>Downloads</p>" +
    "<ul>";
  var newLine2, el2, title2, link2;

  $(".dl-file").each(function() {
    el2 = $(this);
    title2 = el2.attr("name");
    link2 = el2.attr("href");
    newLine2 = "<li>" + "<a href='" + link2 + "'>" + title2 + "</a>" + "</li>";
    dl += newLine2;
  });

  dl += "</ul>" + "</nav>";

  if ($(".dl-file")[0]) {
    $(".table-of-contents-container").prepend(dl);
  }


var ToC =
"<nav role='navigation' class='table-of-contents'>" +
"<p>TABLE OF CONTENTS</p>" +
"<ul>";
var newLine, el, title, link;

$("body h2, body h3").each(function() {
el = $(this);
title = el.text();
link = "#" + el.attr("id");
newLine = "<li>" + "<a href='" + link + "'>" + title + "</a>" + "</li>";

ToC += newLine; 

});

ToC += "</ul>" + "</nav>";


if ($("body h3")[0] && ("body h3")[0]  ) {
  $(".table-of-contents-container").prepend(ToC);
}





  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("coll-active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }

  var collA = document.getElementsByClassName("collapsible-article");
  var a;

  for (a = 0; a < collA.length; a++) {
    collA[a].addEventListener("click", function() {
      this.classList.toggle("coll-active-article");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }


  

  /*========================================================================
  Scroll to top button
==========================================================================*/

  //Click event to scroll to top
  $(".scrollToTop").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });

  $(".apbox").click(function(){
    window.location = $(this).find("a:first").attr("href");
    return false;
});

  /*========================================================================
  Light Slider Carousel -> lightslider.js
==========================================================================*/
$("#responsive").lightSlider({
  item:4,
  slideMargin: 10,
  speed:500,

  controls: true
}); 

$("#sticker").sticky({topSpacing:30});


  /* ---------------------------------------------------------------------- */




  $(function () {
    // bind change event to select
    $('#dynamic_select').on('change', function () {
      var url = $(this).val(); // get selected value
      if (url) { // require a URL
        window.location = url; // redirect
      }
      return false;
    });
  });



});

/*========================================================================
  Unused
==========================================================================

  $('#image-gallery').lightSlider({
    gallery:true,
    item:1,
    thumbItem:9,
    slideMargin: 0,
    speed:500,
    auto:true,
    loop:true,
    onSliderLoad: function() {
      $('#image-gallery').removeClass('cS-hidden');
    }  
  });


*/