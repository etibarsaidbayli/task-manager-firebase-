import { useState, useEffect } from "react";
import { set, ref } from "firebase/database";
import style from "./TaskForm.module.css";
import MyButton from "../MyButton/MyButton";
import { db } from '../../firebase'

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


  const handleCreateTask = (e) => {
    console.log('yes task form submit')
      e.preventDefault()
      const myId = Date.now()
      set(ref(db, `/${myId}`), {
        myId,
        title,
        tags
      })

      
     
  };

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
