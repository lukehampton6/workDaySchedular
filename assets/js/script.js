var currentDate = moment().format("dddd, MMMM Do YYYY");
var currentHour = moment().format("H");
var displayDate = document.getElementById("currentDay");
displayDate.textContent = currentDate;

var tasks = [];

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

loadTasks();
