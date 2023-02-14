import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActionTypes } from "../store/auth/AuthReducer";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  const [formState, setState] = useState({
    email: "",
    password: "",
  });
  const inputChangeHandler = (name) => {
    return (e) => {
      setState((prevState) => ({ ...prevState, [name]: e.target.value }));
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      formState.email === "test@gmail.com" &&
      formState.password === "121212"
    ) {
      dispatch({
        type: authActionTypes.LOGIN,
        payload: formState.email,
      });
    }
  };
  // console.log(submitHandler);
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={inputChangeHandler("email")}
              value={formState.email}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={inputChangeHandler("password")}
              value={formState.password}
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
