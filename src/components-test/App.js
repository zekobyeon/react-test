import React, { Component } from "react";
import PageTemplate from "./PageTemplate";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

class App extends Component {
	state = {
		input : "",
		todoList : [
			{
				idx : 0,
				flag : false,
				msg : "어렵다 리액트"
			},
			{
				idx : 1,
				flag : true,
				msg : "안보고 짤 수 있을때까지....."
			}
		]
	};

	/**
	 *  마지막 index값 가져옴.
	 * @returns {number}
	 */
	getIndex = () => {
		const list = this.state.todoList;
		let a = list[list.length-1].idx;

		return ++a;
	};

	handleChange = (e) => {
		/*
		* 변수 선언을 하려면 변수명을 value로 지정해야 e.target.value와 매핑됨.
		* 변수 선언 없이 e.target.value로 넣어도 무방함.
		* */
		const {value} = e.target;
		this.setState({
			input : value
		});
	};

	handleInsert = () => {
		/* input에 입력한 값을 msg에 넣어야하므로 input으로 변수 선언(this.state.input) 후 신규 msg에 넣어줌. */
		const {input, todoList} = this.state;
		const newTodo = {
			idx : this.getIndex(),
			flag : false,
			msg : input
		};

		if(input !== ""){
			this.setState({
				input : "",
				todoList : [
					...todoList,
					newTodo
				]
			});
		}
		console.log(this.state);
	};

	handleDelete = (idx) => {
		console.log(this.state);
		const {todoList} = this.state;
		const delIndex = this.state.todoList.findIndex(todo => todo.idx === idx);

		this.setState({
			todoList : [
				...todoList.slice(0, delIndex),
				...todoList.slice(delIndex+1, todoList.length)
			]
		})
	};

	handleToggle = (idx) => {
		const {todoList} = this.state;
		const chkIndex = this.state.todoList.findIndex(todo => todo.idx === idx);

		const chkTodo = {
			...todoList[chkIndex],
			flag : !todoList[chkIndex].flag
		};

		this.setState({
			todoList : [
				...todoList.slice(0, chkIndex),
				chkTodo,
				...todoList.slice(chkIndex+1, todoList.length)
			]
		})
	};

	render(){
		return (
			<div>
				<PageTemplate>
					<TodoInput onChange={this.handleChange} value={this.state.input} todoInsert={this.handleInsert}/>
					<TodoList todoList={this.state.todoList} onToggle={this.handleToggle} onDelete={this.handleDelete}/>
				</PageTemplate>
			</div>
		)
	}
}

export default App;