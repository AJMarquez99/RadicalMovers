var $cell = $('.service-card');

let radicalBlock = document.getElementById("radical_services");
let heightChange = 250;
let functionDone = false;

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

    setTimeout( function() {
      functionDone = true;
    }, 500)

  } else {
    if ( functionDone == true ) {
      $thisCell.removeClass('is-expanded').addClass('is-collapsed');
      $cell.not($thisCell).removeClass('is-inactive');
      radicalBlock.style.height = (radicalBlock.offsetHeight - heightChange) + "px";

      setTimeout( function() {
        functionDone = false;
      }, 500)
    }
  }
}

//close card when click on cross
function closeSummary() {

  var $thisCell = $(this).closest('.service-card');

  if ( functionDone == true ) {
    $thisCell.removeClass('is-expanded').addClass('is-collapsed');
    $cell.not($thisCell).removeClass('is-inactive');
    radicalBlock.style.height = (radicalBlock.offsetHeight - heightChange) + "px";

    setTimeout( function() {
      functionDone = false;
    }, 500)
  }
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
    } /*else {
      if (scrollDirection() == false) {
        $('header').css('top', '8px');
      } else {
        $('header').css('top', '0px');
      }
    }*/
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
}

//Form Validation
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function formValidation() {
  let formOk = true;
  let errorMessage = "";
  for ( let inputBlock of $("input") ) {
    let inputValueType = inputBlock.id;
    switch (inputValueType) {
      case "name":
        if ( !inputBlock.value ) {
          formOk = false;
          errorMessage += "Please Enter your Name\n";
        }
        break;
      case "phone_number":
        if ( !inputBlock.value || inputBlock.value.length != 14 ) {
          formOk = false;
          errorMessage += "Please Enter a valid Phone Number\n";
        }
        break;
      case "email":
        if ( !inputBlock.value || !validateEmail( inputBlock.value )  ) {
          formOk = false;
          errorMessage += "Please Enter a valid Email\n";
        }
        break;
    }
  }
  if ( !$("#message").val() ) {
    formOk = false;
    errorMessage += "Please Enter a Message\n";
  }
  if ( formOk == false ) {
    event.preventDefault();
    alert(errorMessage);
  }
}

$("input[name='phone_number']").keyup(function() {
  var val_old = $(this).val();
  var val = val_old.replace(/\D/g, '');
  var len = val.length;
  if (len >= 1)
    val = '(' + val.substring(0);
  if (len >= 3)
    val = val.substring(0, 4) + ') ' + val.substring(4);
  if (len >= 6)
    val = val.substring(0, 9) + '-' + val.substring(9);
	if (len > 10)
		val = val.substring(0, 14);
  if (val != val_old)
    $(this).focus().val('').val(val);
});

$("input[name='phone_number']").on("keypress keyup blur",function (event) {
	$(this).val($(this).val().replace(/[^\d()-\s].+/, ""));
	if ((event.which < 48 || event.which > 57)) {
		 event.preventDefault();
	}
	if ($(this).val().length > 13) {
		 event.preventDefault();
	}
});

$("input[name='name']").on("keypress keyup blur",function (event) {
	$(this).val($(this).val().replace(/[^A-Za-z'-\s]+/, ""));
  let inputValue = event.which;
  if ( !(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0 && inputValue != 45 && inputValue != 39)) {
      event.preventDefault();
  }
  if ($(this).val().length > 30 ) {
    event.preventDefault();
  }
});

//New Stuff
function createGalleryArrows(arrowDirection) {
  let arrow = document.createElement("button");
  let direction = document.createTextNode(arrowDirection);
  arrow.append(direction);
  return arrow;
}

function createGallery() {
  let galleryContainer = $("#gallery_container");
  let rightArrow = createGalleryArrows("›");
  let leftArrow = createGalleryArrows("‹");
  galleryContainer.append(rightArrow);
  galleryContainer.append(leftArrow);

  rightArrow.classList.add("next");
  leftArrow.classList.add("prev");

  $('.prev').click(function() {
    plusSlides(-1);
  });
  $('.next').click(function() {
    plusSlides(1);
  });

  for ( let galleryImage of $(".mySlides") ) {
    let imgBlock = document.createElement("img");
    let imgSrc = galleryImage.getAttribute("data-img-src");
    imgBlock.setAttribute("src", imgSrc);
    galleryImage.append(imgBlock);
  }
}

//Gallery Controls
let slideIndex = 1;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = $(".mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex-1].classList.add("active");
}

$(".mySlides").ready(createGallery);
//End new Stuff

function closeMobileNav() {
	let links = $(".nav-link");
	//if ()
	console.log(window.innerWidth);
}

function backgroundChanger() {
	let bgImages = ["file-2.jpeg", "file2.jpeg", "file5.jpeg", "file16.jpeg", "file14.jpeg"];
	let arrayLength = bgImages.length;
	let currentPosition = 0;
	setInterval( function() {
		// Get the next index.  If at end, restart to the beginning.
		currentPosition = currentPosition + 1 < arrayLength ? currentPosition + 1 : 0;
		// Show the next image.
		$("#banner_background").attr("src", "images/" + bgImages[currentPosition]);
	}, 5000)
}

$(function () {
	backgroundChanger();
});
$("#mobileNav").ready(closeMobileNav);
$("#estimate_form").submit( formValidation );
$(".arrow").click(slideServices);
$(window).one("load",stickyScroll);
$(window).scroll(stickyScroll);
$(".testimonial").children(".testimonial-stars").ready(addStars);
$("a").click(scrollToSection);
$("[href='#radical_about']").click(openAbout);
$("#more-arrows").click(closeAbout);
$cell.find('.js-expander').click(openSummary);
$cell.find('.js-collapser').click(closeSummary);
