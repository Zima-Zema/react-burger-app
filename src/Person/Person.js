import React from "react";
const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I am {props.name} and I am {props.age} Years old!</p>
            {props.children ? <p>{props.children}</p> : null}
        </div>
    );

}
export default person;