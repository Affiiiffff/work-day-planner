// Display today's day and date

// loop over time blocks
$(".description").each(function () {
  var blockTime = parseInt($(this).parent().attr("id").replace("hour", ""));
  var now = moment();
  var currentTime = now.hour();

 index < 17; index++) {
  $(`#hour${index} .description`).val(localStorage.getItem(`hour${index}`));
}

$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, text);
});
