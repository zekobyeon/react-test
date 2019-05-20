import React, { Component } from "react";
import "./TodoInput.scss"

// class TodoInput extends Component {
// 	render(){
// 		const {onChange, value, todoInsert} = this.props;
//
// 		return(
// 			<div className="todo-input">
// 				<input type="text" onChange={onChange} value={value} placeholder="일정을 입력하세요."/>
// 				<div className="add-button" onClick={todoInsert}>일정 추가</div>
// 			</div>
// 		)
// 	}
// }

/**
 * 라이프사이클API 및 state 사용이 없으므로 함수형 컴포넌트로 선언 가능.
 * @param onChange : input에 text 입력 시 호출되는 이벤트 함수
 * @param value : input value값
 * @param todoInsert : 추가 버튼 Click 시 호출되는 이벤트 함수
 * @returns {*}
 * @constructor
 */
const TodoInput = ({onChange, value, todoInsert}) => {
	return(
		<div className="todo-input">
			<input type="text" onChange={onChange} value={value} placeholder="일정을 입력하세요."/>
			<div className="add-button" onClick={todoInsert}>일정 추가</div>
		</div>
	)
}

export default TodoInput;