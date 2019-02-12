var $cell = $('.service-card');

let radicalBlock = document.getElementById("radical_services");
let heightChange = 250;

// Keeps functions from running too often
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

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
  if ($(window).width() > 767.98) {
    setTimeout( function() {
      document.getElementsByClassName('about-container')[0].style.maxHeight = "1500px";
      document.getElementsByClassName('about-container')[0].style.padding = "50px 0 10px";
    }, delay);
  } else {
    setTimeout( function() {
      document.getElementsByClassName('about-container')[0].style.maxHeight = "1500px";
      document.getElementsByClassName('about-container')[0].style.padding = "10px 0 10px";
    }, delay);
  }
}

function closeAbout() {
  let delay = 10;
  setTimeout( function() {
    document.getElementsByClassName('about-container')[0].style.padding = "0";
    document.getElementsByClassName('about-container')[0].style.maxHeight = "0";
  }, delay);
}

function scrollDirection() {
  // print "false" if direction is down and "true" if up
  let scrollDir = this.oldScroll > this.scrollY;
  this.oldScroll = this.scrollY;
  return scrollDir;
}

//Sticky nav
function stickyScroll() {
    var height = $(window).scrollTop();
    if ($(window).width() > 767.98) {
      if(height > $("#header_info_block").height()) {
          $("#navigation_tab").addClass('navigation-tab');
      } else if(height == 0) {
          $("#navigation_tab").removeClass('navigation-tab');
      }
    } else {
      if (scrollDirection() == false) {
        $('header').css('top', '8px');
      } else {
        $('header').css('top', '0px');
      }
    }
}

//Scroll to section minus nav
function scrollToSection() {
  let navHeight = $('header').height();
  let targetLink = $(this).attr("href");
  if ($(window).width() > 767.98) {
    $('html, body').animate({
        scrollTop: $(targetLink).offset().top - 65
      }, 50);
  } else {
    $('html, body').animate({
        scrollTop: $(targetLink).offset().top - navHeight
      }, 50);
  }
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
        thumbItem: 5,
        galleryMargin: 30,
        loop: true,
        currentPagerPosition: 'right',
    });
  });

//Services slider
function slideServices() {
  let cardList = $(".service-card");
  let delay = 600;
  if ($(this).hasClass('right-arrow')) {
    for (let orderNum of cardList) {
      let orderPlace = getComputedStyle(orderNum).getPropertyValue("order");
      orderNum.style.order = parseInt(orderPlace) - 1;
      if (getComputedStyle(orderNum).getPropertyValue("order") == "0") {
        orderNum.style.order = 5;
      }
      $(orderNum).addClass('slide-Left');
      setTimeout( function() {
        $(orderNum).removeClass('slide-Left');
      }, delay);
    }
  }
  if ($(this).hasClass('left-arrow')) {
    for (let orderNum of cardList) {
      let orderPlace = getComputedStyle(orderNum).getPropertyValue("order");
      orderNum.style.order = parseInt(orderPlace) + 1;
      if (getComputedStyle(orderNum).getPropertyValue("order") == "6") {
        orderNum.style.order = 1;
      }
      $(orderNum).addClass('slide-Right');
      setTimeout( function() {
        $(orderNum).removeClass('slide-Right');
      }, delay);
    }
  }
  $cell.find('.js-collapser').closeSummary;
}

//Form Validation
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function formValidation() {
  let inputBlock = $(this);
  let inputName = $(this).attr("id");
  switch (inputName) {
    case "name":
      if ( !inputBlock.val() ) {
        inputBlock[0].style.border = "2px solid red";
        inputBlock[0].style.boxShadow = "0px 0px 5px red";
      } else {
        inputBlock[0].style.textTransform = "Capitalize";
        inputBlock[0].style.border = "2px solid #008000";
        inputBlock[0].style.boxShadow = "0px 0px 5px #009900";
      }
      break;
    case "email":
      if ( !inputBlock.val() || !validateEmail( inputBlock.val() )  ) {
        inputBlock[0].style.border = "2px solid red";
        inputBlock[0].style.boxShadow = "0px 0px 5px red";
      } else {
        inputBlock[0].style.border = "2px solid #008000";
        inputBlock[0].style.boxShadow = "0px 0px 5px #009900";
      }
      break;
    case "phone_number":
      if ( !inputBlock.val() ) {
        inputBlock[0].style.border = "2px solid red";
        inputBlock[0].style.boxShadow = "0px 0px 5px red";
      } else {
        inputBlock[0].style.border = "2px solid #008000";
        inputBlock[0].style.boxShadow = "0px 0px 5px #009900";
      }
      break;
  }
}

$("input").blur(formValidation);
$(".arrow").click(slideServices);
$(window).one("load",stickyScroll);
$(window).scroll(stickyScroll);
$(".testimonial").children(".testimonial-stars").ready(addStars);
$("a").click(scrollToSection);
$("[href='#radical_about']").click(openAbout);
$("#more-arrows").click(closeAbout);
$cell.find('.js-expander').click(openSummary);
$cell.find('.js-collapser').click(closeSummary);
