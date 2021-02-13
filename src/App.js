import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Satish', age: 29 },
      { name: 'Anjali', age: 29 },
      { name: 'Tony Stark', age: 30 }
    ],
    otherState: 'Something'
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Satish Patel', age: 27 },
        { name: 'Elon Musk', age: 50 },
        { name: 'Iron Man', age: 52 }
      ]
    })
  };
  nameChangeHandler = (event) => {
    this.setState({
      persons : [
        {name: 'Satish Patel', age: 27 },
        {name: event.target.value, age: 50 },
        {name: 'Iron Man', age: 52 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      
      cursor: 'pointer'
    }
  return (
    <div className="App">
      <h1>React Learning in Progress</h1>
      <button style={style} onClick={this.switchNameHandler}>Switch Name </button>
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
    </div>
  );
  }
}

export default App;

