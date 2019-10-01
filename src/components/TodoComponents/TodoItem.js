import React from 'react'

const TodoItem = props => 
    <div className={`${(props.item.completed ) ? "completed" : "not-completed"}`}
        onClick={() => props.toggleChecked(props.item.id)}
    >
        <p>{props.item.name}</p>
    </div>

export default TodoItem