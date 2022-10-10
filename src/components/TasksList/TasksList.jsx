import style from './TasksList.module.css'
import { onValue, ref } from 'firebase/database'
import { useEffect,useState } from 'react'
import { db } from '../../firebase'
import TaskItem from '../TaskItem/TaskItem'


function TasksList () {
    const [ tasks, setTasks ] = useState()
    useEffect(() => {
        console.log('use efffect from tasklist page')
        onValue(ref(db),snapshot => {
            const data = snapshot.val();
            if(data!==null) {
                // console.log(Object.values(data))
                setTasks(Object.values(data))
            }
        })
    },[])

    console.log(tasks)
    return (
        <ul className={style.tasksList}>
            {tasks?.map((task,i) => (
                <TaskItem
                key={i} title={task.title} tags={task.tags}
                />
            ))}
       
        </ul>
    )
}

export default TasksList