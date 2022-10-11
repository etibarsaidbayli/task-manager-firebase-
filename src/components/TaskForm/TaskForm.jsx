import { useState, useEffect } from "react";
import { set, ref } from "firebase/database";
import style from "./TaskForm.module.css";
import MyButton from "../MyButton/MyButton";
import { db } from '../../firebase'
import axios from 'axios'
function TaskForm() {
  const [title,setTitle]  = useState("")
  const [tag,setTag]  = useState("")
  const [tags,setTags] = useState([])

 

  const handleCreateTag = (e) => {
    console.log('tag create yes')
    e.preventDefault()
    setTags([...tags,tag])
    console.log(tags)
  
  }


  // const handleCreateTask = (e) => {
  //   console.log('yes task form submit')
  //     e.preventDefault()
  //     const myId = Date.now()
  //     set(ref(db, `/${myId}`), {
  //       myId,
  //       title,
  //       tags
  //     })

  const handleCreateTask = (e) => {
    e.preventDefault()

    // fetch('http://127.0.0.1:8000/api/create', {
    //   method:"POST",
    //   headers:{
    //     "Content-Type" :'application/json'
    //   },
    //   body:JSON.stringify({
    //     title:"SALAM",
    //     is_completed:false,
    //     tags:['salam1','salam2']
    //   })
    // })
    axios.post('http://127.0.0.1:8000/api/create', {
      title:"bbir1",
      is_completed:false,
      tags:['salam2','salam3']
    })
  }

      
     


  return (
    <div className={style.taskForm__wrapper}>
      <form 
      onSubmit={handleCreateTask}
      className={style.form}>
        <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
          type="text"
          placeholder="Bashliq elave edin"
        />

        <input
        onChange={(e) => setTag(e.target.value)}
        value={tag}
          type="text"
          placeholder="teg elave edin"
        />
        <MyButton 
        role="primary__position" 
        disabled={false} 
        handleClick={handleCreateTag}
        >
          Teg elave et
        </MyButton>
        <MyButton 
        role="primary" 
        disabled={false}
        handleClick={handleCreateTask}
        >
          Tapshiriq yarat
        </MyButton>
      </form>
    </div>
  );
}

export default TaskForm;
