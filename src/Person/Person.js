import React from 'react';
const person = (props) => {
    return <p onClick={props.click}>I'm a {props.name} and I am {props.age} old. {props.children}</p>
};

export default person;