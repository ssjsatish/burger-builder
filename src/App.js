import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:'1', name: 'Satish', age: 29 },
      { id:'2', name: 'Anjali', age: 29 },
      { id:'3', name: 'Tony Stark', age: 30 }
    ],
    otherState: 'Something',
    showPersons: false
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { id:'1', name: 'Satish Patel', age: 27 },
        { id:'2', name: 'Elon Musk', age: 50 },
        { id:'3', name: 'Iron Man', age: 52 }
      ]
    })
  };
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = { 
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}. this.state.persons[personIndex])
    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({ persons : persons })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',      
      cursor: 'pointer'
    }
    let persons = null
    if(this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map( (p,index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={p.name}
              age={p.age} 
              key={p.id}
              changed={(event) => this.nameChangeHandler(event, p.id)}/>
          })}
        </div>
      )
    }
  return (
    <div className="App">
      <h1>React Learning is in Progress</h1>
      <button 
        style={style} 
        onClick={this.togglePersonHandler}>Toggle Persons </button>
        { persons }
      {/* { this.state.showPersons ? 
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}
            />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              // click={this.switchNameHandler}
              changed={this.nameChangeHandler} >Hobbies: Reading
            </Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}
            />
          </div> : null
      }     */}
    </div>
  );
  }
}

export default App;

