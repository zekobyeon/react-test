import React,  { Component } from "react";
import "./TodoItem.scss";

// class TodoItem extends Component {
// 	render(){
// 		const {children, flag, onDelete} = this.props;
// 		const msgStyle = flag ? "text done" : "text";
//
// 		return(
// 			<div className="todo-item">
// 				<input className="tick" type="checkbox" readOnly/>
// 				<div className={msgStyle}>{children}</div>
// 				<div
// 					className="delete"
// 					onClick={(e) => {
// 						onDelete();
// 						e.stopPropagation();
// 					}}>[지우기]</div>
// 			</div>
// 		)
// 	}
// }

/**
 * 라이프사이클API 및 state 사용이 없으므로 함수형 컴포넌트로 선언 가능.
 * @param children : 내용
 * @param flag : 일정 완료 여부
 * @param onDelete : 지우기 버튼에 대한 이벤트 함수
 * @returns {*}
 * @constructor
 */
const TodoItem = ({children, flag, onToggle, onDelete}) => {
	const msgStyle = flag ? "text done" : "text";

	return(
		<div className="todo-item" onClick={onToggle}>
			<input className="tick" type="checkbox" checked={flag} readOnly/>
			<div className={msgStyle}>{children}</div>
			<div
				className="delete"
				onClick={(e) => {
					onDelete();
					e.stopPropagation();
				}}>[지우기]</div>
		</div>
	)
}

export default TodoItem;