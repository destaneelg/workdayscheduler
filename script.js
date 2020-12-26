var currentDay = moment().format("MMMM Do YYYY");
$("#currentDay").append(currentDay);

$(".saveBtn").on("click", function() {
    var hour = $(this).parent().attr("id");
    var activity = $("input").val().trim();
    localStorage.setItem(hour, activity);
});
$("#9am").children("input").val(localStorage.getItem("9am"));
$("#10am").children("input").val(localStorage.getItem("10am"));
$("#11am").children("input").val(localStorage.getItem("11am"));
$("#12pm").children("input").val(localStorage.getItem("12pm"));
$("#1pm").children("input").val(localStorage.getItem("1pm"));
$("#2pm").children("input").val(localStorage.getItem("2pm"));
$("#3pm").children("input").val(localStorage.getItem("3pm"));
$("#4pm").children("input").val(localStorage.getItem("4pm"));
$("#5pm").children("input").val(localStorage.getItem("5pm"));

