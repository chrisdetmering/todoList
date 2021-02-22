const todoList = document.getElementById('task');

document.getElementById('form')
.addEventListener('submit', function (e) {
	e.preventDefault();

	displayTodo();
});


const displayTodo = function () {
	const input = document.getElementById('input');
	let todoText = input.value;
	
	if (todoText) {
		const todo = createTodo(todoText); 
		todoList.appendChild(todo);
		input.value = '';
	}
};

const createTodo = function (todoText) { 
	const todoListItem = document.createElement('li');
	todoListItem.textContent = todoText;
	todoListItem.setAttribute('id', 'li-toggle');
	return  todoListItem; 
}


todoList.addEventListener('click', e => { 
	e.target.classList.toggle('completed');
});


todoList.addEventListener('dblclick', e => { 
	e.target.remove(); 
});

