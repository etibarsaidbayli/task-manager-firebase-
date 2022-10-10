
import MyButton from '../MyButton/MyButton'
import style from './TaskItem.module.css'


function TaskItem ({title,tags}) {
    return (
        <li className={style.taskItem}>    
            <div className={style.taskItem__title}>
                <input type="checkbox" />
                <b>{title}</b>
                <MyButton role="edit">Edit</MyButton>
            </div>
            <div className={style.taskItem__tags}>
            <div>
            {tags?.map((tag,i) => (
                <span key={i}>{tag}</span>
            ))}
            </div>
            <MyButton role="edit">edit</MyButton>
            </div>
            <MyButton role="delete">Sil</MyButton>
        </li>
    )
}

export default TaskItem