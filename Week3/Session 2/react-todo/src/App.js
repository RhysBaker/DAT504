import React, { Component } from 'react';


  class App extends Component {
    state = {
      inputValue: '',
      todos: [],
    }

    onType = (event) => {
      this.setState({
        inputValue: event.target.value,
      })
    }

  SaveToList = () => {
    console.log("old state", this.state.todos, "new state", [...this.state.todos, this.state.inputValue])
      this.setState({
        todos: [...this.state.todos, this.state.inputValue]
      })
 }

    render () {
        return (
            <div>
            <input type='text' onChange={this.onType} value={this.state.inputValue}/>
            <button onClick={this.SaveToList}>save to list</button>
            <TodoList item={this.state.todos} />
            </div>
          )
        }
      }


const TodoList = (props) => {
  const listItems = props.item.map((item) => {
    return <li>{item}</li>
  })
  return (
    <ol>
      {listItems}
    </ol>
    )
  }



export default App;
