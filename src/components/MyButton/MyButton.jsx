import style from "./MyButton.module.css";

function MyButton({ children, role, disabled, handleClick }) {
 

  let myBtn = null;
  if (role === "primary") {
    myBtn = style.myBtn__primary;
  } else if (role === "edit") {
    myBtn = style.myBtn__edit;
  } else if (role === "primary__position") {
    myBtn = style.myBtn__position;
    
  } else if (role === "delete") {
    myBtn= style.deleteBtn
  }
  
  else {
    myBtn = style.myBtn__save;
  }
  return (
    <button className={myBtn} disabled={disabled} onClick={handleClick}>
      {children}
    </button>
  );
}

export default MyButton;
