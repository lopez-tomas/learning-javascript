import { getToDos } from './todos.js';

window.addEventListener('load', () => {
	console.log('page fully loaded');

	const getButton = document.getElementById('todos-get');
	let todos = [];

	getButton.addEventListener('click', e => {
		e.preventDefault();

		todos = getToDos();
        console.log(todos);
	})

})
