const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const priorityInput = document.querySelector("#priority");
const taskList = document.querySelector("#task-list");


const tasks = [];

function displayTasks() {
    taskList.textContent = "";

    for (const task of tasks) {
        const taskElement = document.createElement("div");

        if (task.priority === "high") {
            taskElement.style.color = "red";
        } else if (task.priority === "medium") {
            taskElement.style.color = "yellow";
        } else if (task.priority === "low") {
            taskElement.style.color = "green";
        }

        taskElement.textContent = task.name + " (" + task.priority + ")";

        if (task.completed) {
            taskElement.classList.add("completed");
        }

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";

        completeButton.addEventListener("click", function() {
            task.completed = !task.completed;
            displayTasks();
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {
            const index = tasks.indexOf(task);
            tasks.splice(index, 1);
            displayTasks();
        });

        taskElement.appendChild(completeButton);
        taskElement.appendChild(deleteButton);

        taskList.appendChild(taskElement);
    }
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (taskInput.value != ""){
        const task = {
            name: taskInput.value,
            priority: priorityInput.value,
            completed: false
        };
        tasks.push(task);
        displayTasks();
        console.log(tasks);
        form.reset();
    }

});

