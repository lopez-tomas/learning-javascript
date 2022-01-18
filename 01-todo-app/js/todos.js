const addToDo = (e) => {
	e.preventDefault();

	let todoName = document.getElementById('todo-name').value;
	let newName = todoName.trim().replace(/\s+/g, '-').toLowerCase();

	const todo = {
		name: todoName,
		description: document.getElementById('todo-description').value,
		priority: document.getElementById('todo-priority').value,
	}

	localStorage.setItem(`${newName}`, JSON.stringify(todo));

	clearToDo();

	return todo;
}

export const getToDos = () => {
	let todos = [];
	let todo = {};

	const keys = Object.keys(localStorage);
	const keysLength = keys.length;
	let key;

	for(let i = 0; i < keysLength; i++) {
		key = localStorage.getItem(keys[i]);

		if (key) {
			todo['name'] = JSON.parse(key).name;
			todo['description'] = JSON.parse(key).description;
			todo['priority'] = JSON.parse(key).priority;

			todos.push(todo);
		}
	}

	console.log(todos);
	return todos;
}

const clearToDo = () => {
	document.getElementById('todo-name').value = "";
	document.getElementById('todo-description').value = "";
	document.getElementById('todo-priority').value = "";
}
