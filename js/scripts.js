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
  let delay = 1000;
  setTimeout( function() {
    document.getElementsByClassName('about-container')[0].style.maxHeight = "1000px";
    document.getElementsByClassName('about-container')[0].style.padding = "50px 0 80px";
  }, delay);
}

function closeAbout() {
  document.getElementsByClassName('about-container')[0].style.maxHeight = "0";
    document.getElementsByClassName('about-container')[0].style.padding = "0";
}

//Sticky nav
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if(height  > $("#header_info_block").height()) {
        $("#navigation_tab").addClass('navigation-tab');
    } else if(height == 0) {
          $("#navigation_tab").removeClass('navigation-tab');
    }
});

//Scroll to section minus nav

$("[href='#radical_about']").click(openAbout);
$cell.find('.js-expander').click(openSummary);
$cell.find('.js-collapser').click(closeSummary);
