import React,  { Component } from "react";
import "./TodoItem.scss";

class TodoItem extends Component {
	render(){
		const {done, children, onToggle, onRemove} = this.props;
		const textStyle = done ? "text done" : "text";

		return (
			<div className="todo-item" onClick={onToggle}>
				<input className="tick" type="checkbox" checked={done} readOnly/>
				<div className={textStyle}>{children}</div>
				<div
					className="delete"
					onClick={(e) => {
						onRemove();
						e.stopPropagation();
					}}>[지우기]</div>
			</div>
		)
	}
}

export default TodoItem;