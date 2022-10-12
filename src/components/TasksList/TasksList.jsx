import style from './TasksList.module.css'

import { useEffect,useState } from 'react'

import TaskItem from '../TaskItem/TaskItem'


function TasksList () {
    // const [ tasks, setTasks ] = useState()
  

    // console.log(tasks)
    return (
        <ul className={style.tasksList}>
            {/* {tasks?.map((task,i) => (
                <TaskItem
                key={i} title={task.title} tags={task.tags}
                />
            ))} */}
       
        </ul>
    )
}

export default TasksList