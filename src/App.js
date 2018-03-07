import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    persons:[
      { _id: 1, name: "alpha", age: Math.floor(Math.random() * 30) },
      { _id: 2, name: "bravo", age: Math.floor(Math.random() * 30) },
      { _id: 3, name: "delta", age: Math.floor(Math.random() * 30) },
      { _id: 4, name: "zolo", age: Math.floor(Math.random() * 30), hoppies:"Killing Random People" }
    ],
    showPersons:false
  }
  handleClick(e){
    this.setState({
      showPersons: !this.state.showPersons
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi This is React App</h1>
        <button onClick={this.handleClick.bind(this)}>Toggle</button>
        {
          this.state.showPersons === true ?
          <div>
            {this.state.persons.map((person)=> { return( <Person key={person._id} name={person.name} age={person.age} click={this.handleClick.bind(this)} >{person.hoppies}</Person>) })}
          </div> : null
        }
      </div>
    );

    // return
    // React.createElement('div',{className:'App'},React.createElement('h1',null,"Hi
    // This is React App"));
  }
}

export default App;
