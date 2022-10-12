import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from '../hooks/useAuth'

function RequireAuth({ children }) {
  const location = useLocation();
  const { isAuth } = useAuth()


  const auth = isAuth; 
  

  console.log(auth + " is AUTH")


  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export default RequireAuth;
 