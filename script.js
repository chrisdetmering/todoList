const form = document.getElementById('form');
const input = document.getElementById('input');
const taskUl = document.getElementById('task');

// Add Task Function

const addTask = function (task) {
	let taskText = input.value;
	//Creating li
	if (taskText) {
		const taskLi = document.createElement('li');
		const deleteBtn = document.createElement('button');
		taskUl.appendChild(taskLi);
		taskLi.textContent = taskText;
		taskLi.setAttribute('id', 'li-toggle');
		taskLi.addEventListener('dblclick', function (e) {
			taskLi.remove();
		});
		input.value = '';
	}
};

taskUl.addEventListener('click', toggleTodo);

function toggleTodo(e) {
	e.target.classList.toggle('completed');
}

form.addEventListener('submit', function (e) {
	e.preventDefault();

	addTask();
});
