import { Link } from 'react-router-dom'
import style from './HomeInfo.module.css'


function HomeInfo () {
    return (
        <div className={style.homeInfo}>
            <p>Zehmet olmasa <Link to='/login'>Girish</Link> edin ve yahud <Link to='/register'>Qeydiyyatdan</Link> kechin!</p>
        </div>
    )
}

export default HomeInfo