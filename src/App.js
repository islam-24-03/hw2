import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Inputs from './inputs';
import Result from './result';
import Notification from './notification';
import { calculate } from './redux/actions'; // Update the path to the actions

const App = () => {
  const result = useSelector((state) => state.result);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const handleCalculate = (operator, num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) {
      dispatch({ type: 'ERROR', payload: { error: 'Некорректные числа!' } });
      return;
    }

    const result = calculate(operator, num1, num2);
    dispatch({ type: 'CALCULATE', payload: { result } });
  };

  return (
    <div>
      <Inputs onCalculate={handleCalculate} />
      {result !== null && <Result result={result} />}
      {error && <Notification message={error} />}
    </div>
  );
};

export default App;
