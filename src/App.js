import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Satish', age: 29 },
      { name: 'Anjali', age: 29 },
      { name: 'Tony Stark', age: 30 }
    ],
    otherState: 'Something'
  })
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Satish Patel', age: 29 },
        { name: 'Elon Musk', age: 50 },
        { name: 'Iron Man', age: 52 }
      ]
    })
  };
  
  return (
    <div className="App">
      <h1>React Learning in Progress</h1>
      <button onClick={switchNameHandler}>Switch Name </button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}
      />
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}
      />
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}
        click={switchNameHandler}
      />
    </div>
  );
  }

export default App;

