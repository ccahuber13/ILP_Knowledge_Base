/*========================================================================
  Author: Christopher C. Huber
  Date:   02/13/2018
==========================================================================*/  

$(document).ready(function() {


  var $window = $(window);
  var $videoWrap = $('.video-wrapper');
  var $video = $('.video');
  var videoHeight = $video.outerHeight();

  var article2 = document.querySelector(".MP-Article");
  console.log(article2);

  var bcontainer = document.querySelector(".body-container");
  console.log(bcontainer);

  // var window = document.body;
  // console.log(window);


  bcontainer.addEventListener("scroll", function (e) {
    console.log("Scrolled :P");

    console.log(e);

    var windowScrollTop = bcontainer.scrollTop;
    console.log(windowScrollTop);

    var videoBottom = videoHeight + $videoWrap.offset().top;
    console.log(videoBottom);

    if (windowScrollTop > videoBottom + 200) {
      $videoWrap.height(400);
      $video.addClass('stuck');
    } else {
      $videoWrap.height('auto');
      $video.removeClass('stuck');
    };
  });


 

  var relTop = "<nav role='Related Articles' class='rel-table-of-contents card bg-light'>" + 
  "<div class='card-header'>Related Articles</div>" + 
  "<ul class='list-group list-group-flush'>";
  var newLine4, el4, title4, link4;

  $("body .rel-topic").each(function () {
    el4 = $(this);
    title4 = el4.text();
    link4 = el4.attr("href");
    newLine4 = "<li class='list-group-item'>" + "<a href='" + link4 + "'>" + title4 + "</a>" + "</li>";
    relTop += newLine4;
  });

  relTop += "</ul>" + "</nav>";

  if ($(".rel-topic")[0]) {
    $(".rel-articles-container").prepend(relTop);
  }



  var dl = "<nav role='downloads' class='table-of-contents card bg-light'>" + 
  "<div class='card-header'>Downloads</div>" + 
  "<ul class='list-group list-group-flush'>";
  var newLine2, el2, title2, link2;

  $(".dl-file").each(function () {
    el2 = $(this);
    title2 = el2.attr("name");
    link2 = el2.attr("href");
    newLine2 = "<li class='list-group-item'>" + "<a href='" + link2 + "'>" + title2 + "</a>" + "</li>";
    dl += newLine2;
  });

  dl += "</ul>" + "</nav>";

  if ($(".dl-file")[0]) {
    $(".table-of-contents-container").prepend(dl);
  }


  var ToC =
    "<nav role='navigation' class='table-of-contents card bg-light'>" +
    "<div class='card-header'>Table of Contents</div>" +
    "<ul class='list-group list-group-flush'>";
  var newLine, el, title, link;

  $("body h2, body h3").each(function () {

    el = $(this);
    title = el.text();
    link = "#" + el.attr("id");

    if (el.is('h2')) {
      newLine = "<li class='toc-2-bold list-group-item'>" + "<a href='" + link + "'>" + title + "</a>" + "</li>";
    }
    if (el.is('h3')) {
      newLine = "<li class='toc-3-indent list-group-item'>" + "<a href='" + link + "'>" + title + "</a>" + "</li>";
    }

    ToC += newLine;

  });

  ToC += "</ul>" + "</nav>";


  if ($("body h2")[0]) {
    $(".table-of-contents-container").prepend(ToC);
  } else if ($("body h3")[0]) {
    $(".table-of-contents-container").prepend(ToC);
  }



  

 


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


  document.getElementById("rtDropdown-parent").addEventListener("click", myFunction);

  /* When the user clicks on the button, 
 			 toggle between hiding and showing the dropdown content */
  function myFunction() {
    document.getElementById("rtDropdown").classList.toggle("showmenu-rt");
    console.log('THIS WORKS');
  }

  /* Close the dropdown if the user clicks outside of it */
  window.onclick = function (e) {

    if (!e.target.matches('.dropbtn')) {
      var myDropdown = document.getElementById("rtDropdown");
      if (myDropdown.classList.contains('showmenu')) {
        myDropdown.classList.remove('showmenu');
      }
    }
  }


  // function dropdown(el) {
  //   this.dd = el;
  //   this.initEvents();
  // }
  // dropdown.prototype = { initEvents: function() {
  //     var obj = this;

  //     obj.dd.on("click", function(event) {
  //       $(this).toggleClass("show dropdown-content");
  //       event.stopPropagation();
  //     });
  //   } };

  // $(function() {
  //   var dd = new dropdown($("#dropdown"));

  //   $(document).click(function() {
  //     // all dropdowns
  //     $(".dropbtn").removeClass("show");
  //   });
  // });




});

