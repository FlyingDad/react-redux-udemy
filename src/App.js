import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';
//import Radium, {StyleRoot} from 'radium'

class App extends Component {

	state = {
		persons: [
			{ id: '1', name: 'Mike', age: 54 },
			{ id: '2', name: 'Jim', age: 27},
			{ id: '3', name: 'Goober', age: 17 },
			{ id: '4', name: 'Snatch', age: 14 },
		],
		showPersons: false
	}

	switchNameHandler = (newName) => {
		this.setState({ persons: [
			{ name: newName, age: 54 },
			{ name: 'Homey', age: 27 }
		] })
	}

	deletePersonHander = (index) => {
		// const persons = this.state.persons.slice() //get a copy of the state
		// or 
		const persons = [...this.state.persons]
		persons.splice(index, 1)
		this.setState({persons: persons})
	}

	nameCHangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex( person => {
			return person.id === id
		})
		const person = {
			...this.state.persons[personIndex]
		}
		person.name = event.target.value
		const persons = [...this.state.persons]
		persons[personIndex] = person
		this.setState({ persons: persons})
	}

	togglePersonsHandler = () => {
		const show = !this.state.showPersons
		this.setState({ showPersons: show})
	}

  render() {

		const style = {
			backgroundColor: 'green',
			padding: '5px',
			borderRadius: '3px',
			borderColor: 'gray',
			cursor: 'pointer',
			color: 'white'
		}

		let persons= null

		if(this.state.showPersons){
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person 
								key={person.id}
								click={() =>this.deletePersonHander(index)}
								name={person.name}
								age={person.age}
								changed={(e) =>this.nameCHangedHandler(e, person.id)}
							/>
						)
					})}
				</div>
			)
			style.backgroundColor = 'red'
			style[':hover'] = {
				backgroundColor: 'orange',
				color: 'black'
			}
		}

		let classes = []
		if(this.state.persons.length <= 2) {
			classes.push('red')
		}
		if(this.state.persons.length <= 1) {
			classes.push('bold')
		}

    return (
      <div className="App">
        <h1>Hi</h1>
				<p
					className={classes.join(' ')}
				>Welcome to the secret persons list</p>
				<button 
					onClick={this.togglePersonsHandler } 
					style={style}
				>
						Show/Hide Persons
				</button>
				{persons}
      </div>
		);
  }
}

export default App;
