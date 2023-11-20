import React, { useState } from 'react';

type TItem = {
	id: number;
	text: string;
	completed: boolean;
};

const NiggaDude = () => {
	const [todos, setTodos] = useState<TItem[]>([
		{
			id: 1,
			text: 'Learn TS',
			completed: false
		},
		{
			id: 2,
			text: 'Learn JS',
			completed: true
		}
	]);

	const [input, setInput] = useState<string>('');

	const handleToggle = (id: number) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed: !todo.completed };
				}
				return todo;
			})
		);
	};

	const handleClick = () => {
		const newTodo: TItem = { id: Date.now(), text: input, completed: false };
		setTodos([...todos, newTodo]);
	};

	return (
		<section id="todo_component_container">
			<img src="/logo.png" className="header" alt="todo list logo"></img>
			<div className="status_container">
				<ul className="status_list">
					{todos.map((todo) => (
						<li
							className="list"
							key={todo.id}
							onClick={() => handleToggle(todo.id)}
							style={{
								textDecoration: todo.completed ? 'line-through' : 'none'
							}}
						>
							{todo.text}
						</li>
					))}
				</ul>
			</div>
			<div className="action_container">
				<input
					type="text"
					className="action_input"
					placeholder="Add todo action"
					onChange={(e) => setInput(e.currentTarget.value)}
				/>
				<button className="action_submit" onClick={() => handleClick()}>
					Add
				</button>
			</div>
		</section>
	);
};

export default NiggaDude;
