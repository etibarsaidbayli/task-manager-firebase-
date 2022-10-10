import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useAuth } from "../../hooks/useAuth";
import { removeUser } from "../../store/features/userSlice";
import style from "./Navbar.module.css";

function Navbar() {
  const dispatch = useDispatch();
  const { isAuth } = useAuth();
  console.log(isAuth);
  const handleSignOut = () => {
    dispatch(removeUser());
  };
  return (
    <header className={style.header}>
      <nav>
        <ul className={style.nav__}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav__active" : "nav__NotActive"
              }
            >
              Home
            </NavLink>
          </li>
          {!isAuth && (
            <>
              <li>
                <NavLink
                  to="login"
                  className={({ isActive }) =>
                    isActive ? "nav__active" : "nav__NotActive"
                  }
                >
                  Girish
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="register"
                  className={({ isActive }) =>
                    isActive ? "nav__active" : "nav__NotActive"
                  }
                >
                  Qeydiyyat
                </NavLink>
              </li>
            </>
          )}

          <li>
            <NavLink
              to="/createtask"
              className={({ isActive }) =>
                isActive ? "nav__active" : "nav__NotActive"
              }
            >
              Create Task
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/taskslist"
              className={({ isActive }) =>
                isActive ? "nav__active" : "nav__NotActive"
              }
            >
              Tasks List
            </NavLink>
          </li>
          {isAuth && (
            <li>
              <NavLink
                onClick={handleSignOut}
                className={({ isActive }) =>
                  isActive ? "nav__active" : "nav__NotActive"
                }
              >
                Chixish
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
