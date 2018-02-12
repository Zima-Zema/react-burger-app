import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state={
    persons:[
      {name:'Zima',age:25},
      {name:'Tamer',age:30},
      {name:'Mohamed',age:24}
      
    ]
  }
  switchNameHandler=()=>{
    this.state.persons[0].name="Abdelazim";
  }
  render() {
    return (
      <div className="App">
        <h1>Hi This is React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} >I'm in love with Fatma</Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      
      </div>
    );

    // return
    // React.createElement('div',{className:'App'},React.createElement('h1',null,"Hi
    // This is React App"));
  }
}

export default App;
