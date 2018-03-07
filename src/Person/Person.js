import React from "react";
<<<<<<< HEAD
const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I am {props.name} and I am {props.age} Years old!</p>
            {props.children ? <p>{props.children}</p> : null}
        </div>
    );

=======
const person = (props)=>{
    return (
        <div>
    <p>I am {props.name} and I am {props.age} years old!</p>
    <p>{props.children}</p>
    </div>
);
   
>>>>>>> e1dfdbd32d4658d1e039d380a2feac185d7acd7b
}
export default person;