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
