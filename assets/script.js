$(".description").each(function () {
  var blockTime = parseInt($(this).parent().attr("id").replace("hour", ""));
  var now = moment();
  var currentTime = now.hour();

  if (blockTime < currentTime) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
  } else if (blockTime === currentTime) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
  } else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
  }
});

for (let index = 9; index < 17; index++) {
  $(`#hour${index} .description`).val(localStorage.getItem(`hour${index}`));
}

$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, text);
});
