function sectionCall() {
  let pageLink = this.getAttribute("data-block");
  let page;
  switch ( pageLink.slice(8) ) {
    case "about":
      findOtherSections();
      sectionRise(pageLink);
      break;
    case "services":
      findOtherSections();
      sectionRise(pageLink);
      break;
    case "pricing":
      findOtherSections();
      sectionRise(pageLink);
      break;
    case "tips":
      findOtherSections();
      sectionRise(pageLink);
      break;
    default:
      findOtherSections();
      break;
  }
}

function sectionRise(id) {
  let page = document.getElementById(id);
  page.classList.add("active-page");
}

function sectionLower(id) {
  let page = document.getElementById(id);
  page.classList.remove("active-page");
}

function findOtherSections() {
  for (let otherPage of $(".nav-tab") ) {
    let otherPageLink = otherPage.getAttribute("data-block");
    sectionLower(otherPageLink);
  }
}

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

$(".nav-tab").click(sectionCall);

$(".nav-logo").click( function() {
  findOtherSections();
});

$("aside.header-info").on("mouseover", function() {
  this.classList.add("aside-hover");
});

$("aside.header-info").on("mouseout", function() {
  this.classList.remove("aside-hover");
});
