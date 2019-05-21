import React, { Component } from "react";
import "./PageTemplate.scss";

const PageTemplate = ({children}) => {
	return (
		<div className="page-template">
			<h1>일정관리</h1>
			<div className="content">
				{children}
			</div>
		</div>
	)
}

export default PageTemplate;