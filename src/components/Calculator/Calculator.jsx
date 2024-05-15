import { useState } from 'react';
import Button from '../Button/Button';
import Display from '../Display/Display';
import './Calculator.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');
  const [waitingForSecondValue, setWaitingForSecondValue] = useState(false);
  const [lastValue, setLastValue] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      handleClear();
      return;
    }

    if (displayValue === "ERROR") {
      return; // No permitir más operaciones si está en estado de error
    }

    if (typeof value === 'number' || value === '.') {
      if (waitingForSecondValue) {
        setDisplayValue(String(value));
        setWaitingForSecondValue(false);
      } else {
        if (displayValue.length < 9) {
          if (value === '.' && displayValue.includes('.')) {
            return; // No permitir más de un punto decimal
          }
          setDisplayValue(displayValue === '' ? String(value) : displayValue + value);
        } else {
          setDisplayValue("ERROR");
        }
      }
    } else {
      if (value === '=') {
        if (operator) {
          const result = performOperation();
          if (result.length > 9) {
            setDisplayValue("ERROR");
          } else {
            setDisplayValue(result);
            setFirstValue(result);
            setLastValue(displayValue);
          }
          setWaitingForSecondValue(false);
        } else if (lastValue !== '') {
          const result = performRepeatedOperation();
          if (result.length > 9) {
            setDisplayValue("ERROR");
          } else {
            setDisplayValue(result);
            setFirstValue(result);
          }
        }
      } else {
        setOperator(value);
        setFirstValue(displayValue);
        setWaitingForSecondValue(true);
      }
    }
  };

  const handleClear = () => {
    setDisplayValue('');
    setFirstValue('');
    setOperator(null);
    setWaitingForSecondValue(false);
    setLastValue('');
  };

  const performOperation = () => {
    const first = parseFloat(firstValue);
    const second = parseFloat(displayValue);
    let result;

    if (operator === '+') result = first + second;
    if (operator === '-') result = first - second;
    if (operator === '*') result = first * second;
    if (operator === '/') result = first / second;

    if (isNaN(result)) {
      return "ERROR";
    }

    let resultString = String(result);

    if (resultString.length > 9) {
      const maxDecimals = Math.max(0, 9 - Math.floor(result).toString().length - 1);
      resultString = result.toFixed(maxDecimals);

      if (resultString.length > 9) {
        return "ERROR";
      }
    }

    return resultString;
  };

  const performRepeatedOperation = () => {
    const first = parseFloat(firstValue);
    const second = parseFloat(lastValue);
    let result;

    if (operator === '+') result = first + second;
    if (operator === '-') result = first - second;
    if (operator === '*') result = first * second;
    if (operator === '/') result = first / second;

    if (isNaN(result)) {
      return "ERROR";
    }

    let resultString = String(result);

    if (resultString.length > 9) {
      const maxDecimals = Math.max(0, 9 - Math.floor(result).toString().length - 1);
      resultString = result.toFixed(maxDecimals);

      if (resultString.length > 9) {
        return "ERROR";
      }
    }

    return resultString;
  };

  return (
    <div className="calculator">
      <Display value={displayValue} className="display" />
      <div className="button-row">
        <Button value={'C'} onClick={handleButtonClick} className="button clear" />
        <Button value={'/'} onClick={handleButtonClick} className="button operator" />
        <Button value={'*'} onClick={handleButtonClick} className="button operator" />
        <Button value={'-'} onClick={handleButtonClick} className="button operator" />
        <Button value={7} onClick={handleButtonClick} className="button" />
        <Button value={8} onClick={handleButtonClick} className="button" />
        <Button value={9} onClick={handleButtonClick} className="button" />
        <Button value={'+'} onClick={handleButtonClick} className="button operator" />
        <Button value={4} onClick={handleButtonClick} className="button" />
        <Button value={5} onClick={handleButtonClick} className="button" />
        <Button value={6} onClick={handleButtonClick} className="button" />
        <Button value={'='} onClick={handleButtonClick} className="button equal" />
        <Button value={1} onClick={handleButtonClick} className="button" />
        <Button value={2} onClick={handleButtonClick} className="button" />
        <Button value={3} onClick={handleButtonClick} className="button" />
        <Button value={0} onClick={handleButtonClick} className="button cero" />
        <Button value={'.'} onClick={handleButtonClick} className="button" />
      </div>
    </div>
  );
};

export default Calculator;
