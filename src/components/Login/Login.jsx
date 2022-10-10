import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import UserForm from "../UserForm/UserForm";
import style from "./Login.module.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/features/userSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";
  const [errorMessage, setErrorMessage] = useState("");
  function handleLogin(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.id,
            token: user.accessToken,
          })
        );
        navigate("/", { replace: true, state: email });
      })
      .catch((error) => {
        // setErrorMessage(error.message);
        setErrorMessage("Email ve yahud parol yalnishdir!");
      });
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
