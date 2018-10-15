import React from 'react';
import './person.css';
// import Radium from 'radium'

const person = props => {

	const style = {
		'@media (min-width: 900px)': {
			width: '450px'
		}
	}

	return(
	<div className="Person" style={style}>
		<p onClick={props.click}>
			I'm {props.name} and I am {props.age} years old and my {props.children}
		</p>
		<input type="text" onChange={props.changed} defaultValue={props.name}/>
	</div>
	)
};

export default person;
