import React, { useState } from 'react';

const Inputs = ({ onCalculate }) => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');

    const calculate = (operator) => {
        if (num1 === '' || num2 === '') {
            alert('Пустое поле!');
            return;
        }
        onCalculate(operator, parseInt(num1), parseInt(num2));
    };

    return (
        <div>
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
            <button onClick={() => calculate('+')}>+</button>
            <button onClick={() => calculate('-')}>-</button>
            <button onClick={() => calculate('*')}>*</button>
            <button onClick={() => calculate('/')}>/</button>
        </div>
    );
};

export default Inputs;
