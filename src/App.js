import { useState } from "react"
import Header from "./Component/Header";
import Tasks from "./Component/Tasks";
import AddTask from "./Component/AddTask";

function App() {
  const [showAddTask,setShowAddTask]=useState(false)
  const [tasks, setTasks]=useState([ 
    {
       id: 1,
       text: 'Doctor Appointment',
       day: 'Feb 05th at 10:30AM',
       reminder: true,
   },
   {
       id: 2,
       text: 'Meeting at School',
       day: 'Feb 05th at 01:00PM',
       reminder: true,
   },
   {
       id: 3,
       text: 'Food shopping',
       day: 'Feb 05th at 04:30PM',
       reminder: false,
   }])

//Add a Task
const addTask=(task)=>{
 const id=Math.floor(Math.random()*1000)+1
 const newTask={id,...task}
 setTasks([...tasks,newTask])
  }
//Delete a task
  const deleteTask=(id)=>{
    setTasks(tasks.filter((task) => task.id!==id)
    )}
//Toggle Remainder
const toggleReminder=(id)=>{
  setTasks(tasks.map((task) => task.id===id ? {...task,reminder: !task.reminder}: task)
  )}

  return (
    <div className="Container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?(<Tasks tasks={tasks} onDelete={deleteTask}
       onToggle={toggleReminder} />): ("No Task to show")}
    </div>
  );
}

export default App;
