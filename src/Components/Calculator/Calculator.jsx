import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      displayValue: '0',
      prevValue: null,
      operator: null,
      waitingForOperand: false,
      calculationHistory: [],
      showHistoryPopup: false,
      scientificMode: false,
    };
  }

  inputDigit = (digit) => {
    const { displayValue, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false,
      });
    } else {
      this.setState({
        displayValue:
          displayValue === '0' ? String(digit) : displayValue + digit,
      });
    }
  };

  inputDecimal = () => {
    const { displayValue, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({
        displayValue: '0.',
        waitingForOperand: false,
      });
    } else if (displayValue.indexOf('.') === -1) {
      this.setState({
        displayValue: displayValue + '.',
        waitingForOperand: false,
      });
    }
  };

  clearDisplay = () => {
    this.setState({
      displayValue: '0',
      prevValue: null,
      operator: null,
      waitingForOperand: false,
    });
  };

  performOperation = (nextOperator) => {
    const { displayValue, operator, prevValue } = this.state;

    const nextValue = parseFloat(displayValue);

    if (prevValue == null) {
      this.setState({
        prevValue: nextValue,
        displayValue: '0',
        operator: nextOperator,
        waitingForOperand: true,
      });
    } else if (operator) {
      const result = this.calculate(prevValue, nextValue, operator);

      this.setState({
        prevValue: result,
        displayValue: String(result),
        operator: nextOperator,
        waitingForOperand: true,
      });
    }

    const calculation = `${prevValue} ${operator} ${nextValue} = ${displayValue}`;
    this.addToHistory(calculation);
  };

  calculate = (prevValue, nextValue, operator) => {
    switch (operator) {
      case '+':
        return prevValue + nextValue;
      case '-':
        return prevValue - nextValue;
      case '*':
        return prevValue * nextValue;
      case '/':
        if (nextValue === 0) {
          alert('Division by zero is not allowed.');
          return prevValue;
        }
        return prevValue / nextValue;
      default:
        return nextValue;
    }
  };

  addToHistory = (calculation) => {
    const { calculationHistory } = this.state;
    const newHistory = [...calculationHistory, calculation].slice(-50);
    this.setState({ calculationHistory: newHistory });
  };

  toggleHistoryPopup = () => {
    this.setState((prevState) => ({
      showHistoryPopup: !prevState.showHistoryPopup,
    }));
  };

  toggleScientificMode = () => {
    this.setState((prevState) => ({
      scientificMode: !prevState.scientificMode,
    }));
  };

  render() {
    const {
      displayValue,
      calculationHistory,
      showHistoryPopup,
      scientificMode,
    } = this.state;

    return (
      <div className="calculator">
        <div className="display">{displayValue}</div>
        <div className="buttons">
          <button onClick={() => this.inputDigit(7)}>7</button>
          <button onClick={() => this.inputDigit(8)}>8</button>
          <button onClick={() => this.inputDigit(9)}>9</button>
          <button onClick={() => this.inputDigit(4)}>4</button>
          <button onClick={() => this.inputDigit(5)}>5</button>
          <button onClick={() => this.inputDigit(6)}>6</button>
          <button onClick={() => this.inputDigit(1)}>1</button>
          <button onClick={() => this.inputDigit(2)}>2</button>
          <button onClick={() => this.inputDigit(3)}>3</button>
          <button onClick={() => this.inputDigit(0)}>0</button>
          <button onClick={() => this.inputDecimal()}>.</button>
          <button onClick={() => this.performOperation('+')}>+</button>
          <button onClick={() => this.performOperation('-')}>-</button>
          <button onClick={() => this.performOperation('*')}>*</button>
          <button onClick={() => this.performOperation('/')}>/</button>
          <button onClick={() => this.clearDisplay()}>AC</button>
          <button onClick={() => this.performOperation('=')}>=</button>
          <button onClick={() => this.toggleScientificMode()}>
            {scientificMode ? 'Normal' : 'Scientific'}
          </button>
          {scientificMode && (
            <div className="scientific-buttons">
            <button onClick={() => this.calculateSquareRoot()}>√</button>

               
              {/* Add more scientific buttons */}
            </div>
          )}
          <button onClick={() => this.toggleHistoryPopup()}>History</button>
        </div>
        {showHistoryPopup && (
          <div className="history-popup">
            <div className="history-header">Calculation History</div>
            <ul>
              {calculationHistory.map((calculation, index) => (
                <li key={index}>{calculation}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Calculator;
