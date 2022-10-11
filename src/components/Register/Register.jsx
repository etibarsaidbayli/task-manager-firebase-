import { useDispatch } from "react-redux";
import { useState } from "react";
import { createUser, setUser } from "../../store/features/userSlice";
import UserForm from "../UserForm/UserForm";
import style from "./Register.module.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  // const handleRegister = (email, password) => {
  //   const auth = getAuth();
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       dispatch(
  //         setUser({
  //           email: user.email,
  //           id: user.id,
  //           token: user.accessToken,
  //         })
  //       );
  //       navigate("/", { replace: true, state: email });
  //     })
  //     .catch((error) => {
  //       // setErrorMessage(error.message);
  //       setErrorMessage(`${email}  artiq qeydiyyat olunub`);
  //     })
  // };

  const handleRegister =  async (name, email, password) => {
    // dispatch(
    //   createUser({
    //     name,
    //     email,
    //     password,
    //   })
    // );
    const response= await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie')
    // fetch('http://127.0.0.1:8000/sanctum/csrf-cookie').then((res) => {
    //         console.log(res)

            
    // })


      fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        // "_token": "{{ csrf_token() }}",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
  };
  
  return (  
    <div className={style.register__wrapper}>
      <UserForm
        title="register"
        handleClick={handleRegister}
        setErrorMessage={setErrorMessage}
      />
      <p className={style.register__errorMessage}>
        {errorMessage && errorMessage}
      </p>
    </div>
  );
}

export default Register;
