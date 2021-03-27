var todolist = [];
var todolistElement = document.getElementById("todo-list");
var todoForm = document.getElementById('todo-form');
var todoField = document.getElementById('todo-field');

function displayList() {
    todolistElement.innerHTML = ""; // Empty todo-list element (parent)

    // Get all todolist data and generate todo item
    todolist.forEach(todo => {
        // Create todo-list item (Structure)
        // <div class="todo-item">
        //     <div class="todo-text">
        //         Create a project
        //     </div>
        //     <div class="todo-menu">
        //         <button>Done</button>
        //         <button>Remove</button>
        //     </div>
        // </div>

        // Create elements
        var a = document.createElement("div");
        var b = document.createElement("div");
        var c = document.createElement("div");
        var d = document.createElement("button");
        var e = document.createElement("button");

        // Add classes to the elements
        a.classList.add("todo-item");
        b.classList.add("todo-text");
        c.classList.add("todo-menu");
        d.classList.add("done");
        e.classList.add("remove");

        // Append elements to designated locations
        b.innerHTML = todo; // Add text to done button
        a.appendChild(b);
        d.textContent = "Done"; // Add text to done button
        c.appendChild(d);
        e.textContent = "Remove"; // Add text to remove button
        c.appendChild(e);
        a.appendChild(c);

        // Append todo item element to todo-list element (parent)
        todolistElement.appendChild(a);
    });
}



// Submit todo-form
todoForm.onsubmit = function(e) {
    e.preventDefault(); // prevent form submission by default
    var todo = todoField.value; // Get todo field value

    todolist.push(todo); // Add todo to todolist

    displayList(); // Display list
    e.target.reset(); // Reset form
};



// Action button listener
document.addEventListener('click', function(e) {

    // On done button clicked
    if (e.target && e.target.className.includes('done')) {
        // Get taskText element
        var taskText = e.target.parentNode.parentNode.childNodes[0];

        var doneBtn = e.target;
        if (doneBtn.innerHTML == "Done") {
            taskText.className += " todo-done";
            doneBtn.innerHTML = "Undone";
        } else {
            var classnames = taskText.className;
            taskText.className = classnames.replace(" todo-done", "");
            doneBtn.innerHTML = "Done";
        }
    } else if (e.target && e.target.className.includes('remove')) { // On remove button clicked
        // Get taskText element
        var taskText = e.target.parentNode.parentNode.childNodes[0];

        // Removing task from the list
        var index = todolist.indexOf(taskText.innerHTML);
        if (index !== -1) {
            todolist.splice(index, 1);
        }
        e.target.parentNode.parentNode.remove();
    }
});