import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, toggleTask }) => {
  if (tasks.length === 0) {
    return <p>No tasks available</p>;
  }

  return (
      <ul style={{ listStyle: 'none', padding: 0}}>
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
            />
          );
        })}
      </ul>
  );
};

export default TaskList;

{
  /* 
// {tasks.map((task)=>{
//                 return <li key={task.id}>{task.text}</li>
//             })} */
}
