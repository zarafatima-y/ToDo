const input = document.getElementById("input-area");
const list = document.getElementById("List");

function pushTask() {
  if (input.value === '') {
    alert("There are no tasks to be added!");
  } else {
    let taskContainer = document.createElement("div"); 
    taskContainer.className = "task-container";

    let li = document.createElement("li");
    li.innerHTML = input.value;

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";

    taskContainer.appendChild(li);
    taskContainer.appendChild(span);

    list.appendChild(taskContainer);
  }
  input.value = "";
  saveList();
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveList();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveList();
    }
}, false);

function saveList(){
    localStorage.setItem('data', list.innerHTML);
}

function showList(){
    list.innerHTML = localStorage.getItem('data');
}

showList();