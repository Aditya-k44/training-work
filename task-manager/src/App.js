import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";
import { taskReducer } from "./components/taskReducer";

function App() {
  // 1.const [tasks, setTasks] = useState([]);

  // 2.const [tasks, setTasks] = useState(()=>{
  //   const saved = localStorage.getItem("tasks");
  //   return saved ? JSON.parse(saved) : [];
  // });

const[tasks, dispatch] = useReducer(taskReducer, [], ()=>{
  const saved = localStorage.getItem("task");
  return saved ? JSON.parse(saved) : [];
})

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks])

  const [filter, setFilter] = useState("all");

  // 1. const addTask = (text) => {
  //   const newTask = {
  //     id: Date.now(),
  //     text,
  //     completed: false,
  //   };
  //   setTasks([...tasks, newTask]);
  // };

  // 2. const addTask = useCallback((text) => {
  //   const newTask = {
  //     id: Date.now(),
  //     text,
  //     completed: false,
  //   };
  //   setTasks((prev)=> [...prev, newTask]);
  // },[])

    const addTask = (text) => {
      dispatch({type: "ADD" , payload: text})
    }

  //1. const deleteTask = (id) => {
  //   setTasks(tasks.filter((task) => task.id !== id));
  // };

  //2. const deleteTask = useCallback ((id) => {
  //   setTasks((prev) => prev.filter((task) => task.id !== id));
  // },[])

    const deleteTask = (id) => {
      dispatch({type: "DELETE", payload:id})
    }

  //1.  const toggleTask = (id) => {
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === id ? { ...task, completed: !task.completed } : task,
  //     ),
  //   );
  // };

  //2.  const toggleTask = useCallback((id) => {
  //   setTasks((prev) => prev.map((task) => task.id === id ? { ...task, completed: !task.completed } : task,))
  // })

  const toggleTask = (id) => {
    dispatch({type: "TOGGLE", payload:id})
  }

  // const filteredTasks = tasks.filter((task) => {
  //   if (filter === "completed") return task.completed;
  //   if (filter === "pending") return !task.completed;
  //   return true;
  // });

  const filteredTasks = useMemo(() =>{
    return tasks.filter((task)=>{
      if (filter === "completed") return task.completed;
      if (filter === "pending") return !task.completed;
      return true;
    })
  },[tasks, filter])

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <TaskInput addTask={addTask} />
      <Filter filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
