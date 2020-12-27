var currentDay = moment().format("MMMM Do YYYY");
$("#currentDay").append(currentDay);

var time = moment().hour();

$(".button").on("click", function() {
    var hour = $(this).parent().attr("id");
    var activity = $(this).siblings(".textContent").val();
    localStorage.setItem(hour, activity);
});

$(".hour").each(function() {
    var hour = parseInt($(this).attr("data-hour"));
    if(time < hour) {
        $(this).addClass("future")
    } else if (hour === time) {
        $(this).addClass("present");
    } else {
        $(this).addClass("past")
    }
});

$("#9am.textContent").val(localStorage.getItem("9am"));
$("#10am.textContent").val(localStorage.getItem("10am"));
$("#11am.textContent").val(localStorage.getItem("11am"));
$("#12pm.textContent").val(localStorage.getItem("12pm"));
$("#1pm.textContent").val(localStorage.getItem("1pm"));
$("#2pm.textContent").val(localStorage.getItem("2pm"));
$("#3pm.textContent").val(localStorage.getItem("3pm"));
$("#4pm.textContent").val(localStorage.getItem("4pm"));
$("#5pm.textContent").val(localStorage.getItem("5pm"));
