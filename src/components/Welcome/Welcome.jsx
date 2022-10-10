import { Link } from "react-router-dom";
import style from "./Welcome.module.css";

function Welcome() {
  return (
    <div className={style.welcome}>
      <h1>Xosh geldiniz!</h1>
      <Link to="/taskslist" className={style.tasks__link}>
        <p className={style.paragraph}>
          <b>Movcud tasklarin sayi</b>:
          <span className={style.task__count}>10</span>
        </p>
      </Link>
    </div>
  );
}

export default Welcome;
