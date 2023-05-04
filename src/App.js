import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import Addtask from './components/Addtask'
const App = () => {
  const[showAddTask,setShowAddTask]=useState(false)
  const [tasks,setTask]=useState([
    {
        id:1,
        text:'Doctors Appointment',
        day:'Feb 5th at 2.30pm',
        reminder:true,
    },
    {
        id:2,
        text:'Appointment',
        day:'Feb 5th at 2.30pm',
        reminder:true,
    },
    {
        id:3,
        text:'Doctors Appointment',
        day:'Feb 5th at 2.30pm',
        reminder:true,
    },
    {
        id:4,
        text:'Doctors Appointment',
        day:'Feb 5th at 2.30pm',
        reminder:true,
    },
    {
        id:5,
        text:'Doctors Appointment',
        day:'Feb 5th at 2.30pm',
        reminder:false,
    },
])

const addTask=(task)=>{
  const id=Math.floor(Math.random()*1000)+1
  const newTask={id,...task}
  setTask([...tasks,newTask])
}


const deleteTask=(id)=>{
  setTask(tasks.filter((task)=>task.id!==id))
}

const toggleReminder = (id)=>{
  setTask(
    tasks.map((task)=>
    task.id === id ? {...task,reminder:!task.reminder} :task)
  )
}
  return (
    
    <div className='container'>
   
      <Header onAdd={()=>setShowAddTask
      (!showAddTask)}
      showAdd={showAddTask}
      />
      {showAddTask && <Addtask onAdd={addTask}/>}
      {tasks.length >0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : ( 'No tasks to show')}
    </div>
  )
}

export default App