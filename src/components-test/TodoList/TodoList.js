import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends Component {
	render(){
		const {todoList,onToggle,onDelete} = this.props;
		const list = todoList.map(
			todo => (
				<TodoItem
					key={todo.idx}
					idx={todo.idx}
					flag={todo.flag}
					onToggle={() => {onToggle(todo.idx);}}
					onDelete={() => {onDelete(todo.idx);}}>
					{todo.msg}
				</TodoItem>
			)
		);

		return(
			<div>
				{list}
			</div>
		)
	}
}

export default TodoList;