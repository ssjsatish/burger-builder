import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
// import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput'

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
    // const style = {
    //   backgroundColor: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',

    //   cursor: 'pointer'
    // }
  return (
    <div className="App">
      <h1>React Learning in Progress</h1>
      <ol>
        <li>Create TWO new Components: UserInput and UserOutput</li>
        <li>UserInput should hold an input element, UserOutput two paragraphs</li>
        <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
        <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
        <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
        <li>Add a method to manipulate the state (=> an event-handler method)</li>
        <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
        <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
        <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
        <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
      </ol>
      <UserInput />
      <UserOutput userName="Satish"/>
      <UserOutput userName="Max"/>
      <UserOutput userName="Elon Musk"/>
    </div>
  );
  }
}

export default App;

