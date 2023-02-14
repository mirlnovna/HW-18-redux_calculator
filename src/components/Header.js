import { useDispatch, useSelector } from "react-redux";
import { authActionTypes } from "../store/auth/AuthReducer";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthhorized = useSelector((state) => state.auth.isAuthhorized);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthhorized && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button
                onClick={() => dispatch({ type: authActionTypes.LOGOUT })}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
