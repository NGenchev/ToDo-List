import React, { Component } from 'react'
import './App.css'

// Import Components
import Listing from './components/Listing'
import Create from './components/Create'

class App extends Component {
  state = {
    'todos' : [
      { id: 1, 'content': 'go shop' },
      { id: 2, 'content': 'go run' },
      { id: 3, 'content': 'go swim' }
    ]
  }

  saveData() {
    const writeJsonFile = require('write-json-file');
 
    (async () => {
        await writeJsonFile('foo.json', {foo: true});
    })();
  }

  deleteTodo(id) {
    let todoArr = [];

    todoArr = this.state.todos.filter(todo => {
      return todo.id !== id
    })

    this.setState({
      'todos' : todoArr
    })

    //this.saveData();
  }

  createTodo(todo) {
    todo.id = Math.floor( Math.random() * 100 );
    let todoArr = [...this.state.todos, todo];

    this.setState({
      'todos' : todoArr
    })

    //this.saveData();
  }

  render() {
    return (
      <div className="App">
        <h1>Custom To Do List</h1>
        <h2>Here are thing you have to do: </h2>
        
        <div className="row">
          <div className="column">
           <Listing 
            todos={this.state.todos} 
            deleteMethod={ (id) => { this.deleteTodo(id) } }
           />
          </div>

          <div className="column">
            <Create
              createMethod={ (todo) => { this.createTodo(todo) } }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
