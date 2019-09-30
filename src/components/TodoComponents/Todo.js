import React from 'react'
import list from './data'
import TodoList from './TodoList'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
class Todo extends React.Component{
    constructor(){
        super();
        this.state = {
            name: 'list', 
            list: list
        }
    }

    toggleChecked = id => {
        this.setState({
            list: this.state.list.map(item => {
                if (item.id == id) {
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
            list: [...this.list, newItem]
        })
    }
    render() {
        return(
            <>
                <h1>This is the todo component</h1>
            </>
        )
    }
}

export default Todo