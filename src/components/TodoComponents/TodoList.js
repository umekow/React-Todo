import React from 'react'
import TodoItem from './TodoItem'

const TodoList = props => 
        (
        <div className="todoList">
            {props.todolist.map(item => (
                <TodoItem key ={item.id} item={item} toggleChecked={props.toggleItem} />

            ))}

            <button className="clear" onClick={props.clear}> Clear List</button>
        </div>
        )
    

export default TodoList