import React from 'react'

const TaskItem = ({ task , deleteTask, toggleTask }) => {
  return (
    <div className='task-item'>
      <input type="checkbox"  checked={task.completed} onChange={() => toggleTask(task.id)}/>
      <span className={`task-text ${task.completed ? "completed" : ""}`}>{task.text}</span>
      <button className='delete-btn' onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  )
}

export default TaskItem
