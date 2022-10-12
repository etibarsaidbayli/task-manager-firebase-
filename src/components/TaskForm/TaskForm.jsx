import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import style from "./TaskForm.module.css";
import MyButton from "../MyButton/MyButton";
import { createTask } from "../../store/features/taskSlice";
import { useSelector } from 'react-redux'
function TaskForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const handleCreateTag = (e) => {
    console.log("tag create yes");
    e.preventDefault();
    setTags([...tags, tag]);
    console.log(tags);
  };

  const token = useSelector((state) => state.user.token)

  console.log(token)

  const handleCreateTask = (e) => {
    e.preventDefault();
    console.log('created TASK WORKING')
    dispatch(
      createTask({
        title: "ETIBAR TASK",
        user_id: "1234567",
        tags: ["etibartask1", "etibartask2"],
        is_completed: false,
      })
    );
  };

  return (
    <div className={style.taskForm__wrapper}>
      <form onSubmit={handleCreateTask} className={style.form}>
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
