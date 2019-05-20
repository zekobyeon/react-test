import React, { Componrnt } from "react";
import "./TodoInput.scss";

/**
 * input 과 버튼이 존재하는 컴포넌트.
 *
 * @param value : input 값
 * @param onChange : input 변경 이벤트
 * @param onInsert : 추가 버튼 클릭 이벤트
 * @constructor
 */
const TodoInput = ({value, onChange, onInsert}) => {

	const handleKeyPress = (e) => {
		if(e.key === "Enter"){
			onInsert();
		}
	}

	return (
		<div className="todo-input">
			<input onChange={onChange} value={value} onKeyPress={handleKeyPress} placeholder="일정을 입력하세요."/>
			<div className="add-button" onClick={onInsert}>추가</div>
		</div>
	)
}

export default TodoInput;