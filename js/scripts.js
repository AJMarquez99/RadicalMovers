var $cell = $('.service-card');

let radicalBlock = document.getElementById("radical_services");
let heightChange = 250;

//open and close card when clicked on card
$cell.find('.js-expander').click(openSummary);

function getSummaryHeight(nodeList) {
  let summaryHeight = nodeList[0].childNodes[3].offsetHeight;
  return summaryHeight;
}

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
$cell.find('.js-collapser').click(closeSummary);

function closeSummary() {

  var $thisCell = $(this).closest('.service-card');

  $thisCell.removeClass('is-expanded').addClass('is-collapsed');
  $cell.not($thisCell).removeClass('is-inactive');
  radicalBlock.style.height = (radicalBlock.offsetHeight - heightChange) + "px";

}
