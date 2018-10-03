//  Restore Add li

function addNewTask() {
  var li = document.createElement("li");
  var newTask = document.getElementById("newTask").value;
  var priority = document.getElementById("priority").value;
  var t = document.createTextNode(newTask);
  li.appendChild(t);
  document.getElementById(priority).appendChild(li);
}
