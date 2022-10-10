import Welcome from '../components/Welcome/Welcome'
import { useLocation } from 'react-router-dom'
import { useAuth} from '../hooks/useAuth'
import HomeInfo from '../components/HomeInfo/HomeInfo'

function HomePage () {
  
    const location = useLocation()
    const { isAuth }  = useAuth()

    return (
        <div>
            {location.state && <h1 style={{textAlign:'center',marginTop:'50px',fontSize:'40px'}}>{location.state}</h1>}
            {isAuth ? <Welcome/> : <HomeInfo/>}
           
        </div>
    )
}


export default HomePage