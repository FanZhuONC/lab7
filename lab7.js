let taskInput = document.getElementById('taskInput');
const submitButton = document.getElementById('submitButton');
let taskItem = document.getElementById('taskItem');

submitButton.addEventListener('click', () => {
    let taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
        taskItem.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(deleteButton);
    taskItem.appendChild(li);
}
