import React from 'react'
import list from './data'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import './Todo.css'
class Todo extends React.Component{
    constructor(){
        super();
        this.state = {
            name: 'list', 
            list: list
        }
    }

    toggleChecked = id => {
        console.log('checked')
        
        this.setState({
            list: this.state.list.map(item => {
                console.log(item.completed)
                if (item.id === id) {
                    return {
                        ...item, 
                        completed: true, 

                    }
                }else{
                    return item; 
                }
            })
        })
    }


    addItem = name => {
        const newItem = {
            name: name, 
            id: Date.now(), 
            completed: false
        }

        this.setState({
            list: [...this.state.list, newItem]
        })
    }

    clear = () => {
        this.setState({
            list: this.state.list.filter(item => !item.completed)
        })
    }
    render() {
        return(
            <>
               <div className="header">
                   <h1>Umeko's Todo List</h1>
                   <TodoForm addItem={this.addItem} />

               </div>

               <TodoList
                    todolist={this.state.list}
                    toggleItem={this.toggleChecked}
                    clear={this.clear}
                    />
            </>
        )
    }
}

export default Todo