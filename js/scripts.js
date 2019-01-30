var $cell = $('.service-card');

let radicalBlock = document.getElementById("radical_services");
let heightChange = 250;

//open and close card when clicked on card
function openSummary() {

  var $thisCell = $(this).closest('.service-card');

  if ($thisCell.hasClass('is-collapsed')) {
    $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
    $thisCell.removeClass('is-collapsed').addClass('is-expanded');
    radicalBlock.style.height = (radicalBlock.offsetHeight + heightChange) + "px";

    if ($cell.not($thisCell).hasClass('is-inactive')) {
      //do nothing
    } else {
      $cell.not($thisCell).addClass('is-inactive');
    }

  } else {
    $thisCell.removeClass('is-expanded').addClass('is-collapsed');
    $cell.not($thisCell).removeClass('is-inactive');
    radicalBlock.style.height = (radicalBlock.offsetHeight - heightChange) + "px";
  }
}

//close card when click on cross
function closeSummary() {

  var $thisCell = $(this).closest('.service-card');

  $thisCell.removeClass('is-expanded').addClass('is-collapsed');
  $cell.not($thisCell).removeClass('is-inactive');
  radicalBlock.style.height = (radicalBlock.offsetHeight - heightChange) + "px";

}

//Open and Close About section
function openAbout() {
  let delay = 50;
  setTimeout( function() {
    document.getElementsByClassName('about-container')[0].style.maxHeight = "1000px";
    document.getElementsByClassName('about-container')[0].style.padding = "50px 0 10px";
  }, delay);
}

function closeAbout() {
  let delay = 10;
  setTimeout( function() {
    document.getElementsByClassName('about-container')[0].style.padding = "0";
    document.getElementsByClassName('about-container')[0].style.maxHeight = "0";
  }, delay);
}

//Sticky nav
function stickyScroll() {
    var height = $(window).scrollTop();
    if(height  > $("#header_info_block").height()) {
        $("#navigation_tab").addClass('navigation-tab');
    } else if(height == 0) {
        $("#navigation_tab").removeClass('navigation-tab');
    }
}

//Scroll to section minus nav
function scrollToSection() {
  let targetLink = $(this).attr("href");
  $('html, body').animate({
      scrollTop: $(targetLink).offset().top - 65
    }, 50);
}

//Adds Stars to Testimonials depending on class
function addStars() {
  for (let stars of $(".testimonial").children(".testimonial-stars")) {
    let numStars = $(stars).attr("class");
    let notClass = "testimonial-stars ";
    notClass = notClass.length;
    let fullStar = '<i class="fas fa-star"></i>';
    let halfStar = '<i class="fas fa-star-half-alt"></i>';
    let emptyStar = '<i class="far fa-star"></i>';
    switch (numStars.slice(notClass,-6)) {
      case "one":
        $(stars).append(fullStar);
        for (i = 0; i < 4; i++) {
          $(stars).append(emptyStar);
        }
        break;
      case "two":
        for (i = 0; i < 2; i++) {
          $(stars).append(fullStar);
        }
        for (i = 0; i < 3; i++) {
          $(stars).append(emptyStar);
        }
        break;
      case "three":
        for (i = 0; i < 3; i++) {
          $(stars).append(fullStar);
        }
        for (i = 0; i < 2; i++) {
          $(stars).append(emptyStar);
        }
        break;
      case "four":
        for (i = 0; i < 4; i++) {
          $(stars).append(fullStar);
        }
        $(stars).append(emptyStar);
        break;
      case "five":
        for (i = 0; i < 5; i++) {
          $(stars).append(fullStar);
        }
        break;
      case "one-half":
        $(stars).append(fullStar);
        $(stars).append(halfStar);
        for (i = 0; i < 3; i++) {
          $(stars).append(emptyStar);
        }
        break;
      case "two-half":
        for (i = 0; i < 2; i++) {
          $(stars).append(fullStar);
        }
        $(stars).append(halfStar);
        for (i = 0; i < 2; i++) {
          $(stars).append(emptyStar);
        }
        break;
      case "three-half":
        for (i = 0; i < 3; i++) {
          $(stars).append(fullStar);
        }
        $(stars).append(halfStar);
        $(stars).append(emptyStar);
        break;
      case "four-half":
        for (i = 0; i < 4; i++) {
          $(stars).append(fullStar);
        }
        $(stars).append(halfStar);
        break;
    }
  }
}

//Call Lightslider
$(document).ready(function() {
    $("#lightSlider").lightSlider({
        gallery: true,
        item: 1,
        slideMargin: 0,
        thumbItem: 4,
        galleryMargin: 30,
    });
  });

$(window).scroll(stickyScroll);
$(".testimonial").children(".testimonial-stars").ready(addStars);
$("a").click(scrollToSection);
$("[href='#radical_about']").click(openAbout);
$("#more-arrows").click(closeAbout);
$cell.find('.js-expander').click(openSummary);
$cell.find('.js-collapser').click(closeSummary);
