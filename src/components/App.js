import React, { Component } from "react";
import PageTemplate from "./PageTemplate";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const initData = new Array(500).fill(0).map(
	(foo, index) => ({id:index, text:`일정 ${index}`, done:false})
);

class App extends Component {
	state = {
		input : "",
		// todos : [
		// 	{
		// 		id : 0,
		// 		text : "리액트 공부하기",
		// 		done : true
		// 	},
		// 	{
		// 		id : 1,
		// 		text : "컴포넌트 스타일링 해보기",
		// 		done : false
		// 	}
		// ]
		todos : initData
	}

	id=1;
	getId = () => {
		return ++this.id;
	}

	handleChange = (e) => {
		const {value} = e.target;
		this.setState({
			input : value
		});
	}

	handleInsert = () => {
		const {todos, input} = this.state;

		const newTodo = {
			text : input,
			done : false,
			id : this.getId()
		};

		if(input !== ""){
			this.setState({
				todos : [...todos, newTodo],
				input : ""
			});
		}
	}

	handleToggle = (id) => {
		const {todos} = this.state;
		const idx = todos.findIndex(todo => todo.id === id);

		const toggled = {
			...todos[idx],
			done : !todos[idx].done
		};

		this.setState({
			todos : [
				...todos.slice(0, idx),
				toggled,
				...todos.slice(idx+1, todos.length)
			]
		});
	}

	handleRemove = (id) => {
		const {todos} = this.state;
		const idx = todos.findIndex(todo => todo.id === id);

		this.setState({
			todos : [
				...todos.slice(0, idx),
				...todos.slice(idx+1, todos.length)
			]
		});
	}

	render(){
		return (
			<PageTemplate>
				<TodoInput onChange={this.handleChange} onInsert={this.handleInsert} value={this.state.input}/>
				<TodoList todos={this.state.todos} onToggle={this.handleToggle} onRemove={this.handleRemove}/>
			</PageTemplate>
		)
	}
}

export default App;