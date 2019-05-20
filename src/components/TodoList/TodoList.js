import React, { Component } from "react";
import TodoItem from "../TodoItem";

class TodoList extends Component {
	/* 리렌더링 시 불필요한 렌더링을 하지않기 위함... */
	shouldComponentUpdate(nextProps, nextState){
		return this.props.todos !== nextProps.todos;
	}

	render(){
		const {todos, onToggle, onRemove} = this.props;
		const todoList = todos.map(
			todo => (
				<TodoItem
					key={todo.id}
					done={todo.done}
					onToggle={() => onToggle(todo.id)}
					onRemove={() => onRemove(todo.id)}>
				{todo.text}
				</TodoItem>
			)
		)
		return (
			<div>
				{todoList}
			</div>
		)
	}
}

export default TodoList;