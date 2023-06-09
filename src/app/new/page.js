'use client'
import { useState } from 'react'
import { useTasks } from '../../context/TasksContext'
import { useRouter } from 'next/navigation'

const New = () => {
 const [task, setTask] = useState()
 const { createTask } = useTasks()
 const router = useRouter()

 const handleChange = (e) =>
  setTask({ ...task, [e.target.name]: e.target.value })

 const handleSubmit = (e) => {
  e.preventDefault()
  createTask(task.title, task.description)
  router.push('/')
 }

 return (
  <form onSubmit={handleSubmit}>
   <input name='title' placeholder='write a title' onChange={handleChange} />
   <textarea
    name='description'
    placeholder='write a description'
    onChange={handleChange}
   />
   <button>Save</button>
  </form>
 )
}

export default New
