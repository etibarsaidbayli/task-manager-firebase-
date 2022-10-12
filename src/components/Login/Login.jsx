import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import UserForm from "../UserForm/UserForm";
import style from "./Login.module.css";
import { loginUser, setUser } from "../../store/features/userSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";
  const [errorMessage, setErrorMessage] = useState("");
  function handleLogin(name, email, password) {
  
    console.log(name, email, password);
    dispatch(
      loginUser({
        name,
        email,
        password,
      })
    );
    // dispatch(setUser({ name, email, password }))
    // navigate('/',{replace:true,state:name})
  }

  return (
    <div className={style.login__wrapper}>
      {fromPage}
      <UserForm
        title="login"
        handleClick={handleLogin}
        setErrorMessage={setErrorMessage}
      />
      <p className={style.login__errorMessage}>
        {errorMessage && errorMessage}
      </p>
    </div>
  );
}

export default Login;
