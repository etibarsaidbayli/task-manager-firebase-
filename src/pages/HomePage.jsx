import Welcome from "../components/Welcome/Welcome";
import { useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import HomeInfo from "../components/HomeInfo/HomeInfo";
import { useEffect} from 'react'
function HomePage() {
  const location = useLocation();
  const { isAuth } = useAuth();

    // useEffect(() => {
    //   fetch('http://127.0.0.1:8000/sanctum/csrf-cookie').then((response) => 
    //   fetch('http://127.0.0.1:8000/api/register', {
    //     method:"POST",
    //     headers:{
    //       "Content-Type" : "application/json",
    //       "X-XSRF-TOKEN": "X-XSRF-TOKEN", // change the name of the header to "X-XSRF-TOKEN" and it should works
    //       withCredentials: true
    //     },
    //     body:JSON.stringify({
    //       name:'test name',
    //       email:"testtest@gmail.com",
    //       password:"123456789"
    //     })
    //   })
    //   )
    // },[])


  return (
    <div>
      {location.state && (
        <h1
          style={{ textAlign: "center", marginTop: "50px", fontSize: "40px" }}
        >
          {location.state}
        </h1>
      )}
      {isAuth ? <Welcome /> : <HomeInfo />}
    </div>
  );
}

export default HomePage;
