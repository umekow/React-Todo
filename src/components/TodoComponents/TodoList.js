import React from 'react'
import TodoItem from './TodoItem'

const TodoList = props => 
        (
        <div className="todoList">
            {this.props.todolist.map(item => (
                <TodoItem key ={item.id} item={item} toggleItem={this.props.toggleItem} />

            ))}

            <button className="clear" onClick={this.props.clear}> Clear List</button>
        </div>
        )
    

export default TodoList