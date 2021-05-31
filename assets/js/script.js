var currentDate = moment().format("dddd, MMMM Do YYYY");
var currentTime = moment();
var displayDate = document.getElementById("currentDay");
displayDate.textContent = currentDate;

var timeSlots = [
  {
    hourNine: moment().hour(9),
  },
  {
    hourTen: moment().hour(10),
  },
];

console.log(timeSlots.hourNine);

var tasks = {};

//load tasks from local storage
var loadTasks = function () {
  tasks = JSON.parse(localStorage.getItem("tasks"));
};

//save tasks to local storage
var saveTasks = function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

//change to text area when clicked
$(".container").on("click", "p", function () {
  var text = $(this).text().trim();
  var textInput = $("<textarea>").addClass("description col-10").val(text);
  $(this).replaceWith(textInput);
  textInput.trigger("focus");
});

//save tasks when clicked off
$(".container").on("blur", "textarea", function () {
  var text = $(this).val().trim();

  tasks.text = text;
  saveTasks();

  var taskP = $("<p>").addClass("description col-10").text(text);

  $(this).replaceWith(taskP);
});

var checkTime = function () {
  var time = $().find();
};

var hourNine = moment().hour(9);
var hourTen = moment().hour(10);
var hourEleven = moment().hour(11);
var hourTwelve = moment().hour(12);
var hourThirteen = moment().hour(13);
var hourFourteen = moment().hour(14);
var hourFifteen = moment().hour(15);
var hourSixteen = moment().hour(16);
var hourSeventeen = moment().hour(17);

loadTasks();
