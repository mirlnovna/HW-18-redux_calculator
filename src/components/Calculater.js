import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { calCulaterAction } from "./../store/calculator/CalculatorReducer";

const Calculater = () => {
  const result = useSelector((state) => state.calculator.result);
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch({ type: calCulaterAction.ADD, payload: 5 });
  };

  const subtractHandler = () => {
    dispatch({ type: calCulaterAction.SUBTRACT, payload: 10 });
  };

  const divideHandler = () => {
    dispatch({ type: calCulaterAction.DIVIDE, payload: 4 });
  };

  const multiplyHandler = () => {
    dispatch({ type: calCulaterAction.MULTIPLY, payload: 2 });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Calculater</h1>
      <div className={classes.value}>Result : {result}</div>
      <button onClick={addHandler}>+5</button>
      <button onClick={subtractHandler}>-10</button>
      <button onClick={multiplyHandler}>*2</button>
      <button onClick={divideHandler}>/4</button>
    </main>
  );
};

export default Calculater;
