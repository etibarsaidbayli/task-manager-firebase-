import MyButton from "../MyButton/MyButton";
import style from "./UserForm.module.css";
import { useState } from "react";

function UserForm({ title, handleClick,setErrorMessage }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [userName,setUserName] = useState("")
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEmail("")
    setPass("")
  };

  const handleEmailChange = (e) => {
      setEmail(e.target.value)
      setErrorMessage("")
  }

  const handlePasswordChange = (e) => {
    setPass(e.target.value)
    setErrorMessage("")
  }

  const handleNameChange = (e) =>{
    setUserName(e.target.value) 
    
   
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className={style.userForm}
      autoComplete="off"
    >   
     <input
     onChange={handleNameChange}
        value={userName}
        type="text"
        placeholder="adinizi qeyd edin"
      />

      <input
        onChange={handleEmailChange}
        value={email}
        type="email"
        placeholder="emailinizi qeyd edin"
      />
      <input
        onChange={handlePasswordChange}
        value={pass}
        type="password"
        placeholder="parolunuzu daxil edin"
      />
      <MyButton
        role="primary"
        disabled={false}
        handleClick={() => handleClick(userName,email, pass)}
      >
        {title}
      </MyButton>
    </form>
  );
}

export default UserForm;
