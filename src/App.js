// Engine
import React, { Component } from 'react'

// Styles
import './App.css'

// Import Components
import Listing from './components/Listing'
import Controls from './components/Controls'
import Cookies from './components/Cookies'
import Footer from './components/Footer'

class App extends Component {
  state = {
    'todos' : null
  }

  componentDidMount() {
    const cookieObj = new Cookies()
    let todoList = cookieObj.getCookie( 'todos' );


    if ( todoList ) {
      let todoJSObject = JSON.parse( unescape( todoList ) );
      
      this.setState({
        todos: todoJSObject.todos
      })
    } 
  }

  saveData() {
    const cookieObj = new Cookies()
    cookieObj.setCookie( 'todos', JSON.stringify( this.state ), 7 )
  }

  deleteTodo(id) {
    let todoArr = []

    todoArr = this.state.todos.filter(todo => {
      return todo.id !== id
    })

    this.setState({
      'todos' : todoArr
    }, function() {
      this.saveData()
    })

  }

  createTodo(todo) {
    let uniqueID = 0,
        todoArr = []

    if ( this.state.todos ) {
      const checkForDuplicate = todo => todo.id === uniqueID;

      do {
        uniqueID = Math.floor( Math.random() * 100 )
      } while ( typeof this.state.todos.find( checkForDuplicate ) !== typeof undefind );
      todo.id = uniqueID

      todoArr = [...this.state.todos, todo]
    } else {
      todo.id = uniqueID

      todoArr = [ todo ]
    }

    this.setState({
      'todos' : todoArr
    }, function() {
      this.saveData()
    })
  }

  cleanList() {
    this.setState({
      'todos' : null
    })

    const cookieObj = new Cookies()
    cookieObj.setCookie( 'todos', null, 0 )
  }

  render() {
    return (
        <div className="App">
          <h1>Custom To Do List</h1>
          <h2>Here are thing you have to do: </h2>
          
          <div className="row">
              <Listing 
                todos={this.state.todos} 
                deleteMethod={ (id) => { this.deleteTodo(id) } }
              />

              <Controls 
                createMethod={ (todo) => { this.createTodo(todo) } } 
                deleteAllMethod={ () => { this.cleanList() } }
              />

              <Footer />
          </div>
        </div>
    );
  }
}

export default App;