/*========================================================================
  Author: Christopher C. Huber
  Date:   02/13/2018
==========================================================================*/

$(document).ready(function () {


  // var $window = $(window);
  // var $videoWrap = $('.video-wrapper');
  // var $video = $('.video');
  // var videoHeight = $video.outerHeight();
  // var article2 = document.querySelector(".MP-Article");
  // var bcontainer = document.querySelector(".body-container");

  // // On scroll past video, stick video to lower-right corner window
  // bcontainer.addEventListener("scroll", function (e) {
  // var windowScrollTop = bcontainer.scrollTop;
  // var videoBottom = videoHeight + $videoWrap.offset().top;
  //   if (windowScrollTop > videoBottom + 200) {
  //     $videoWrap.height(400);
  //     $video.addClass('stuck');
  //   } else {
  //     $videoWrap.height('auto');
  //     $video.removeClass('stuck');
  //   };
  // });


  
  // var relTop = "<nav role='Related Articles' class='rel-table-of-contents card bg-light'>" +
  //   "<div class='card-header'>Related Articles</div>" +
  //   "<ul class='list-group list-group-flush'>";
  // var newLine4, el4, title4, link4;

  // $("body .rel-topic").each(function () {
  //   el4 = $(this);
  //   title4 = el4.text();
  //   link4 = el4.attr("href");
  //   newLine4 = "<li class='list-group-item'>" + "<a href='" + link4 + "'>" + title4 + "</a>" + "</li>";
  //   relTop += newLine4;
  // });

  // relTop += "</ul>" + "</nav>";

  // if ($(".rel-topic")[0]) {
  //   $(".rel-articles-container").prepend(relTop);
  // }



  // var dl = "<nav role='downloads' class='table-of-contents card bg-light' '>" +
  //   "<div class='card-header'>Downloads</div>" +
  //   "<ul class='list-group list-group-flush'>";
  // var newLine2, el2, title2, link2;

  // $(".dl-file").each(function () {
  //   el2 = $(this);
  //   title2 = el2.attr("name");
  //   link2 = el2.attr("href");
  //   newLine2 = "<li class='list-group-item'>" + "<a href='" + link2 + "'>" + title2 + "</a>" + "</li>";
  //   dl += newLine2;
  // });

  // dl += "</ul>" + "</nav>";

  // if ($(".dl-file")[0]) {
  //   $(".table-of-contents-container").prepend(dl);
  // }


  var ToC =
    "<nav role='navigation' class='table-of-contents card bg-light' >" +
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

  //   var bodyscript = "<script src='https://code.jquery.com/jquery-3.2.1.slim.min.js' integrity='sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN' crossorigin='anonymous'></script>";
  // var bodyscript2 = "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js' integrity='sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl' crossorigin='anonymous'></script>";
  // var bodyscript3= "<script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js' integrity='sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q' crossorigin='anonymous'></script>";

  // $('.body-container').append(bodyscript );
  // $('.body-container').append(bodyscript2 );
  // $('.body-container').append(bodyscript3 );




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


  var rtdd = document.getElementsByClassName("rt-dropDown-head");
  var i;

  for (i = 0; i < rtdd.length; i++) {
    rtdd[i].addEventListener("click", function () {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("rt-dropDown--active");
      /* Toggle between hiding and showing the active panel */
      var rtddBody = this.nextElementSibling;
      if (rtddBody.style.maxHeight) {
        rtddBody.style.maxHeight = null;
        rtddBody.style.marginBottom = 0 + "px";
        rtddBody.style.paddingBottom = 0 + "px";
      } else {
        rtddBody.style.maxHeight = rtddBody.scrollHeight + "px";
        rtddBody.style.marginBottom = 20 + "px";
        rtddBody.style.paddingBottom = 15 + "px";
      }
    });
  }



});