const todoList = document.getElementById('task');

document.getElementById('form')
.addEventListener('submit', function (e) {
	e.preventDefault();

	displayTodo();
});

const displayTodo = function () {
	const input = document.getElementById('input');
	const text = input.value;
	if (text === '') {return}
		const todo = createTodo(text); 
		todoList.appendChild(todo);
		input.value = '';
};

function createTodo(text) { 
	const todoListItem = document.createElement('li');
	todoListItem.textContent = text;
	todoListItem.setAttribute('id', 'li-toggle');
	return todoListItem; 
}

todoList.addEventListener('click', e => { 
	e.target.classList.toggle('completed');
});

todoList.addEventListener('dblclick', e => { 
	e.target.remove()
})

