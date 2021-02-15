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
		deleteBtn.classList.add('btn');

		taskLi.appendChild(deleteBtn);

		taskLi.innerText = taskText;

		taskUl.appendChild(taskLi);

		input.value = '';

		taskLi.addEventListener('click', function () {
			taskLi.classList.toggle('completed');
		});
	}
};

form.addEventListener('submit', function (e) {
	e.preventDefault();

	addTask();
});
